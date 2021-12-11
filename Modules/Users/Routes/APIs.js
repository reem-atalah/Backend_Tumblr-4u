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

/* ----------- <---> verfiy Account <---> ----------- */
const VA=userFunctions.verfiyAccount;
router.get('/user/verify/:token', VA);


/* --------- <---> Sign Up With Google <---> */ // *** <===> Done <===>  *** //

// router.use(passport.initialize());
// router.use(passport.session());

router.get('/google',
    passport.authenticate('google', {scope: ['profile', 'email']}));
const GO = userFunctions.google;
router.get('/google/callback', passport.authenticate('google'), GO);

/* ----------- <---> android Sign Up With Google <---> ----------- */
const GSA=userFunctions.androidSignUpWithGoogle;
router.get('/androidSignUpWithGoogle', GSA);

/* ----------- <---> Follow <---> ----------- */

const VLDRQFB=validateRequest(userJoi.FollowBlogValidations);
const ISAFB=isAuthorized(userEndPoints.followBlog);

router.post('/user/follow/:userId',
    VLDRQFB,
    ISAFB,
    (req, res)=>{
      userFunctions.followBlog(req).then((blog)=>{
        if (blog) {
          res.status(StatusCodes.OK).json({
            'meta': {
              'status': 200,
              'msg': 'OK',
            },

            'res': {
              'message': 'Blog Followed Successfully',
              'data': blog,
            },
          });
        } else {
          res.status(StatusCodes.NOT_FOUND).json({
            'meta': {
              'status': 404,
              'msg': 'BAD_REQUEST',
            },

            'res': {
              'error': 'Blog not found',
              'data': '',
            },
          });
        }
      });
    });

/* ----------- <---> UnFollow <---> ----------- */

const VLDRQUB=validateRequest(userJoi.UnfollowBlogValidations);
const ISAUB=isAuthorized(userEndPoints.unfollowBlog);

router.post('/user/unfollow/:userId',
    VLDRQUB,
    ISAUB,
    (req, res)=>{
      userFunctions.unfollowBlog(req).then((blog)=>{
        if (blog) {
          res.status(StatusCodes.OK).json({
            'meta': {
              'status': 200,
              'msg': 'OK',
            },

            'res': {
              'message': 'Blog Unfollowed Successfully',
              'data': blog,
            },
          });
        } else {
          res.status(StatusCodes.NOT_FOUND).json({
            'meta': {
              'status': 404,
              'msg': 'NOT FOUND',
            },

            'res': {
              'error': 'Blog not found',
              'data': '',
            },
          });
        }
      });
    });

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
              'msg': 'NOT FOUND',
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
          req.params.userId, req.body.blogId).then((blog)=> {
        console.log(blog);
        if (blog) {
          res.status(StatusCodes.OK).json({
            'meta': {
              'status': 200,
              'msg': 'OK',
            },
            'res': {
              'message': 'Blog Deleted Successfully',
              'data': blog,
            },
          });
        } else {
          res.status(StatusCodes.NOT_FOUND).json({
            'meta': {
              'status': 404,
              'msg': 'NOT FOUND',
            },

            'res': {
              'message': 'Blog Not FOUND',
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
