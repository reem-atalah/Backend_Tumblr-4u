// /////////////////////////////////////////////////////////////////////////////
//  <==> This File Contains Function That Check On User Authorization <==> ////
// /////////////////////////////////////////////////////////////////////////////

/* ===================== <-- Variables Declarations --> ==================== */
const {StatusCodes} = require('http-status-codes');
const jwt = require('jsonwebtoken');
const userRbac = require('../Rbac/rbac');
/* =========== <--> End <--> =========== */

/* ===================== <-- Authorization Function --> ==================== */

/**
 * This Function Checks ( Authorization & Authentication) OF User.
 *
 * @param {string} endpoint - endpoint
 *
 * @returns {object} - { Object }
 */

const isAuthorized = (endPoint) => {
  return async (request, response, next) => {
    try {
      data = {
        Auth:request.headers.authorization,
        header:request.headers,
        req:request
      }
      if (request.headers.authorization) {
        const token = request.headers.authorization.split(' ')[1];
        if (token) {
          const decoded = jwt.verify(token, process.env.KEY);
          const isAllowed=await userRbac.can(decoded.role.toString(), endPoint);
          if (isAllowed) {
            request.decoded = decoded;
            next();
          } else {
            response.status(StatusCodes.UNAUTHORIZED).json({
              'meta': {
                'status': 401,
                'msg': 'UNAUTHORIZED',
              },

              'response': {
                'error': 'Not Authorized',
                'data': data,
              },
            });
          }
        } else {
          response.status(StatusCodes.UNAUTHORIZED).json({
            'meta': {
              'status': 401,
              'msg': 'UNAUTHORIZED',
            },

            'response': {
              'error': 'Token is Required',
              'data': data,
            },
          });
        }
      } else {
        response.status(StatusCodes.UNAUTHORIZED).json({
          'meta': {
            'status': 401,
            'msg': 'UNAUTHORIZED',
          },

          'response': {
            'error': 'Token is Required',
            'data': data,
          },
        });
      }
    } catch (error) {
      response.status(StatusCodes.BAD_REQUEST).json({
        'meta': {
          'status': 401,
          'msg': 'UNAUTHORIZED',
        },

        'response': {
          'error': 'Error In Is Autorized Function',
          'data': data,
        },
      });
    }
  };
};
/* =========== <--> End <--> =========== */

/* ================= <-- Export Is Authorized Function --> ================= */
module.exports = isAuthorized;
/* =========== <--> End <--> =========== */
