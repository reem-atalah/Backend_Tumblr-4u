// ////////////////////////////////////////////////////
// / <==> /// This File Contains User APIs /// <==> ///
// ////////////////////////////////////////////////////

/* ================ /// <==> Variables Declaration <==> /// ================ */
const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const userFunctions = require('../Controller/control');
const userJoi = require('../Joi/joi');
const cmMidwReqValidate='../../../Common/Middlewares/requestValidation';
const validateRequest = require(cmMidwReqValidate);
// const isAuthorized = require('../../../Common/Middlewares/isAuthorized');
// const userEndPoints = require('../endPoints');
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> User APIs <==> /// ====================== */

/* ----------- <---> Sign Up <---> ----------- */
// VLDRQ: ValidateRequest
// SU: Sign Up , SI : Sign IN , FB: Follow Blog, UB: Unfollow Blog
// ISA : isAutherized

const VLDRQSU=validateRequest(userJoi.SignUpValidations);
const SU=userFunctions.signUp;

router.post('/signup', VLDRQSU, SU);

/* ----------- <---> Sign In <---> ----------- */
const VLDRQSI=validateRequest(userJoi.SignInValidations);
const SI=userFunctions.login;

router.post('/login', VLDRQSI, SI);

/* ----------- <---> Follow <---> ----------- */

const VLDRQFB=validateRequest(userJoi.FollowBlogValidations);
// const ISAFB=isAuthorized(userEndPoints.followBlog);
const FB=userFunctions.followBlog;

router.post('/user/follow/:userId',
    VLDRQFB,
    // ISAFB,
    FB);

/* ----------- <---> UnFollow <---> ----------- */

const VLDRQUB=validateRequest(userJoi.UnfollowBlogValidations);
// const ISAUB=isAuthorized(userEndPoints.unfollowBlog);
const UB=userFunctions.unfollowBlog;

router.post('/user/unfollow/:userId',
    VLDRQUB,
    // ISAUB,
    UB);

const VLDRQCB=validateRequest(userJoi.CreateBlogValidations);
// const ISAUB=isAuthorized(userEndPoints.unfollowBlog);
const CB=userFunctions.createBlog;

router.get('/user/new/blog/:userId',
    VLDRQCB,
    // ISAUB,
    CB);
const VLDRQDB=validateRequest(userJoi.DeleteBlogValidations);
// const ISAUB=isAuthorized(userEndPoints.unfollowBlog);
const DB=userFunctions.deleteBlog;

router.post('/user/delete/blog/:userId',
    VLDRQDB,
    // ISAUB,
    DB);

/* =========== /// <==> End <==> ===========*/

/* ================ /// <==> Export User APIs <==> /// ================ */
module.exports = router;
/* =========== /// <==> End <==> ===========*/
