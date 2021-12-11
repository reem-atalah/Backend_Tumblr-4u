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
    validateRequest(postJoi.createPostValidations),
    isAuthorized(postEndPoints.createPost),
    (req, res) => {
      postFunctions.createPost(res, req.params.blogId,
          req.body.postHtml, req.body.type, req.body.state, req.body.tags);
    });


/* ----------- <---> Show Post <---> ----------- */
router.get('/posts/:postId/show_post',
<<<<<<< HEAD
    // validateRequest(postJoi.showPostValidations),
    isAuthorized(postEndPoints.showPost),
    (req, res) => {
      postFunctions.showPost(res, req.params.postId);
    },
=======
    validateRequest(postJoi.showPostValidations),
    isAuthorized(postEndPoints.createPost),
    postFunctions.showPost,
>>>>>>> 44aa4ff482178364b277995a39e06b1dec334aa8
);

/* ----------- <---> Comment on a Post <---> ----------- */
router.put('/:blogId/:postId/comment',
<<<<<<< HEAD
    // validateRequest(postJoi.createPostValidations),
    isAuthorized(postEndPoints.makeComment),
    (req, res) => {
      postFunctions.makeComment(res, req.params.blogId,
          req.params.postId, req.body.text);
    },
);


/* ----------- <---> Like a Post <---> ----------- */
router.put('/:blogId/:postId/like_press',
    // validateRequest(postJoi.createPostValidations),
    isAuthorized(postEndPoints.likePress),
    (req, res) => {
      postFunctions.likePress(res, req.params.blogId, req.params.postId);
    },
);

/* ----------- <---> Reblog a Post <---> ----------- */
router.put('/:blogId/:postId/reblog_post',
    // validateRequest(postJoi.createPostValidations),
    isAuthorized(postEndPoints.reblogPost),
    (req, res) => {
      postFunctions.reblogPost(res, req.params.blogId,
          req.params.postId, req.body.text);
    },
);

/* ----------- <---> Remove a comment <---> ----------- */
router.delete('/:postId/:commentId/remove_comment',
    // validateRequest(postJoi.createPostValidations),
    isAuthorized(postEndPoints.removeComment),
    (req, res) => {
      postFunctions.removeComment(res, req.params.postId, req.params.commentId);
    },
);

/* ----------- <---> Delete a reboged Post <---> ----------- */
router.delete('/:postId/:reblogId/remove_reblog',
    // validateRequest(postJoi.createPostValidations),
    isAuthorized(postEndPoints.removeReblog),
    (req, res) => {
      postFunctions.removeReblog(res, req.params.postId, req.params.reblogId);
    },
);

/* ----------- <---> Get Post Notes <---> ----------- */
router.get('/posts/:postId/notes',
    // validateRequest(postJoi.showPostValidations),
    isAuthorized(postEndPoints.getNotes),
    (req, res) => {
      postFunctions.getNotes(res, req.params.postId);
    },
);

/* ----------- <---> Get User Dashboard <---> ----------- */
router.get('/:userId/:blogId/dashboard',
    isAuthorized(postEndPoints.getDashboard),
    (req, res) => {
      postFunctions.getDashboard(res, req.params.userId, req.params.blogId);
    },
);
=======
    validateRequest(postJoi.createPostValidations),
    isAuthorized(postEndPoints.createPost),
    postFunctions.makeComment);

/* ----------- <---> Like a Post <---> ----------- */
router.put('/:blogId/:postId/like_press',
    validateRequest(postJoi.createPostValidations),
    isAuthorized(postEndPoints.createPost),
    postFunctions.likePress);

/* ----------- <---> Reblog a Post <---> ----------- */
router.put('/:blogId/:postId/reblog_post',
    validateRequest(postJoi.createPostValidations),
    isAuthorized(postEndPoints.createPost),
    postFunctions.reblogPost);

/* ----------- <---> Remove a comment <---> ----------- */
router.delete('/:postId/:commentId/remove_comment',
    validateRequest(postJoi.createPostValidations),
    isAuthorized(postEndPoints.createPost),
    postFunctions.removeComment);

/* ----------- <---> Delete a reboged Post <---> ----------- */
router.delete('/:postId/:reblogId/remove_reblog',
    validateRequest(postJoi.createPostValidations),
    isAuthorized(postEndPoints.createPost),
    postFunctions.removeReblog);

/* ----------- <---> Get Post Notes <---> ----------- */
router.get('/posts/:postId/notes',
    validateRequest(postJoi.showPostValidations),
    isAuthorized(postEndPoints.createPost),
    postFunctions.getNotes);

/* ----------- <---> Get User Dashboard <---> ----------- */
router.get('/:userId/:blogId/dashboard',
    postFunctions.getDashboard);
>>>>>>> 44aa4ff482178364b277995a39e06b1dec334aa8

/* =========== /// <==> End <==> ===========*/

/* =================== /// <==> Export Post APIs <==> /// =================== */
module.exports = router;
/* =========== /// <==> End <==> ===========*/
