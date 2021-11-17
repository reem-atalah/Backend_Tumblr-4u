////////////////////////////////////////////////////////////////////////////////////////
//// <==> /// This File Contains Function That Check On User Authorization /// <==> ////
////////////////////////////////////////////////////////////////////////////////////////

/* ======================== <-- Variables Declarations --> ======================== */
const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');
const userRbac = require('../Rbac/rbac');
/* =========== <--> End <--> =========== */

/* ======================== <-- Authorization Function --> ======================== */
const isAuthorized = (endPoint) => {

    return async(request, response, next) => {
        try {
            if (request.headers.authorization) {
                const token = request.headers.authorization.split(' ')[1];
                if (token) {
                    const decoded = jwt.verify(token, process.env.KEY);
                    const isAllowed = await userRbac.can(decoded.role.toString(), endPoint);
                    if (isAllowed) {
                        request.decoded = decoded;
                        next();
                    } else
                        response.status(StatusCodes.UNAUTHORIZED).json('Not Authorized');
                } else
                    response.status(StatusCodes.BAD_REQUEST).json('Token is Required');

            } else
                response.status(StatusCodes.BAD_REQUEST).json('Token is Required');

        } catch (error) {
            response.status(StatusCodes.BAD_REQUEST).json('Error In Is Autorized Function');
        }
    };
};
/* =========== <--> End <--> =========== */

/* ======================== <-- Export Is Authorized Function --> ======================== */
module.exports = isAuthorized;
/* =========== <--> End <--> =========== */