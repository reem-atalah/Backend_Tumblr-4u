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
 * @apiSuccessExample Response Data:
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
 * @apiHeader {String} Token User's Secret Code.
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
 *                      "message":"User Deleted Successfully",
 *                       "data": "{ Object Contains User's primary blog }"
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

/*=================== End =====================*/

/*
===================== ///////// <---------> ================= <---------> ///////// =====================> 
===================== ///////// <--------->  Forgot Password <---------> ///////// =====================> 
===================== ///////// <---------> ================= <---------> ///////// =====================> 
*/

/**
 * @api {get} /user/forget_password Forget Password.
 * 
 * @apiName forgetPassword
 * @apiGroup User
 * @apiVersion 0.0.0 
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apiParam {String} email User's email.
 *
 * @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "meta": {
 *                       "status": 200,
 *                       "msg": "OK"
 *                  },
 * 
 *          "res":{
 *                       "message": "{ Send Email To Reset Password }",
 *                       "data": ""
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

/*=================== End =====================*/

/*
===================== ///////// <---------> ================= <---------> ///////// =====================> 
===================== ///////// <--------->  Reset Password <---------> ///////// =====================> 
===================== ///////// <---------> ================= <---------> ///////// =====================> 
*/

/**
 * @api {put} /user/reset_password/ Reset Password.
 * 
 * @apiName resetPassword
 * @apiGroup User
 * @apiVersion 0.0.0 
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apiParam {String} email User's email.
 * @apiParam {String} password User's New Password.
 * @apiParam {String} cpassword confirm Password.
 * 
 * @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "meta": {
 *                       "status": 200,
 *                       "msg": "OK"
 *                  },
 * 
 *          "res":{
 *                       "message": "Password Udpated Successfully (<:>)",
 *                       "data": ""
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

/*=================== End =====================*/


/*
===================== ///////// <---------> ==================== <---------> ///////// =====================> 
===================== ///////// <--------->  User Interests <---------> ///////// =====================> 
===================== ///////// <---------> ==================== <---------> ///////// =====================> 
*/

/**
 * @api {post} /getInterestsFromUser Interests
 * 
 * @apiName getInterests
 * @apiGroup User
 * @apiVersion 0.0.0 
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apidescription changes the color theme of tumblr for the user
 * 
 * 
 * @apiHeader {String} Token User's Secret Code.
 * @apiParam {Array} interests array of tags user chosen to follow.
 * 
 * @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "response":{
 *                      User Object
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

/*=================== End =====================*/

/*
===================== ///////// <---------> ==================== <---------> ///////// =====================> 
===================== ///////// <--------->  Change Color Theme <---------> ///////// =====================> 
===================== ///////// <---------> ==================== <---------> ///////// =====================> 
*/

/**
 * @api {put} /updateColor Change Color Theme.
 * 
 * @apiName colorScheme
 * @apiGroup User
 * @apiVersion 0.0.0 
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apidescription changes the color theme of tumblr for the user
 * 
 * 
 * @apiHeader {String} Token User's Secret Code.
 * @apiParam {Number} bodyColor New Color.
 * 
 * @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "response":{
 *                      User Object
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
