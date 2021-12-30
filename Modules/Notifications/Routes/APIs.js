/* eslint-disable linebreak-style */
// ////////////////////////////////////////////////////
// / <==> /// This File Contains Notifications APIs /// <==> ///
// ////////////////////////////////////////////////////

/* =============== /// <==> Variables Declaration <==> /// =============== */
const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const notificationFunctions = require('../Controller/control');
const {StatusCodes} = require('http-status-codes');
const cmMidwReqValidate = '../../../Common/Middlewares/requestValidation';
const validateRequest = require(cmMidwReqValidate);
const isAuthorized = require('../../../Common/Middlewares/isAuthorized');
const notificationEndPoints = require('../endPoints');

/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Notifications APIs <==> /// ====================== */

/* ----------- <---> Add Notification <---> ----------- */



/* =========== /// <==> End <==> ===========*/

/* =================== /// <==> Export Notifications APIs <==> /// =================== */
module.exports = router;
/* =========== /// <==> End <==> ===========*/
