// //////////////////////////////////////////////////////
// /// <==> /// This File Contains Search APIs /// <==> ///
// //////////////////////////////////////////////////////

// /* ====================== /// <==> Variables Declaration <==> /// ====================== */
const express = require('express');
const router = express.Router();
const SEARCH_DASHBOARD = require('../Controller/control');
// const userFunctions = require('../Controller/control');
// const userJoi = require('../Joi/joi');
// const ValidateRequest = require('../../../Common/Middlewares/requestValidation');
// const isAuthorized = require('../../../Common/Middlewares/isAuthorized');
// const userEndPoints = require('../endPoints');
// /* =========== /// <==> End <==> ===========*/

// /* ====================== /// <==> User APIs <==> /// ====================== */

// /* ----------- <---> Sign Up <---> ----------- */
// router.post('/SignUp', ValidateRequest(userJoi.SignUpValidations), userFunctions.SignUp);

// /* ----------- <---> Sign In <---> ----------- */
// router.post('/SignIn', ValidateRequest(userJoi.SignInValidations), userFunctions.SignIn);

// /* ----------- <---> Update Profile <---> ----------- */
// router.patch('/Update_Profile', ValidateRequest(userJoi.Update_ProfileValidations), isAuthorized(userEndPoints.Update_Profile), userFunctions.Update_Profile);

// /* ----------- <---> Update Password <---> ----------- */
// router.patch('/Update_Password', ValidateRequest(userJoi.Update_PasswordValidations), isAuthorized(userEndPoints.Update_Password), userFunctions.Update_Password);

// /* ----------- <---> Deactivate <---> ----------- */ // *** <===> Done <===>  *** //
// router.patch('/Deactivate', ValidateRequest(userJoi.DeactivateValidations), isAuthorized(userEndPoints.Deactivate), userFunctions.Deactivate);

// /* ----------- <---> Deactivate <---> ----------- */ // *** <===> Done <===>  *** //
// router.patch('/Activate', ValidateRequest(userJoi.ActivateValidations), isAuthorized(userEndPoints.Activate), userFunctions.Activate);

// /* ----------- <---> Get All Users <---> ----------- */ // *** <===> Done <===>  *** //
// router.get('/Get_All_Users', ValidateRequest(userJoi.GetAllUsersValidations), isAuthorized(userEndPoints.Get_All_Users), userFunctions.Get_All_Users);

// /* ----------- <---> Add Admin <---> ----------- */ // *** <===> Done <===>  *** //
// router.patch('/Add_Admin', ValidateRequest(userJoi.AddAdminValidations), isAuthorized(userEndPoints.Add_Admin), userFunctions.Add_Admin);

// /* ----------- <---> Get All Admins <---> ----------- */ // *** <===> Done <===>  *** //
// router.get('/Get_All_Admins', ValidateRequest(userJoi.GetAllUAdminsValidations), isAuthorized(userEndPoints.Get_All_Admins), userFunctions.Get_All_Admins);

// /* ----------- <---> Delete Admin <---> ----------- */ // *** <===> Done <===>  *** //
// router.patch('/Delete_Admin', ValidateRequest(userJoi.DeleteAdminValidations), isAuthorized(userEndPoints.Delete_Admin), userFunctions.Delete_Admin);

// /* ----------- <---> Block Account <---> ----------- */ // *** <===> Done <===>  *** //
// router.patch('/Block_User', ValidateRequest(userJoi.BlockUserValidations), isAuthorized(userEndPoints.Block_User), userFunctions.Block_User);

router.get('/autoCompleteSearchDash', SEARCH_DASHBOARD.autoCompleteSearchDash);


// /* =========== /// <==> End <==> ===========*/

// /* ====================== /// <==> Export User APIs <==> /// ====================== */
module.exports = router;
// /* =========== /// <==> End <==> ===========*/