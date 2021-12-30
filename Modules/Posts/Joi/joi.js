// ///////////////////////////////////////////////////////////////
// / <==> /// This File Contains Post Joi Validations /// <==> ///
// ///////////////////////////////////////////////////////////////

/* ================ /// <==> Variables Declaration <==> /// ================ */
const joi = require('joi');
/* =========== /// <==> End <==> ===========*/

/* ================ /// <==> Post Joi Validations <==> /// ================ */
const postJoi = {
  uploadImgValidations: {
    body: joi.object().required().keys({
      file: [joi.string().required()],
    }), 
  },
  createPostValidations: {
    body: joi.object().required().keys({
      postHtml: joi.string().required(),
      type: joi.string(),
      state: joi.string(),
      tags: joi.array().items(joi.string()),
    }),
    params: joi.object().required().keys({
      blogId: joi.string().required(),
    }),
  },
  showPostValidations: {
    params: joi.object().required().keys({
      postId: joi.string().required(),
    }),
  },
  editPostValidations: {
    body: joi.object().required().keys({
      postHtml: joi.string().required(),
    }),
    params: joi.object().required().keys({
      postId: joi.string().required(),
    }),
  },
  deletePostValidations: {
    params: joi.object().required().keys({
      postId: joi.string().required(),
    }),
  },
  reportPostValidations: {
    params: joi.object().required().keys({
      postId: joi.string().required(),
    }),
  },
  likePostValidations: {
    params: joi.object().required().keys({
      blogId: joi.string().required(),
      postId: joi.string().required(),
    }),
  },
  commentPostValidations: {
    params: joi.object().required().keys({
      blogId: joi.string().required(),
      postId: joi.string().required(),
    }),
    body: joi.object().required().keys({
      text: joi.string().required(),
    }),
  },
  reblogPostValidations: {
    params: joi.object().required().keys({
      blogId: joi.string().required(),
      postId: joi.string().required(),
    }),
    body: joi.object().required().keys({
      text: joi.string().required(),
    }),
  },
  removeCommentValidations: {
    params: joi.object().required().keys({
      postId: joi.string().required(),
      commentId: joi.string().required(),
    }),
  },
  removeReblogValidations: {
    params: joi.object().required().keys({
      postId: joi.string().required(),
      reblogId: joi.string().required(),
    }),
  },
  getNotesValidations: {
    params: joi.object().required().keys({
      notesId: joi.string().required(),
    }),
  },
  getBlogPostsValidations: {
    params: joi.object().required().keys({
      blogId: joi.string().required(),
    }),
  },
  getDashboardValidations: {
    decoded: joi.object().required().keys({
      email: joi.string().required(),
    }),
  },
  activityFeedValidations: {
    params: joi.object().required().keys({
      blogId: joi.string().required(),
    }),
  },

};
/* =========== /// <==> End <==> ===========*/

/* ============= /// <==> Exports Post Joi Validations <==> /// ============= */
module.exports = postJoi;
/* =========== /// <==> End <==> ===========*/
