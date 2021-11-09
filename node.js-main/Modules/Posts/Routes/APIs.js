//////////////////////////////////////////////////////
/// <==> /// This File Contains Post APIs /// <==> ///
//////////////////////////////////////////////////////

/* ====================== /// <==> Variables Declaration <==> /// ====================== */
const express = require('express');
const router = express.Router();
const postFunctions = require('../Controller/control');
const postJoi = require('../Joi/joi');
const ValidateRequest = require('../../../Common/Middlewares/requestValidation');
const isAuthorized = require('../../../Common/Middlewares/isAuthorized');
const postEndPoints = require('../endPoints');
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> User APIs <==> /// ====================== */

/* ----------- <---> Create Post <---> ----------- */
router.post('/Create_Post', ValidateRequest(postJoi.CreatePostValidations), isAuthorized(postEndPoints.Create_Post), postFunctions.Create_Post);

/* ----------- <---> Edit Post <---> ----------- */ // *** <===> Done <===>  *** //
router.patch('/Edit_Post', ValidateRequest(postJoi.EditPostValidations), isAuthorized(postEndPoints.Edit_Post), postFunctions.Edit_Post);

/* ----------- <---> Delete Post <---> ----------- */ // *** <===> Done <===>  *** //
router.patch('/Delete_Post', ValidateRequest(postJoi.DeletePostValidations), isAuthorized(postEndPoints.Delete_Post), postFunctions.Delete_Post);

/* ----------- <---> Get My Posts <---> ----------- */ // *** <===> Done <===>  *** //
router.get('/Get_Posts', ValidateRequest(postJoi.GetPostsValidations), isAuthorized(postEndPoints.Get_Posts), postFunctions.Get_Posts);

/* ----------- <---> Get All Posts <---> ----------- */ // *** <===> Done <===>  *** //
router.get('/Get_All_Posts', ValidateRequest(postJoi.GetPostsValidations), isAuthorized(postEndPoints.Get_All_Posts), postFunctions.Get_All_Posts);

/* ----------- <---> Block Posts <---> ----------- */ // *** <===> Done <===>  *** //
router.patch('/Block_Post', ValidateRequest(postJoi.BlockPostValidations), isAuthorized(postEndPoints.Block_Post), postFunctions.Block_Post);

/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Export User APIs <==> /// ====================== */
module.exports = router;
/* =========== /// <==> End <==> ===========*/