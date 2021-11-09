/////////////////////////////////////////////////////////////////
/// <==> /// This File Contains Post Joi Validations /// <==> ///
/////////////////////////////////////////////////////////////////

/* ====================== /// <==> Variables Declaration <==> /// ====================== */
const joi = require('joi');
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Post Joi Validations <==> /// ====================== */
const postJoi = {
    CreatePostValidations: {
        body: joi.object().required().keys({
            title: joi.string().required(),
            description: joi.string().required(),
        })
    },
    EditPostValidations: {
        body: joi.object().required().keys({
            postId: joi.string().required(),
            title: joi.string().required(),
            description: joi.string().required(),
        })
    },
    DeletePostValidations: {
        body: joi.object().required().keys({
            postId: joi.string().required(),
        })
    },
    GetPostsValidations: {
        body: joi.object().required().keys({})
    },
    BlockPostValidations: {
        body: joi.object().required().keys({
            postId: joi.string().required(),
        })
    }
};
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Exports Post Joi Validations <==> /// ====================== */
module.exports = postJoi;
/* =========== /// <==> End <==> ===========*/