// // //////////////////////////////////////////////////////
// // /// <==> /// This File Contains Search APIs /// <==> ///
// // //////////////////////////////////////////////////////

// // /* =============== /// <==> Variables Declaration <==> /// ============== */
// const express = require('express');
// // eslint-disable-next-line new-cap
// const router = express.Router();
// const seachDashboard = require('../Controller/control');
// const searchJoi = require('../Joi/joi');
// const cmMidwReqValidate= '../../../../Common/Middlewares/requestValidation';
// const validateRequest = require(cmMidwReqValidate);
// const isAuthorized = require('../../../../Common/Middlewares/isAuthorized');
// const searchEndPoints = require('../endPoints');
// // /* =========== /// <==> End <==> ===========*/

// // /* ====================== /// <==> Search APIs <==> /// ================= */

// router.get('/autoCompleteSearchDash',
//     validateRequest(searchJoi.searchValidations),
//     isAuthorized(searchEndPoints.getSearchDash),
//     seachDashboard.autoCompleteSearchDash);


// // /* =========== /// <==> End <==> ===========*/

// // /* ================= /// <==> Export User APIs <==> /// ================= */
// module.exports = router;
// // /* =========== /// <==> End <==> ===========*/
