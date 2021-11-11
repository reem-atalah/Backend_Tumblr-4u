//=====================================================================================================
//=====================================================================================================
//=====================================================================================================
/*
===================== ///////// <---------> ============== <---------> ///////// =====================> 
===================== ///////// <---------> Ask Methods <---------> ///////// =====================> 
===================== ///////// <---------> ============== <---------> ///////// =====================> 
*/
//=====================================================================================================
//=====================================================================================================
//=====================================================================================================


/*
===================== ///////// <---------> ==================== <---------> ///////// =====================> 
===================== ///////// <--------->  Make Ask Posts <---------> ///////// =====================> 
===================== ///////// <---------> ==================== <---------> ///////// =====================> 
*/

/**
 * @api {post} /blog/ask Make Ask Posts
 * @apiName makeAskPosts
 * @apiGroup Ask
 * @apiPermission User, Admin, Super_Admin
 * @apidescription ask a blog in a post
 * @apiVersion 0.0.0
 * 
 * @apiParam {String} Token User's Secret Code.
 * @apiParam {String} blog_id The ID of the blog has the post
 * @apiParam {String} text text of the question/ask
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
 *                      "message": "Asked Post Created successfully"
 *                     }   
 *      }
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

/*
===================== ///////// <---------> ==================== <---------> ///////// =====================> 
===================== ///////// <--------->  Answer Ask Posts <---------> ///////// =====================> 
===================== ///////// <---------> ==================== <---------> ///////// =====================> 
*/

/**
 * @api {post} /blog/inbox/answer Answer Ask Posts
 * @apiName answerAskPosts
 * @apiGroup Ask
 * @apiPermission User, Admin, Super_Admin
 * @apidescription answer the post of ask in the blog dashboard
 * @apiVersion 0.0.0
 * 
 * @apiParam {String} Token User's Secret Code.
 * @apiParam {String} blog_id The ID of the blog has the post
 * @apiParam {String} text answer of the ask
 * @apiParam {String[]} tags Tags applied to the post
 * @apiParam {String} type post type (now, queue,draft,private,schedule)
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
 *                      "message": "Ask Post Answered Successfully"
 *                     }   
 *      }
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

/*
===================== ///////// <---------> ==================== <---------> ///////// =====================> 
===================== ///////// <--------->  Delete Ask Posts <---------> ///////// =====================> 
===================== ///////// <---------> ==================== <---------> ///////// =====================> 
*/

/**
 * @api {delete} /blog/inbox/delete_ask Delete Ask Posts
 * @apiName seleteAskPosts
 * @apiGroup Ask
 * @apiPermission User, Admin, Super_Admin
 * @apidescription delete the ask post, it will never be puplished
 * @apiVersion 0.0.0
 * 
 * @apiParam {String} Token User's Secret Code.
 * @apiParam {String} blog_id The ID of the blog has the ask post
 * 
 * 
 *  @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "meta": {
 *                       "status": 200,
 *                       "msg": "OK"
 *                  },
 * 
 *          "response":{
 *                      "message": "Ask Post Deleted Successfully"
 *                     }   
 *      }
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