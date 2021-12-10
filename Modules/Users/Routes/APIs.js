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
const isAuthorized = require('../../../Common/Middlewares/isAuthorized');
const userEndPoints = require('../endPoints');
const passport = require('passport');
require('../../../Common/passport-setup/passport-setup');
const {StatusCodes} = require('http-status-codes');


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

/* ----------- <---> Sign In <---> ----------- */
const VA=userFunctions.verfiyAccount;
router.get('/user/verify/:token', VA);

/* --------- <---> Sign Up With Google <---> */ // *** <===> Done <===>  *** //

// router.use(passport.initialize());
// router.use(passport.session());

router.get('/google',
    passport.authenticate('google', {scope: ['profile', 'email']}));
const GO = userFunctions.google;
router.get('/google/callback', passport.authenticate('google'), GO);


/* ----------- <---> Follow <---> ----------- */

const VLDRQFB=validateRequest(userJoi.FollowBlogValidations);
const ISAFB=isAuthorized(userEndPoints.followBlog);
const FB=userFunctions.followBlog;

router.post('/user/follow/:userId',
    VLDRQFB,
    ISAFB,
    FB);

/* ----------- <---> UnFollow <---> ----------- */

const VLDRQUB=validateRequest(userJoi.UnfollowBlogValidations);
const ISAUB=isAuthorized(userEndPoints.unfollowBlog);
const UB=userFunctions.unfollowBlog;

router.post('/user/unfollow/:userId',
    VLDRQUB,
    ISAUB,
    UB);

/* ----------- <---> Create Blog <---> ----------- */

const VLDRQCB=validateRequest(userJoi.CreateBlogValidations);
const ISACB=isAuthorized(userEndPoints.createBlog);
// const CB=userFunctions.createBlog();

router.get('/user/new/blog/:userId',
    VLDRQCB,
    ISACB,
    (req, res)=>{
      userFunctions.createBlog(
          req.params.userId, req.body.title, req.body.name,
          req.body.privacy, req.body.password).then((blog)=> {
        if (blog) {
          res.status(StatusCodes.CREATED).json({
            'meta': {
              'status': 201,
              'msg': 'CREATED',
            },
            'res': {
              'message': 'Blog Created Successfully',
              'data': blog,
            },
          });
        } else {
          res.status(StatusCodes.BAD_REQUEST).json({
            'meta': {
              'status': 400,
              'msg': 'BAD REQUEST',
            },

            'res': {
              'message': 'URL is not available',
              'data': '',
            },
          });
        }
      });
    });

/* ----------- <---> Delete Blog <---> ----------- */

const VLDRQDB=validateRequest(userJoi.DeleteBlogValidations);
const ISADB=isAuthorized(userEndPoints.deleteBlog);
// const DB=userFunctions.deleteBlog;

router.post('/user/delete/blog/:userId',
    VLDRQDB,
    ISADB,
    (req, res)=>{
      userFunctions.deleteBlog(
          req.params.userId, req.body.title, req.body.name,
          req.body.privacy, req.body.password).then((blog)=> {
        if (blog) {
          res.status(StatusCodes.CREATED).json({
            'meta': {
              'status': 201,
              'msg': 'CREATED',
            },
            'res': {
              'message': 'Blog Created Successfully',
              'data': blog,
            },
          });
        } else {
          res.status(StatusCodes.BAD_REQUEST).json({
            'meta': {
              'status': 400,
              'msg': 'BAD REQUEST',
            },

            'res': {
              'message': 'URL is not available',
              'data': '',
            },
          });
        }
      });
    });

/* =========== /// <==> End <==> ===========*/

/* ================ /// <==> Export User APIs <==> /// ================ */
module.exports = router;
/* =========== /// <==> End <==> ===========*/
