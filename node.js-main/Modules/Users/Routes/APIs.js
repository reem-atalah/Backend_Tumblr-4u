// ////////////////////////////////////////////////////
// / <==> /// This File Contains user APIs /// <==> ///
// ////////////////////////////////////////////////////

/* ================= /// <==> Variables Declaration <==> /// ================ */
const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const userFunctions = require('../Controller/control');
const userJoi = require('../Joi/joi');
const cmMidwReqValidate='../../../Common/Middlewares/requestValidation';
const ValidateRequest = require(cmMidwReqValidate);
const isAuthorized = require('../../../Common/Middlewares/isAuthorized');
const userEndPoints = require('../endPoints');
/* =========== /// <==> End <==> ===========*/

// eslint-disable-next-line max-len
/* ----------- <---> Block Account <---> ----------- */ // *** <===> Done <===>  *** //
// eslint-disable-next-line new-cap
const VLDRQFB=ValidateRequest(userJoi.FollowBlogValidations);
const ISAFB=isAuthorized(userEndPoints.followBlog);
// eslint-disable-next-line new-cap
const VLDRQUB=ValidateRequest(userJoi.UnfollowBlogValidations);
const ISAUB=isAuthorized(userEndPoints.unfollowBlog);
const FB=userFunctions.followBlog;
const UB=userFunctions.unfollowBlog;

router.post('/user/follow/:userId', VLDRQFB, ISAFB, FB);
router.post('/user/unfollow/:userId', VLDRQUB, ISAUB, UB);
// router.post('/user/unblock/:userId',userFunctions.unblockuser);


/* =========== /// <==> End <==> ===========*/
/* ================== /// <==> Export user APIs <==> /// ================= */
module.exports = router;
/* =========== /// <==> End <==> ===========*/
