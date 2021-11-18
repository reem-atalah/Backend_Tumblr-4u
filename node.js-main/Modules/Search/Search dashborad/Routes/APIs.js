// //////////////////////////////////////////////////////
// /// <==> /// This File Contains Search APIs /// <==> ///
// //////////////////////////////////////////////////////

// /* ====================== /// <==> Variables Declaration <==> /// ====================== */
const express = require('express');
const router = express.Router();
const seachDashboard = require('../Controller/control');
// const searchJoi = require('../Joi/joi'); 
const ValidateRequest = require('../../../../Common/Middlewares/requestValidation');
const isAuthorized = require('../../../../Common/Middlewares/isAuthorized');
const searchEndPoints = require('../endPoints');
// /* =========== /// <==> End <==> ===========*/

// /* ====================== /// <==> Search APIs <==> /// ====================== */

// /* ----------- <---> Block Account <---> ----------- */ // *** <===> Done <===>  *** //
// router.patch('/Block_User', ValidateRequest(userJoi.BlockUserValidations), isAuthorized(userEndPoints.Block_User), userFunctions.Block_User);

router.get('/autoCompleteSearchDash',isAuthorized(searchEndPoints.getSearchDash),seachDashboard.autoCompleteSearchDash);


// /* =========== /// <==> End <==> ===========*/

// /* ====================== /// <==> Export User APIs <==> /// ====================== */
module.exports = router;
// /* =========== /// <==> End <==> ===========*/