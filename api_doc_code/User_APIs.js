//=====================================================================================================
//=====================================================================================================
//=====================================================================================================
/*
===================== ///////// <---------> ============== <---------> ///////// =====================> 
===================== ///////// <---------> User's Methods <---------> ///////// =====================> 
===================== ///////// <---------> ============== <---------> ///////// =====================> 
*/
//=====================================================================================================
//=====================================================================================================
//=====================================================================================================



/*
===================== ///////// <---------> ============= <---------> ///////// =====================> 
===================== ///////// <---------> Get User Info <---------> ///////// =====================> 
===================== ///////// <---------> ============= <---------> ///////// =====================> 
*/

/**
 * @api {get} /user/:userId Retrieve User information
 * @apiName retrieveUser
 * @apiGroup User
 * @apiPermission User, Admin, Super_Admin
 * @apidescription Gets information of the user account.
 * @apiVersion 0.0.0
 * 
 * @apiParam {String} userId User's Id.
 * @apisuccess {Object} User object
 *@apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "meta": {
 *                       "status": 200,
 *                       "msg": "OK"
 *                  },
 * 
 *          "response":{
 *        "message": "User Retrieved Successfully",
 *                       "data":"{ Object Contains User's Information }"
 *                     }   
 *      }
 * 
 * @apiErrorExample Response Error:
 *      HTTP/1.1 404 NOT FOUND
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
===================== ///////// <---------> ====================== <---------> ///////// =====================> 
===================== ///////// <--------->  Delete User <---------> ///////// =====================> 
===================== ///////// <---------> ====================== <---------> ///////// =====================> 
*/

/**
 * @api {post} /user/delete Deleting Your Account.
 * 
 * @apiName deleteUser
 * @apiGroup User
 * @apiVersion 0.0.0 
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apiParam {String} Token User's Secret Code.
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
 *        "message": "User Deleted Successfully",
 *                       "data":"{ User Object }"
 *                     }   
 *      }
 * 
 * @apiErrorExample Response Error:
 *      HTTP/1.1 404 NOT FOUND
 *      {
 *          "error": "Error In Input Data"
 *      }
 *      HTTP/1.1 401 Unauthorized
 *      {
 *          "error": "User Is Unauthorized"
 *      }
 */

/*=================== End =====================*/
