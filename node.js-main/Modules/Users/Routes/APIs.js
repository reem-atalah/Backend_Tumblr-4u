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
const VVA = validateRequest(userJoi.VerifiyAccountValidations);
router.get('/user/verify/:token', VVA, VA);

/* --------- <---> Sign Up With Google <---> */ // *** <===> Done <===>  *** //

router.use(passport.initialize());
router.use(passport.session());

router.get('/google',
    passport.authenticate('google', {scope: ['profile', 'email']}));
const GO = userFunctions.google;
const GI = userFunctions.googleInfo;
const VGI = validateRequest(userJoi.GoogleInfoValidations);
const IA = isAuthorized(userEndPoints.googleInfo);
router.get('/google/callback', passport.authenticate('google'), GO);
router.put('/google/info', VGI, IA, GI);

/* ----------- <---> android Sign Up With Google <---> ----------- */
const GSA=userFunctions.androidSignUpWithGoogle;
const GAV = validateRequest(userJoi.GoogleAndroidValidations);
router.post('/androidSignUpWithGoogle', GAV, GSA);

/* ----------- <---> Follow <---> ----------- */

const VLDRQFB=validateRequest(userJoi.FollowBlogValidations);
const ISAFB=isAuthorized(userEndPoints.followBlog);

router.post('/user/follow',
    VLDRQFB,
    ISAFB,
    (req, res)=>{
      userFunctions.followBlog(req.decoded.email, req.body.blogId)
          .then((blog)=>{
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

/* ----------- <---> UnFollow <---> ----------- */

const VLDRQUB=validateRequest(userJoi.UnfollowBlogValidations);
const ISAUB=isAuthorized(userEndPoints.unfollowBlog);

router.post('/user/unfollow',
    VLDRQUB,
    ISAUB,
    (req, res)=>{
      userFunctions.unfollowBlog(req.decoded.email, req.body.blogId)
          .then((blog)=>{
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

router.get('/user/new/blog',
    VLDRQCB,
    ISACB,
    (req, res)=>{
      userFunctions.createBlog(req).then((blog)=> {
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

router.post('/user/delete/blog',
    VLDRQDB,
    ISADB,
    (req, res)=>{
      userFunctions.deleteBlog(
          req.decoded.email, req.body.blogId).then((blog)=> {
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
