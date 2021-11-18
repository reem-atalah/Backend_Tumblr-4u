////////////////////////////////////////////////////////////////////////////
/// <==> /// This File Contains Function That Validate Requests /// <==> ///
////////////////////////////////////////////////////////////////////////////

/* ====================== /// <==> Variables Declaration <==> /// ====================== */
const { StatusCodes } = require('http-status-codes');
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Validate req Fucntion <==> /// ====================== */
const ValidateRequest = (schema) => {
    return (req, res, next) => {

        try {
            const validationErorrs = [];
            [('headers', 'params', 'query', 'body')].forEach(key => {
                const validation = schema[key].validate(req[key]);
                if (validation.error)
                    validationErorrs.push(validation.error.details[0].message.split('\"').join());
            });

            if (validationErorrs.length) {
                res.status(StatusCodes.BAD_REQUEST).json(validationErorrs[0]);
                console.log('Error in Sent req');
            } else
                next();
        } catch (error) {
            console.log('Error In Validate req Function');
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json('Error In Validate req Function');
        }
    };
};
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Export Validate req Function <==> /// ====================== */
module.exports = ValidateRequest;
/* =========== /// <==> End <==> ===========*/