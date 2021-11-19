// /////////////////////////////////////////////////////////////////////////////
// //<==>// This File Contains Function That Checks User Authorization //<==>//
// /////////////////////////////////////////////////////////////////////////////

/* ================== <-- Variables Declarations --> =================== */
const {StatusCodes} = require('http-status-codes');
const jwt = require('jsonwebtoken');
const userRbac = require('../Rbac/rbac');
/* =========== <--> End <--> =========== */

/* ==================== <-- Authorization Function --> =================== */
const isAuthorized = (endPoint) => {
  return async (request, response, next) => {
    try {
      if (request.headers.authorization) {
        const token = request.headers.authorization.split(' ')[1];
        if (token) {
          const decoded = jwt.verify(token, process.env.KEY);
          const STRDECROLE=decoded.role.toString();
          const isAllowed = await userRbac.can(STRDECROLE, endPoint);
          if (isAllowed) {
            request.decoded = decoded;
            next();
          } else {
            response.status(StatusCodes.UNAUTHORIZED).json('Not Authorized');
          }
        } else {
          response.status(StatusCodes.BAD_REQUEST).json('Token is Required');
        }
      } else {
        response.status(StatusCodes.BAD_REQUEST).json('Token is Required');
      }
    } catch (error) {
      const ERROR='Error In blockBlog Function (<:>)';
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ERROR);
    }
  };
};
/* =========== <--> End <--> =========== */

/* ================ <-- Export Is Authorized Function --> =================== */
module.exports = isAuthorized;
/* =========== <--> End <--> =========== */
