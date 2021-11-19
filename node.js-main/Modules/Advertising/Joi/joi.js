////////////////////////////////////////////////////////////////////////
/// <==> /// This File Contains Advertising Joi Validations /// <==> ///
////////////////////////////////////////////////////////////////////////

/* ====================== /// <==> Variables Declaration <==> /// ====================== */
const joi = require('joi');
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Advertising Joi Validations <==> /// ====================== */
const advertisingJoi = {
    CreateAdvertiseValidations: {
        body: joi.object().required().keys({
            title: joi.string().required(),
            description: joi.string().required(),
        })
    },
    GetAllAdvertisingsValidations: {
        body: joi.object().required().keys({})
    },
    UpdateAdvertisingValidations: {
        body: joi.object().required().keys({
            id: joi.string().required(),
            title: joi.string().required(),
            description: joi.string().required(),
        })
    },
    DeleteAdvertisingValidations: {
        body: joi.object().required().keys({
            id: joi.string().required(),
        })
    },

};
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Exports Advertising Joi Validations <==> /// ====================== */
module.exports = advertisingJoi;
/* =========== /// <==> End <==> ===========*/