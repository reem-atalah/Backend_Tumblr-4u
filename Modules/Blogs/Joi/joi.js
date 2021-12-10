/* eslint-disable linebreak-style */
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

};
/* =========== /// <==> End <==> ===========*/

/* ============== /// <==> Exports User Joi Validations <==> ///============= */
module.exports = blogJoi;
/* =========== /// <==> End <==> ===========*/
