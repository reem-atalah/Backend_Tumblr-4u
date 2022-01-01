// ////////////////////////////////////////////////////
// / <==> /// This File Contains User APIs /// <==> ///
// ////////////////////////////////////////////////////

/* ================ /// <==> Variables Declaration <==> /// ================ */
const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const userFunctions = require('../Controller/control');
const userJoi = require('../Joi/joi');
const cmMidwReqValidate = '../../../Common/Middlewares/requestValidation';
const validateRequest = require(cmMidwReqValidate);
const isAuthorized = require('../../../Common/Middlewares/isAuthorized');
const userEndPoints = require('../endPoints');
const passport = require('passport');
require('../../../Common/passport-setup/passport-setup');
const { StatusCodes } = require('http-status-codes');


// const isAuthorized = require('../../../Common/Middlewares/isAuthorized');
// const userEndPoints = require('../endPoints');
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> User APIs <==> /// ====================== */

/* ----------- <---> Sign Up <---> ----------- */
// VLDRQ: ValidateRequest
// SU: Sign Up , SI : Sign IN , FB: Follow Blog, UB: Unfollow Blog
// ISA : isAutherized

const VLDRQSU = validateRequest(userJoi.SignUpValidations);
const SU = userFunctions.signUp;

router.get('/', (req, res) => { res.send('Hello, World!') });
router.post('/signup', VLDRQSU, SU);

/* ----------- <---> Sign In <---> ----------- */
const VLDRQSI = validateRequest(userJoi.SignInValidations);
const SI = userFunctions.login;

router.post('/login', VLDRQSI, SI);

/* ----------- <---> verfiy Account <---> ----------- */
const VA = userFunctions.verfiyAccount;
const VVA = validateRequest(userJoi.VerifiyAccountValidations);
router.get('/user/verify/:token', VVA, VA);

/* --------- <---> Sign Up With Google <---> */ // *** <===> Done <===>  *** //

router.use(passport.initialize());
router.use(passport.session());

router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));
const GO = userFunctions.google;
const GI = userFunctions.googleInfo;
const VGI = validateRequest(userJoi.GoogleInfoValidations);
const IA = isAuthorized(userEndPoints.googleInfo);
router.get('/google/callback', passport.authenticate('google'), GO);
router.put('/google/info', VGI, IA, GI);

/* ----------- <---> android Sign Up With Google <---> ----------- */
const GSA = userFunctions.androidSignUpWithGoogle;
const newGoogle = userFunctions.newGoogle;
const GAV = validateRequest(userJoi.GoogleAndroidValidations);
router.post('/androidSignUpWithGoogle', GAV, GSA);
router.post('/newGoogle', newGoogle);

/* ----------- <---> Change Email <---> ----------- */
const GE = userFunctions.changeEmail;
const GEV = validateRequest(userJoi.ChangeEmailValidations);
const AGE = isAuthorized(userEndPoints.changeEmail);
router.put('/user/email', GEV, AGE, GE);

/* ----------- <---> Forget Password <---> ----------- */
const FP = userFunctions.forgetPassword;
const FPV = validateRequest(userJoi.ForgetPasswordValidations);
router.post('/user/forget_password', FPV, FP);

/* ----------- <---> Reset Password <---> ----------- */
const RP = userFunctions.resetPassword;
const RPV = validateRequest(userJoi.ResetPasswordValidations);
router.put('/user/reset_password/', RPV, RP);

/* ----------- <---> Follow <---> ----------- */
const VLDRQDF = validateRequest(userJoi.DoesFollowValidations);
const ISADF = isAuthorized(userEndPoints.doesFollow);
router.post('/user/doesFollow/:blogId',
  VLDRQDF,
  ISADF,
  (req, res) => {
    userFunctions.doesFollow(req.decoded.email, req.params.blogId)
      .then((blog) => {
        res.status(StatusCodes.OK).json({
          'meta': {
            'status': 200,
            'msg': 'OK',
          },

          'res': {
            'message': '',
            'data': blog,
          },
        });
      });
  });
const VLDRQFB = validateRequest(userJoi.FollowBlogValidations);
const ISAFB = isAuthorized(userEndPoints.followBlog);

router.post('/follow',
  VLDRQFB,
  ISAFB,
  (req, res) => {
    userFunctions.followBlog(req).then((blog) => {
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
const VLDRQRU = validateRequest(userJoi.RetrieveUserValidations);
const ISARU = isAuthorized(userEndPoints.retrieveUser);

router.get('/user/:userId',
    VLDRQRU,
    ISARU,
    (req, res) => {
      userFunctions.retrieveUser(req.params.userId).then((user) => {
        if (user){
          res.status(StatusCodes.OK).json({
            'meta': {
              'status': 200,
              'msg': 'OK',
            },

            'res': {
              'message': 'User Retrieved Successfully',
              'data': user,
            },
          });
        } else {
          res.status(StatusCodes.NOT_FOUND).json({
            'meta': {
              'status': 404,
                 'msg': 'NOT FOUND',         
                  },
            'res': {
              'error': 'User not found',
              'data': '',
            },
          });
        }
      });
    });
/* ----------- <---> UnFollow <---> ----------- */

const VLDRQUB = validateRequest(userJoi.UnfollowBlogValidations);
const ISAUB = isAuthorized(userEndPoints.unfollowBlog);

router.post('/unfollow',
  VLDRQUB,
  ISAUB,
  (req, res) => {
    userFunctions.unfollowBlog(req).then((blog) => {
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
const VLDRQCB = validateRequest(userJoi.CreateBlogValidations);
const ISACB = isAuthorized(userEndPoints.createBlog);
// const CB=userFunctions.createBlog();

router.post('/user/new/blog',
  VLDRQCB,
  ISACB,
  (req, res) => {
    userFunctions.createBlog(req).then((blog) => {
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

  const VLDRQDB = validateRequest(userJoi.DeleteBlogValidations);
const ISADB = isAuthorized(userEndPoints.deleteBlog);
/* ----------- <---> Delete Blog <---> ----------- */

router.post('/user/delete/blog',
  VLDRQDB,
  ISADB,
  (req, res) => {
    userFunctions.deleteBlog(
      req.decoded.email, req.body.blogId).then((blog) => {
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
const VLDRQDU = validateRequest(userJoi.DeleteUserValidations);
const ISADU = isAuthorized(userEndPoints.deleteUser);
// const DB=userFunctions.deleteBlog;

router.post('/user/delete',
  VLDRQDU,
  ISADU,
  (req, res) => {
    userFunctions.deleteUser(
      req.decoded.email).then((user) => {
        if (user) {
          res.status(StatusCodes.OK).json({
            'meta': {
              'status': 200,
              'msg': 'OK',
            },
            'res': {
              'message': 'User Deleted Successfully',
              'data': user,
            },
          });
        } else {
          res.status(StatusCodes.NOT_FOUND).json({
            'meta': {
              'status': 404,
              'msg': 'NOT FOUND',
            },

            'res': {
              'message': 'User Not FOUND',
              'data': '',
            },
          });
        }
      });
  });

/* ----------- <---> Get Interests <---> ----------------- */
router.post('/getInterestsFromUser',
  validateRequest(userJoi.getInterestsFromUserValidations),
  isAuthorized(userEndPoints.getInterests),
  async (req, res) => {
    result = await userFunctions.
      getInterests(req.decoded.email, req.body.interests);

    // res.status(StatusCodes.OK).json({
    //   'meta': {
    //     'status': 200,
    //     'msg': 'OK',
    //   },
    //   'res': {
    //     'message': 'Interested saved Successfully',
    //   },
    // });
    res.json(result);
  },
);

/* ----------- <---> Update Color <---> ----------------- */
router.put('/updateColor',
  validateRequest(userJoi.updateColorValidations),
  isAuthorized(userEndPoints.updateColor),
  async (req, res) => {
    result = await userFunctions.
      updateColor(req.decoded.email, req.body.bodyColor);
    res.json(result);
    // res.status(StatusCodes.OK).json({
    //   'meta': {
    //     'status': 200,
    //     'msg': 'OK',
    //   },
    //   'res': {
    //     'message': 'Color Updated Successfully',
    //   },
    // });
  },
);
/* =========== /// <==> End <==> ===========*/

/* ================ /// <==> Export User APIs <==> /// ================ */
module.exports = router;
/* =========== /// <==> End <==> ===========*/
