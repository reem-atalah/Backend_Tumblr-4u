// ///////////////////////////////////////////////////////////////
// / <==> /// This File Contains User Joi Validations /// <==> ///
// ///////////////////////////////////////////////////////////////

/* ================= /// <==> Variables Declaration <==> /// ================ */
const joi = require('joi');
/* =========== /// <==> End <==> ===========*/

/* ================= /// <==> User Joi Validations <==> /// ================= */
const userJoi = {

  FollowBlogValidations: {
    body: joi.object().required().keys({
      blogId: joi.string().required(),
    }),
  },

  UnfollowBlogValidations: {
    body: joi.object().required().keys({
      blogId: joi.string().required(),
    }),
  },

};
/* =========== /// <==> End <==> ===========*/

/* ============= /// <==> Exports User Joi Validations <==> /// ============= */
module.exports = userJoi;
/* =========== /// <==> End <==> ===========*/
