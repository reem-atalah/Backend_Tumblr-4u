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
 * @api {get} /:blog_id/:post_id/inbox Retrieve Inbox Posts
 * @apiName retrieveInboxPosts
 * @apiGroup Inbox
 * @apiPermission User, Admin, Super_Admin
 * @apidescription gets all the submission and ask posts in a page arranged according to time
 * @apiVersion 0.0.0
 * @apiSampleRequest api.tumblr.com/:blog_id/:post_id/inbox  \-H "Authorization: Bearer < YOUR_API_TOKEN>"
 * 
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
 * @api {delete} /:blog_id/:post_id/inbox/delete Delete All Messages
 * @apiName deleteInboxPosts
 * @apiGroup Inbox
 * @apiPermission User, Admin, Super_Admin
 * @apidescription remove all posts in the inbox page
 * @apiVersion 0.0.0
 * @apiSampleRequest api.tumblr.com/:blog_id/:post_id/inbox/delete  \-H "Authorization: Bearer < YOUR_API_TOKEN>"
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