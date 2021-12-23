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
    response.json({auth:request.headers.authorization,header:request.headers,res:request})
      
  };
};
/* =========== <--> End <--> =========== */

/* ================= <-- Export Is Authorized Function --> ================= */
module.exports = isAuthorized;
/* =========== <--> End <--> =========== */
