//=====================================================================================================
//=====================================================================================================
//=====================================================================================================
/*
===================== ///////// <---------> ============== <---------> ///////// =====================> 
===================== ///////// <---------> Submission's Methods <---------> ///////// =====================> 
===================== ///////// <---------> ============== <---------> ///////// =====================> 
*/
//=====================================================================================================
//=====================================================================================================
//=====================================================================================================


/*
===================== ///////// <---------> ============= <---------> ///////// =====================> 
===================== ///////// <---------> Make Submission Posts <---------> ///////// =====================> 
===================== ///////// <---------> ============= <---------> ///////// =====================> 
*/

/**
 * @api {post} /blog/submit Make Submission Posts
 * @apiName makeSubmissionPosts
 * @apiGroup Submission
 * @apiPermission User, Admin, Super_Admin
 * @apidescription Submit a post on a blogs dashboard, take permission to post
 * @apiVersion 0.0.0
 * 
 * @apiParam {String} Token User's Secret Code.
 * @apiParam {String} blog_id The ID of the blog I want to submit at
 * @apiParam {String} type The type of post. One of the following: text, photo, quote, link, video
 * @apiParam {String[]} tags Tags applied to the post
 * @apiParam {String} title of the post
 * @apiParam {String} text of the post
 * 
 * @apiSuccess {String} id The ID of the submitted post
 * @apiSuccess {String} post_url The location of the post
 * @apiSuccess {String} slug Short text summary to the end of the post URL
 * @apiSuccess {String} date The GMT date and time of the post
 * @apiSuccess {Number} timestamp The time of the post, in seconds since the epoch
 * @apiSuccess {String} [state=false] Indicates the current state of the post (submission)
 * @apiSuccess {String} short_url Short url for the post
 * @apiSuccess {String} post_author Author of post, only available when submission is not anonymous
 * @apiSuccess {Boolean} is_submission 	Indicates post is a submission (true)
 * @apiSuccess {String} anonymous_name Name on an anonymous submission
 * 
 *  
 * @apiErrorExample Response Error:
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "error": "Error In Input Data"
 *      }
 *      HTTP/1.1 401 Unauthorized
 *      {
 *          "error": "User Is Unauthorized"
 *      }
 */


/*=================== End =====================*/



/*
===================== ///////// <---------> ============= <---------> ///////// =====================> 
===================== ///////// <---------> Delete Submission Posts <---------> ///////// =====================> 
===================== ///////// <---------> ============= <---------> ///////// =====================> 
*/

/**
 * @api {delete} /blog/inbox/delete_submit Delete Submission Posts
 * @apiName deleteSubmissionPosts
 * @apiGroup Submission
 * @apiPermission User, Admin, Super_Admin
 * @apidescription  Delete Submission Posts from inbox page
 * @apiVersion 0.0.0
 * 
 * @apiParam {String} Token User's Secret Code.
 * @apiParam {String} blog_id The ID of the blog has the submission
 * 
 * @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "meta": {
 *                       "status": 200,
 *                       "msg": "OK"
 *                  },
 * 
 *          "response":{
 *                       "message": "Success"
 *                     }   
 *      }
 * @apiErrorExample Response Error:
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "error": "Error In Input Data"
 *      }
 *      HTTP/1.1 401 Unauthorized
 *      {
 *          "error": "User Is Unauthorized"
 *      }
 */

/*=================== End =====================*/

/*
===================== ///////// <---------> ============= <---------> ///////// =====================> 
===================== ///////// <---------> Edit Submission Posts <---------> ///////// =====================> 
===================== ///////// <---------> ============= <---------> ///////// =====================> 
*/

/**
 * @api {put} /blog/:inbox/edit_submit Edit Submission Posts
 * @apiName editSubmissionPosts
 * @apiGroup Submission
 * @apiPermission User, Admin, Super_Admin
 * @apidescription edit text in the submission post, only can done by the blog will have this post on their dashboard
 * @apiVersion 0.0.0
 * 
 * @apiParam {String} Token User's Secret Code.
 * @apiParam {String} blog_id The ID of the blog having the submitted post
 * @apiParam {String[]} tags Tags applied to the post
 * @apiParam {String} title of the post
 * @apiParam {String} text of the post
 * 
 * 
 * @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "meta": {
 *                       "status": 200,
 *                       "msg": "OK"
 *                  },
 * 
 *          "response":{
 *                       "message": "Success"
 *                     }   
 *      }
 * @apiErrorExample Response Error:
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "error": "Error In Input Data"
 *      }
 *      HTTP/1.1 401 Unauthorized
 *      {
 *          "error": "User Is Unauthorized"
 *      }
 */


/*=================== End =====================*/


/*
===================== ///////// <---------> ============= <---------> ///////// =====================> 
===================== ///////// <---------> Post Submission Posts <---------> ///////// =====================> 
===================== ///////// <---------> ============= <---------> ///////// =====================> 
*/

/**
 * @api {post} /blog/inbox/post_submit Post Submission Posts
 * @apiName postSubmissionPosts
 * @apiGroup Submission
 * @apiPermission User, Admin, Super_Admin
 * @apidescription posts the submission posts in the dashboard of the blog
 * @apiVersion 0.0.0
 * 
 * @apiParam {String} Token User's Secret Code.
 * @apiParam {String} blog_id The ID of the blog has the post
 * 
 * @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "meta": {
 *                       "status": 200,
 *                       "msg": "OK"
 *                  },
 * 
 *          "response":{
 *                       "message": "Success"
 *                     }   
 *      }
 * @apiErrorExample Response Error:
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "error": "Error In Input Data"
 *      }
 *      HTTP/1.1 401 Unauthorized
 *      {
 *          "error": "User Is Unauthorized"
 *      }
 */

/*=================== End =====================*/

/*
===================== ///////// <---------> ============= <---------> ///////// =====================> 
===================== ///////// <---------> Queue Submission Posts <---------> ///////// =====================> 
===================== ///////// <---------> ============= <---------> ///////// =====================> 
*/

/**
 * @api {put} /blog/inbox/queue_submit Queue Submission Posts
 * @apiName queueSubmissionPosts
 * @apiGroup Submission
 * @apiPermission User, Admin, Super_Admin
 * @apidescription put the submitted post with the queue posts
 * @apiVersion 0.0.0
 * 
 * @apiParam {String} Token User's Secret Code.
 * @apiParam {String} blog_id The ID of the bloghas the post
 * 
 * 
 * @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "meta": {
 *                       "status": 200,
 *                       "msg": "OK"
 *                  },
 * 
 *          "response":{
 *                       "message": "Success"
 *                     }   
 *      }
 * @apiErrorExample Response Error:
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "error": "Error In Input Data"
 *      }
 *      HTTP/1.1 401 Unauthorized
 *      {
 *          "error": "User Is Unauthorized"
 *      }
 */

/*=================== End =====================*/