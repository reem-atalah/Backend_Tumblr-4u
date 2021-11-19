////////////////////////////////////////////////////////////////////////////
/// <==> /// This File Contains Function That Validate Requests /// <==> ///
////////////////////////////////////////////////////////////////////////////

/* ====================== /// <==> Variables Declaration <==> /// ====================== */
const { StatusCodes } = require('http-status-codes');
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Validate Request Fucntion <==> /// ====================== */
/**
 * This Function Checks Validity OF Sent Request.
 * 
 * @param {string} schema - schema
 * 
 * @returns {object} - { Object }
 */

const ValidateRequest = (schema) => {
    return (request, response, next) => {

        try {
            const validationErorrs = [];
            [('headers', 'params', 'query', 'body')].forEach(key => {
                const validation = schema[key].validate(request[key]);
                if (validation.error)
                    validationErorrs.push(validation.error.details[0].message.split('\"').join());
            });

            if (validationErorrs.length) {
                response.status(StatusCodes.BAD_REQUEST).json({
                    "meta": {
                        "status": 400,
                        "msg": "BAD_REQUEST"
                    },

                    "response": {
                        "error": validationErorrs[0],
                        "data": ""
                    }
                });
                console.log('Error in Sent Request');
            } else
                next();
        } catch (error) {
            response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                "meta": {
                    "status": 400,
                    "msg": "BAD_REQUEST"
                },

                "response": {
                    "error": 'Error In Validate Request Function',
                    "data": ""
                }
            });
        }
    };
};
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Export Validate Request Function <==> /// ====================== */
module.exports = ValidateRequest;
/* =========== /// <==> End <==> ===========*/