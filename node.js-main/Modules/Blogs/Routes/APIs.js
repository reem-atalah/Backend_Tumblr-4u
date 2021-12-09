
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
const VLDRQEB=validateRequest(blogJoi.EditBlogValidations);
// const ISAUB=isAuthorized(userEndPoints.unfollowBlog);
const EB=blogFunctions.editBlog;

router.post('/blog/edit/:blogId',
    VLDRQEB,
    // ISAUB,
    EB);
const VLDRQRB=validateRequest(blogJoi.RetrieveBlogValidations);
// const ISAUB=isAuthorized(userEndPoints.unfollowBlog);
const RB=blogFunctions.retrieveBlog;

router.get('/blog/view/:blogName',
    VLDRQRB,
    // ISAUB,
    RB);
/* =========== /// <==> End <==> ===========*/
/* ================ /// <==> Export blog APIs <==> /// ====================== */
module.exports = router;
/* =========== /// <==> End <==> ===========*/
