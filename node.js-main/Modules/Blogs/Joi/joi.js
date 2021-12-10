// ///////////////////////////////////////////////////////////////
// / <==> /// This File Contains User Joi Validations /// <==> ///
// ///////////////////////////////////////////////////////////////

/* ================== /// <==> Variables Declaration <==> /// =============== */
const joi = require('joi');
/* =========== /// <==> End <==> ===========*/

/* ================= /// <==> User Joi Validations <==> /// ================= */
const blogJoi = {

  BlockBlogValidations: {
    body: joi.object().required().keys({
      blockedBlogId: joi.string().required(),
    }),
  },

  UnblockBlogValidations: {
    body: joi.object().required().keys({
      unblockedBlogId: joi.string().required(),
    }),
  },
  EditBlogValidations: {
    body: joi.object().required().keys({
      name: joi.string(),
      avatar: joi.string(),
      accent: joi.string(),
      title: joi.string(),
      headerImage: joi.string(),
      background: joi.string(),
      theme: joi.string(),
      password: joi.string(),
      description: joi.string(),
    }),
  },
  RetrieveBlogValidations: {
    body: joi.object().required().keys({}),
  },


};
/* =========== /// <==> End <==> ===========*/

/* ============== /// <==> Exports User Joi Validations <==> ///============= */
module.exports = blogJoi;
/* =========== /// <==> End <==> ===========*/
