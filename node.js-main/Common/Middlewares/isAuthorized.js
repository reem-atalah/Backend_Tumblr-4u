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

    return async(req, res, next) => {
        try {
            if (req.headers.authorization) {
                const token = req.headers.authorization.split(' ')[1];
                if (token) {
                    const decoded = jwt.verify(token, process.env.KEY);
                    const isAllowed = await userRbac.can(decoded.role.toString(), endPoint);
                    if (isAllowed) {
                        req.decoded = decoded;
                        next();
                    } else
                        res.status(StatusCodes.UNAUTHORIZED).json('Not Authorized');
                } else
                    res.status(StatusCodes.BAD_REQUEST).json('Token is Required');

            } else
                res.status(StatusCodes.BAD_REQUEST).json('Token is Required');

        } catch (error) {
            res.status(StatusCodes.BAD_REQUEST).json('Error In Is Autorized Function');
        }
    };
};
/* =========== <--> End <--> =========== */

/* ======================== <-- Export Is Authorized Function --> ======================== */
module.exports = isAuthorized;
/* =========== <--> End <--> =========== */