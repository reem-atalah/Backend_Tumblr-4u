/* eslint-disable linebreak-style */
// ////////////////////////////////////////////////////
// / <==> /// This File Contains Post APIs /// <==> ///
// ////////////////////////////////////////////////////

/* =============== /// <==> Variables Declaration <==> /// =============== */
const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const postFunctions = require('../Controller/control');
const postJoi = require('../Joi/joi');
const cmMidwReqValidate = '../../../Common/Middlewares/requestValidation';
const validateRequest = require(cmMidwReqValidate);
const isAuthorized = require('../../../Common/Middlewares/isAuthorized');
const postEndPoints = require('../endPoints');
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> User APIs <==> /// ====================== */

/* ----------- <---> Create Post <---> ----------- */
router.post('/:blogId/posts/create_post',
    // validateRequest(postJoi.createPostValidations),
    isAuthorized(postEndPoints.createPost),
    postFunctions.createPost,
);


/* ----------- <---> Show Post <---> ----------- */
router.get('/posts/:postId/show_post',
    // validateRequest(postJoi.showPostValidations),
    isAuthorized(postEndPoints.showPost),
    postFunctions.showPost,
);

/* ----------- <---> Comment on a Post <---> ----------- */
router.put('/:blogId/:postId/comment',
    // validateRequest(postJoi.createPostValidations),
    isAuthorized(postEndPoints.makeComment),
    postFunctions.makeComment);

/* ----------- <---> Like a Post <---> ----------- */
router.put('/:blogId/:postId/like_press',
    // validateRequest(postJoi.createPostValidations),
    isAuthorized(postEndPoints.likePress),
    postFunctions.likePress);

/* ----------- <---> Reblog a Post <---> ----------- */
router.put('/:blogId/:postId/reblog_post',
    // validateRequest(postJoi.createPostValidations),
    isAuthorized(postEndPoints.reblogPost),
    postFunctions.reblogPost);

/* ----------- <---> Remove a comment <---> ----------- */
router.delete('/:postId/:commentId/remove_comment',
    // validateRequest(postJoi.createPostValidations),
    isAuthorized(postEndPoints.removeComment),
    postFunctions.removeComment);

/* ----------- <---> Delete a reboged Post <---> ----------- */
router.delete('/:postId/:reblogId/remove_reblog',
    // validateRequest(postJoi.createPostValidations),
    isAuthorized(postEndPoints.removeReblog),
    postFunctions.removeReblog);

/* ----------- <---> Get Post Notes <---> ----------- */
router.get('/posts/:postId/notes',
    // validateRequest(postJoi.showPostValidations),
    isAuthorized(postEndPoints.getNotes),
    postFunctions.getNotes);

/* ----------- <---> Get User Dashboard <---> ----------- */
router.get('/:userId/:blogId/dashboard',
    isAuthorized(postEndPoints.getDashboard),
    postFunctions.getDashboard);

/* =========== /// <==> End <==> ===========*/

/* =================== /// <==> Export Post APIs <==> /// =================== */
module.exports = router;
/* =========== /// <==> End <==> ===========*/
