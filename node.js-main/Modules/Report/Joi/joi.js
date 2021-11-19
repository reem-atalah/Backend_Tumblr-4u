/////////////////////////////////////////////////////////////////
/// <==> /// This File Contains Report Joi Validations /// <==> ///
/////////////////////////////////////////////////////////////////

/* ====================== /// <==> Variables Declaration <==> /// ====================== */
const joi = require('joi');
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Report Joi Validations <==> /// ====================== */
const reportJoi = {
    CreateReportValidations: {
        body: joi.object().required().keys({
            postId: joi.string().required(),
            reportComment: joi.string().required(),
        })
    },
    GetReportValidations: {
        body: joi.object().required().keys({
            postId: joi.string().required(),
        })
    },
};
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Exports Report Joi Validations <==> /// ====================== */
module.exports = reportJoi;
/* =========== /// <==> End <==> ===========*/