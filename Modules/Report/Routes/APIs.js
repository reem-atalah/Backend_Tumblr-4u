////////////////////////////////////////////////////////
/// <==> /// This File Contains Report APIs /// <==> ///
////////////////////////////////////////////////////////

/* ====================== /// <==> Variables Declaration <==> /// ====================== */
const express = require('express');
const router = express.Router();
const reportFunctions = require('../Controller/control');
const reportJoi = require('../Joi/joi');
const ValidateRequest = require('../../../Common/Middlewares/requestValidation');
const isAuthorized = require('../../../Common/Middlewares/isAuthorized');
const reportEndPoints = require('../endPoints');
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Report APIs <==> /// ====================== */

/* ----------- <---> Create Report <---> ----------- */ // *** <===> Done <===>  *** //
router.post('/Create_Report', ValidateRequest(reportJoi.CreateReportValidations), isAuthorized(reportEndPoints.Create_Report), reportFunctions.Create_Report);

/* ----------- <---> Get Report <---> ----------- */ // *** <===> Done <===>  *** //
router.get('/Get_Report', ValidateRequest(reportJoi.GetReportValidations), isAuthorized(reportEndPoints.Get_Report), reportFunctions.Get_Report);

/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Export Report APIs <==> /// ====================== */
module.exports = router;
/* =========== /// <==> End <==> ===========*/