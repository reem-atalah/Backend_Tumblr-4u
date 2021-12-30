// /////////////////////////////////////////////////////////////////
// /// <==> /// This File Contains User Joi Validations /// <==> ///
// /////////////////////////////////////////////////////////////////

// /* ====================== /// <==> Variables Declaration <==> /// ====================== */
// const joi = require('joi');
// /* =========== /// <==> End <==> ===========*/

// /* ====================== /// <==> User Joi Validations <==> /// ====================== */
// const userJoi = {
//     SignUpValidations: {
//         body: joi.object().required().keys({
//             username: joi.string().required(),
//             email: joi.string().required().email(),
//             password: joi.string().required(),
//             cpassword: joi.string().required(),
//             phone: joi.string().required(),
//             location: joi.string().required(),
//         })
//     },
//     SignInValidations: {
//         body: joi.object().required().keys({
//             email: joi.string().required().email(),
//             password: joi.string().required()
//         })
//     },
//     Update_ProfileValidations: {
//         body: joi.object().required().keys({
//             username: joi.string().required(),
//             phone: joi.string().required(),
//             location: joi.string().required(),
//         }),
//     },
//     Update_PasswordValidations: {
//         body: joi.object().required().keys({
//             oldPassword: joi.string().required(),
//             newPassword: joi.string().required(),
//             cNewPassword: joi.string().required(),
//         }),
//     },
//     DeactivateValidations: {
//         body: joi.object().required().keys({})
//     },
//     ActivateValidations: {
//         body: joi.object().required().keys({})
//     },
//     GetAllUsersValidations: {
//         body: joi.object().required().keys({})
//     },
//     AddAdminValidations: {
//         body: joi.object().required().keys({
//             id: joi.string().required()
//         })
//     },
//     GetAllUAdminsValidations: {
//         body: joi.object().required().keys({})
//     },
//     DeleteAdminValidations: {
//         body: joi.object().required().keys({
//             id: joi.string().required()
//         })
//     },
//     BlockUserValidations: {
//         body: joi.object().required().keys({
//             id: joi.string().required()
//         })
//     },
// };
// /* =========== /// <==> End <==> ===========*/

// /* ====================== /// <==> Exports User Joi Validations <==> /// ====================== */
// module.exports = userJoi;
// /* =========== /// <==> End <==> ===========*/