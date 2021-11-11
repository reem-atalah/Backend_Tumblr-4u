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
 * @api {post} /:blog_id/make_ask Make Ask Posts
 * @apiName makeAskPosts
 * @apiGroup Ask
 * @apiPermission User, Admin, Super_Admin
 * @apidescription ask a blog in a post
 * @apiVersion 0.0.0
 * @apiSampleRequest api.tumblr.com/:blog_id/make_ask  \-H "Authorization: Bearer < YOUR_API_TOKEN>"
 * 
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
 * @api {post} /:blog_id/inbox/answer_ask Answer Ask Posts
 * @apiName answerAskPosts
 * @apiGroup Ask
 * @apiPermission User, Admin, Super_Admin
 * @apidescription answer the post of ask in the blog dashboard
 * @apiVersion 0.0.0
 * @apiSampleRequest api.tumblr.com/:blog_id/inbox/answer_ask  \-H "Authorization: Bearer < YOUR_API_TOKEN>"
 * 
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
 * @api {delete} /:blog_id/inbox/delete_ask Delete Ask Posts
 * @apiName seleteAskPosts
 * @apiGroup Ask
 * @apiPermission User, Admin, Super_Admin
 * @apidescription delete the ask post, it will never be puplished
 * @apiVersion 0.0.0
 * 
 * @apiSampleRequest api.tumblr.com/:blog_id/inbox/delete_ask  \-H "Authorization: Bearer < YOUR_API_TOKEN>"
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