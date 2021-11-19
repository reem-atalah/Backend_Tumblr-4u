/////////////////////////////////////////////////////////////
/// <==> /// This File Contains Advertising APIs /// <==> ///
/////////////////////////////////////////////////////////////

/* ====================== /// <==> Variables Declaration <==> /// ====================== */
const express = require('express');
const router = express.Router();
const advertisingFunctions = require('../Controller/control');
const advertisingJoi = require('../Joi/joi');
const ValidateRequest = require('../../../Common/Middlewares/requestValidation');
const isAuthorized = require('../../../Common/Middlewares/isAuthorized');
const advertisingEndPoints = require('../endPoints');
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Advertising APIs <==> /// ====================== */

/* ----------- <---> Create Advertising <---> ----------- */ // *** <===> Done <===>  *** //
router.post('/Create_Advertising', ValidateRequest(advertisingJoi.CreateAdvertiseValidations), isAuthorized(advertisingEndPoints.Create_Advertising), advertisingFunctions.Create_Advertising);

/* ----------- <---> Get All Advertisings <---> ----------- */ // *** <===> Done <===>  *** //
router.get('/Get_All_Advertisings', ValidateRequest(advertisingJoi.GetAllAdvertisingsValidations), isAuthorized(advertisingEndPoints.Get_All_Advertisings), advertisingFunctions.Get_All_Advertisings);

/* ----------- <---> Update Advertising <---> ----------- */ // *** <===> Done <===>  *** //
router.patch('/Update_Advertising', ValidateRequest(advertisingJoi.UpdateAdvertisingValidations), isAuthorized(advertisingEndPoints.Update_Advertising), advertisingFunctions.Update_Advertising);

/* ----------- <---> Delete Advertising <---> ----------- */ // *** <===> Done <===>  *** //
router.patch('/Delete_Advertising', ValidateRequest(advertisingJoi.DeleteAdvertisingValidations), isAuthorized(advertisingEndPoints.Delete_Advertising), advertisingFunctions.Delete_Advertising);

/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Export Advertising APIs <==> /// ====================== */
module.exports = router;
/* =========== /// <==> End <==> ===========*/