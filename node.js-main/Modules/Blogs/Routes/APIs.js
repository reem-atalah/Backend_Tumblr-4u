
// ////////////////////////////////////////////////////
// / <==> /// This File Contains blog APIs /// <==> ///
// ////////////////////////////////////////////////////

/* ================= /// <==> Variables Declaration <==> /// ================ */
const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const blogFunctions = require('../Controller/control');
const blogJoi = require('../Joi/joi');
const cmMidwReqValidate='../../../Common/Middlewares/requestValidation';
const validateRequest = require(cmMidwReqValidate);
// const isAuthorized = require('../../../Common/Middlewares/isAuthorized');
// const blogEndPoints = require('../endPoints');
/* =========== /// <==> End <==> ===========*/

/* ------- <---> Block Account <---> ------- */ // *** <===> Done <===>  *** //
const VLDRQBB=validateRequest(blogJoi.BlockBlogValidations);
// const ISABB=isAuthorized(blogEndPoints.blockBlog);

router.post('/blog/block/:blogId',
    VLDRQBB,
    // ISABB,
    blogFunctions.blockBlog);

/* ------- <---> Un Block Account <---> ----- */ // *** <===> Done <===>  *** //
const VLDRQUB=validateRequest(blogJoi.UnblockBlogValidations);
// const ISAUB=isAuthorized(blogEndPoints.unblockBlog);

router.post('/blog/unblock/:blogId',
    VLDRQUB,
    // ISAUB,
    blogFunctions.unblockBlog);
const VLDRQEBA=validateRequest(blogJoi.EditBlogAvatarValidations);
// const ISAUB=isAuthorized(userEndPoints.unfollowBlog);
const EBA=userFunctions.editBlogAvatar;

router.post('/blog/editBlogAvatar/:blogId',
    VLDRQEBA,
    // ISAUB,
    EBA);
const VLDRQEBT=validateRequest(blogJoi.EditBlogTitleValidations);
// const ISAUB=isAuthorized(userEndPoints.unfollowBlog);
const EBT=userFunctions.editBlogTitle;

router.post('/blog/editBlogTitle/:blogId',
    VLDRQEBT,
    // ISAUB,
    EBT);
const VLDRQEBN=validateRequest(blogJoi.EditBlogNameValidations);
const EBN=userFunctions.editBlogName;

router.post('/blog/editBlogName/:blogId',
    VLDRQEBN,
    // ISAUB,
    EBN);
const VLDRQEBAC=validateRequest(blogJoi.EditBlogAccentValidations);
const EBAC=userFunctions.editBlogAccent;

router.post('/blog/editBlogAccent/:blogId',
    VLDRQEBAC,
    // ISAUB,
    EBAC);
const VLDRQEBBG=validateRequest(blogJoi.EditBlogBackgroundValidations);
const EBBG=userFunctions.editBlogBackground;

router.post('/blog/editBlogBackground/:blogId',
    VLDRQEBBG,
    // ISAUB,
    EBBG);

const VLDRQEBHI=validateRequest(blogJoi.EditBlogHeaderImageValidations);
const EBHI=userFunctions.editBlogHeaderImage;

router.post('/blog/editBlogHeaderImage/:blogId',
    VLDRQEBHI,
    // ISAUB,
    EBHI);
/* =========== /// <==> End <==> ===========*/
/* ================ /// <==> Export blog APIs <==> /// ====================== */
module.exports = router;
/* =========== /// <==> End <==> ===========*/
