/////////////////////////////////////////////////////////////////
/// <==> /// This File Contains Post Joi Validations /// <==> ///
/////////////////////////////////////////////////////////////////

/* ====================== /// <==> Variables Declaration <==> /// ====================== */
const joi = require('joi');
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Post Joi Validations <==> /// ====================== */
const postJoi = {
    createPostValidations: {
        body: joi.object().required().keys({
            postHtml: joi.string().required(),
            type: joi.string(),
            state: joi.string(),
            tags: [joi.string()]
        }),
        params: joi.object().required().keys({
            blogId: joi.string().required()
        })
    },
    showPostValidations: {
        params: joi.object().required().keys({
            postId: joi.string().required()
        })
    },
    editPostValidations: {
        body: joi.object().required().keys({
            postHtml: joi.string().required()
        }),
        params: joi.object().required().keys({
            postId: joi.string().required()
        })
    },
    deletePostValidations: {
        params: joi.object().required().keys({
            postId: joi.string().required()
        })
    },
    likePostValidations: {
        params: joi.object().required().keys({
            postId: joi.string().required()
        })
    },
    commentPostValidations: {
        params: joi.object().required().keys({
            postId: joi.string().required()
        })
    },
    shareWithValidations: {
        params: joi.object().required().keys({
            postId: joi.string().required()
        })
    },
    reblogPostValidations: {
        params: joi.object().required().keys({
            postId: joi.string().required()
        })
    }
    
};
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Exports Post Joi Validations <==> /// ====================== */
module.exports = postJoi;
/* =========== /// <==> End <==> ===========*/