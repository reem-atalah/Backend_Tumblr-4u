//////////////////////////////////////////////////////
/// <==> /// This File Contains User APIs /// <==> ///
//////////////////////////////////////////////////////

/* ====================== /// <==> Variables Declaration <==> /// ====================== */
const express = require('express');
const router = express.Router();
const userFunctions = require('../Controller/control');
const userJoi = require('../Joi/joi');
const ValidateRequest = require('../../../Common/Middlewares/requestValidation');
const isAuthorized = require('../../../Common/Middlewares/isAuthorized');
const userEndPoints = require('../endPoints');
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> User APIs <==> /// ====================== */

/* ----------- <---> Sign Up <---> ----------- */
router.post('/signup', ValidateRequest(userJoi.SignUpValidations), userFunctions.signUp);

/* ----------- <---> Sign In <---> ----------- */
router.post('/login', ValidateRequest(userJoi.SignInValidations), userFunctions.login);

/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Export User APIs <==> /// ====================== */
module.exports = router;
/* =========== /// <==> End <==> ===========*/