/* eslint-disable max-len */
// //////////////////////////////////////////////////////
// /// <==> /// This File Contains Search APIs /// <==> ///
// //////////////////////////////////////////////////////

// /* =============== /// <==> Variables Declaration <==> /// ============== */
const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const seachDashboard = require('../Controller/control');
const searchJoi = require('../Joi/joi');
const validateRequest = require('../../../../Common/Middlewares/requestValidation');
// const isAuthorized = require("../../../../Common/Middlewares/isAuthorized");
// const searchEndPoints = require("../endPoints");
// /* =========== /// <==> End <==> ===========*/

// /* ====================== /// <==> Search APIs <==> /// ================= */

// router.patch('/Block_User', ValidateRequest(userJoi.BlockUserValidations), isAuthorized(userEndPoints.Block_User), userFunctions.Block_User);

// /* ----- <---> Search <---> ------- */ // *** <===> Done <===>  *** //
router.get('/autoCompleteSearchDash', validateRequest(searchJoi.searchValidations), seachDashboard.autoCompleteSearchDash);


// /* =========== /// <==> End <==> ===========*/

// /* ================= /// <==> Export User APIs <==> /// ================= */
module.exports = router;
// /* =========== /// <==> End <==> ===========*/
