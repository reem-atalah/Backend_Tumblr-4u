/* eslint-disable linebreak-style */
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
      age: joi.number(),
    }),
  },
  SignInValidations: {
    body: joi.object().required().keys({
      email: joi.string().required().email(),
      password: joi.string().required(),
    }),
  },
  VerifiyAccountValidations: {
    body: joi.object().required().keys({
    }),
  },
  GoogleInfoValidations: {
    body: joi.object().required().keys({
      blogName: joi.string().required(),
      age: joi.number().required(),
    }),

    headers: joi.object().required().keys({
      token: joi.string().required(),
    }),
  },
  GoogleAndroidValidations: {
    body: joi.object().required().keys({
      googleToken: joi.string().required(),
    }),
  },
  ChangeEmailValidations: {
    body: joi.object().required().keys({
      email: joi.string().required().email(),
      password: joi.string().required(),
    }),
    headers: joi.object().required().keys({
      token: joi.string().required(),
    }),
  },
  ForgetPasswordValidations: {
    body: joi.object().required().keys({
      email: joi.string().required(),
    }),
  },
  ResetPasswordValidations: {
    body: joi.object().required().keys({
      email: joi.string().required(),
      password: joi.string().required(),
      cpassword: joi.string().required(),
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
  CreateBlogValidations: {
    body: joi.object().required().keys({
      title: joi.string().required(),
      name: joi.string().required(),
      privacy: joi.boolean().required(),
      password: joi.string(),

    }),
  },
  DeleteBlogValidations: {
    body: joi.object().required().keys({
      blogId: joi.string().required(),
    }),
  },
  DoesFollowValidations: {
    body: joi.object().required().keys({
    }),
  },
  RetrieveUserValidations: {
    body: joi.object().required().keys({
    }),
  },
   DeleteUserValidations: {
    body: joi.object().required().keys({
    }),
  },
  getInterestsFromUserValidations: {
    body: joi.object().required().keys({
      interests: joi.array().required(),
    }),
  },
  updateColorValidations: {
    body: joi.object().required().keys({
      bodyColor: joi.number().required(),
    }),
  },
};
/* =========== /// <==> End <==> ===========*/

/* ============= /// <==> Exports User Joi Validations <==> /// ============= */
module.exports = userJoi;
/* =========== /// <==> End <==> ===========*/
