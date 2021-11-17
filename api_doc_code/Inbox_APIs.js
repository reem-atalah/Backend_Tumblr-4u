//=====================================================================================================
//=====================================================================================================
//=====================================================================================================
/*
===================== ///////// <---------> ============== <---------> ///////// =====================> 
===================== ///////// <---------> Inbox's Methods <---------> ///////// =====================> 
===================== ///////// <---------> ============== <---------> ///////// =====================> 
*/
//=====================================================================================================
//=====================================================================================================
//=====================================================================================================

/*
===================== ///////// <---------> ============= <---------> ///////// =====================> 
===================== ///////// <---------> Retrieve Inbox Posts <---------> ///////// =====================> 
===================== ///////// <---------> ============= <---------> ///////// =====================> 
*/

/**
 * @api {get} /blog/inbox Retrieve Inbox Posts
 * @apiName retrieveInboxPosts
 * @apiGroup Inbox
 * @apiPermission User, Admin, Super_Admin
 * @apidescription gets all the submission and ask posts in a page arranged according to time
 * @apiVersion 0.0.0
 * 
 * @apiParam {String} Token User's Secret Code.
 * @apiParam {String} blog_id The ID of the blog has the post
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
 *                       "data": "[ Ask Posts , Submission Posts ]"
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
===================== ///////// <---------> Delete All Messages <---------> ///////// =====================> 
===================== ///////// <---------> ============= <---------> ///////// =====================> 
*/

/**
 * @api {delete} /blog/inbox/delete Delete All Messages
 * @apiName deleteInboxPosts
 * @apiGroup Inbox
 * @apiPermission User, Admin, Super_Admin
 * @apidescription remove all posts in the inbox page
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