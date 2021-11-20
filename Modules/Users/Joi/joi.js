// ///////////////////////////////////////////////////////////////
// / <==> /// This File Contains User Joi Validations /// <==> ///
// ///////////////////////////////////////////////////////////////

/* ================ /// <==> Variables Declaration <==> /// ================ */
const joi = require('joi');
/* =========== /// <==> End <==> ===========*/

/* ================ /// <==> User Joi Validations <==> /// ================ */

const userJoi = {
  SignUpValidations: {
    body: joi.object().required().keys({
      email: joi.string().required().email(),
      password: joi.string().required(),
      blogName: joi.string().required(),
      age: joi.number().required(),
      city: joi.string().required(),
      country: joi.string().required(),
    }),
  },
  SignInValidations: {
    body: joi.object().required().keys({
      email: joi.string().required().email(),
      password: joi.string().required(),
    }),
  },
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
