//////////////////////////////////////////////////////
/// <==> /// This File Contains Post APIs /// <==> ///
//////////////////////////////////////////////////////

/* ====================== /// <==> Variables Declaration <==> /// ====================== */
const express = require('express');
const router = express.Router();
const postFunctions = require('../Controller/control');
const postJoi = require('../Joi/joi');
const ValidateRequest = require('../../../Common/Middlewares/requestValidation');
//const isAuthorized = require('../../../Common/Middlewares/isAuthorized');
const postEndPoints = require('../endPoints');
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Post APIs <==> /// ====================== */

/* ----------- <---> Create Post <---> ----------- */
router.post('/:blogId/posts/create_post',
    ValidateRequest(postJoi.createPostValidations),
    /** isAuthorized(postEndPoints.createPost),**/ 
    postFunctions.createPost);

/* ----------- <---> Show Post <---> ----------- */
router.get('/posts/:postId/show_post',
    /** ValidateRequest(postJoi.showPostValidations),**/
    /** isAuthorized(postEndPoints.createPost),**/
    postFunctions.showPost);

/* ----------- <---> Comment on a Post <---> ----------- */
router.put('/:blogId/:postId/comment',
    //ValidateRequest(postJoi.createPostValidations),
    /** isAuthorized(postEndPoints.createPost),**/ 
    postFunctions.makeComment);

/* ----------- <---> Like a Post <---> ----------- */
router.put('/:blogId/:postId/like_press',
    //ValidateRequest(postJoi.createPostValidations),
    /** isAuthorized(postEndPoints.createPost),**/ 
    postFunctions.likePress);

/* ----------- <---> Reblog a Post <---> ----------- */
router.put('/:blogId/:postId/reblog_post',
    //ValidateRequest(postJoi.createPostValidations),
    /** isAuthorized(postEndPoints.createPost),**/ 
    postFunctions.reblogPost);

/* ----------- <---> Remove a comment <---> ----------- */
// router.delete('/:blogId/:postId/remove_comment',
//     //ValidateRequest(postJoi.createPostValidations),
//     /** isAuthorized(postEndPoints.createPost),**/ 
//     postFunctions.removeComment);

/* ----------- <---> Unlike a Post <---> ----------- */
// router.delete('/:blogId/:postId/unlike_post',
//     //ValidateRequest(postJoi.createPostValidations),
//     /** isAuthorized(postEndPoints.createPost),**/ 
//     postFunctions.unlikePost);

/* ----------- <---> Delete a reboged Post <---> ----------- */
// router.delete('/:blogId/:postId/remove_reblog',
//     //ValidateRequest(postJoi.createPostValidations),
//     /** isAuthorized(postEndPoints.createPost),**/ 
//     postFunctions.removeReblog);

/* ----------- <---> Get Post Notes <---> ----------- */
router.get('/posts/:postId/notes',
    /** ValidateRequest(postJoi.showPostValidations),**/
    /** isAuthorized(postEndPoints.createPost),**/
    postFunctions.getNotes);

/* ----------- <---> Edit Post <---> ----------- */ // *** <===> Done <===>  *** //
//router.patch('/:blogId/posts/:postId/edit_post', ValidateRequest(postJoi.editPostValidations), isAuthorized(postEndPoints.editPost), postFunctions.editPost);

/* ----------- <---> Delete Post <---> ----------- */ // *** <===> Done <===>  *** //
//router.patch('/:blogId/posts/:postId/delete_post', ValidateRequest(postJoi.deletePostValidations), isAuthorized(postEndPoints.deletePost), postFunctions.deletePost);

/* ----------- <---> Like Post <---> ----------- */ // *** <===> Done <===>  *** //
//router.post('/:blogId/posts/:postId/like_post', ValidateRequest(postJoi.likePostValidations), isAuthorized(postEndPoints.likePost), postFunctions.likePost);

/* ----------- <---> Comment Post <---> ----------- */ // *** <===> Done <===>  *** //
//router.post('/:blogId/posts/:postId/comment_post', ValidateRequest(postJoi.commentPostValidations), isAuthorized(postEndPoints.commentPost), postFunctions.commentPost);

/* ----------- <---> Share Post With a Friend <---> ----------- */ // *** <===> Done <===>  *** //
//router.post('/:blogId/posts/:postId/share_with', ValidateRequest(postJoi.shareWithValidations), isAuthorized(postEndPoints.shareWith), postFunctions.shareWith);

/* ----------- <---> Reblog Post <---> ----------- */ // *** <===> Done <===>  *** //
//router.post('/:blogId/posts/:postId/reblog_post', ValidateRequest(postJoi.reblogPostValidations), isAuthorized(postEndPoints.reblogPost), postFunctions.reblogPost);

// /* ----------- <---> Get My Posts <---> ----------- */ // *** <===> Done <===>  *** //
// router.get('/Get_Posts', ValidateRequest(postJoi.GetPostsValidations), isAuthorized(postEndPoints.Get_Posts), postFunctions.Get_Posts);

// /* ----------- <---> Get All Posts <---> ----------- */ // *** <===> Done <===>  *** //
// router.get('/Get_All_Posts', ValidateRequest(postJoi.GetPostsValidations), isAuthorized(postEndPoints.Get_All_Posts), postFunctions.Get_All_Posts);

// /* ----------- <---> Block Posts <---> ----------- */ // *** <===> Done <===>  *** //
// router.patch('/Block_Post', ValidateRequest(postJoi.BlockPostValidations), isAuthorized(postEndPoints.Block_Post), postFunctions.Block_Post);

/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Export User APIs <==> /// ====================== */
module.exports = router;
/* =========== /// <==> End <==> ===========*/