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
 * @api {get} /user/:user_id Retrieve User information
 * @apiName getUser
 * @apiGroup User
 * @apiSampleRequest api.tumblr.com/user/:user_id\-H "Authorization: Bearer < YOUR_API_TOKEN>"
 * @apiPermission User, Admin, Super_Admin
 * @apidescription Gets information of the user account.
 * @apiVersion 0.0.0
 * 
 *
 *@apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "meta": {
 *                       "status": 200,
 *                       "msg": "OK"
 *                  },
 * 
 *          "response":{
 *                       "data":"{ Object Contains User's Information }"
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
===================== ///////// <---------> =========================== <---------> ///////// =====================> 
===================== ///////// <---------> Retrieve a User's Dashboard <---------> ///////// =====================> 
===================== ///////// <---------> =========================== <---------> ///////// =====================> 
*/

/**
 * @api {get} /:user_id/dashboard Retrieve a User's Dashboard
 * @apiName getDashboard
 * @apiGroup  User
 * @apiSampleRequest api.tumblr.com/:user_id/dashboard\-H "Authorization: Bearer < YOUR_API_TOKEN>"
 * @apiPermission User, Admin, Super_Admin
 * @apidescription go to the dashboard page
 * @apiVersion 0.0.0
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
 *                       "data":"{ Object Contains Posts, ... }"
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
===================== ///////// <---------> ========== <---------> ///////// =====================> 
===================== ///////// <---------> Follow Tag <---------> ///////// =====================> 
===================== ///////// <---------> ========== <---------> ///////// =====================> 
*/

/**
 * @api {post} /user/:user_id/follow_tag Follow Tag
 * @apiName followTag
 * @apiGroup User
 * @apiSampleRequest api.tumblr.com/user/:user_id/follow_tag\-H "Authorization: Bearer < YOUR_API_TOKEN>"
 * @apiPermission User, Admin, Super_Admin
 * @apidescription can share with anyone, we'll send post url
 * @apiVersion 0.0.0
 * 
 * @apiParam {String} tag_text the tag
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
 *                       "data":"Tag Following Success"
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
===================== ///////// <---------> Get Followed Tags <---------> ///////// =====================> 
===================== ///////// <---------> ================= <---------> ///////// =====================> 
*/

/**
 * @api {get} /user/:user_id/get_followed_tags  Tags Followed
 * @apiName getFollowedTags
 * @apiGroup User
 * @apiSampleRequest api.tumblr.com/user/:user_id/get_followed_tags\-H "Authorization: Bearer < YOUR_API_TOKEN>"
 * @apiPermission User, Admin, Super_Admin
 * @apidescription get the tag followed by the user, used in search
 * @apiVersion 0.0.0
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
 *                       "data":"[ array of strings have all tags followed by the user ]"
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
===================== ///////// <---------> ======= <---------> ///////// =====================> 
===================== ///////// <---------> Sign Up <---------> ///////// =====================> 
===================== ///////// <---------> ======= <---------> ///////// =====================> 
*/

/**
 * @api {post} /signup Sign Up.
 * 
 * @apiName signUp
 * @apiGroup User
 * @apiSampleRequest api.tumblr.com/signup
 * @apiVersion 0.0.0 
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apiParam {String} Email User's email
 * @apiParam {String} Password User's password
 * @apiParam {String} Blog_Name User's blog name
 * @apiParam {String} Age User's age
 * @apiParam {String} [Stuff] User's selected stuff
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
 *                       "message": "User Registered Successfully"
 *                       "data":"Token"
 *                     }   
 *      }
 * 
 * @apiErrorExample Response Error:
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "error": "Error In Input Data"
 *      }
 * 
 */

/*=================== End =====================*/

/*
===================== ///////// <---------> ======= <---------> ///////// =====================> 
===================== ///////// <---------> Log in <---------> ///////// =====================> 
===================== ///////// <---------> ======= <---------> ///////// =====================> 
*/

/**
 * @api {post} /login Log In.
 * 
 * @apiName login
 * @apiGroup User
 * @apiSampleRequest api.tumblr.com/login
 * @apiVersion 0.0.0 
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apiParam {String} Email User's email
 * @apiParam {String} Password User's password
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
 *                       "message": "user Logged in Successfully"
 *                       "data":"Token"
 *                     }   
 *      }
 * 
 * @apiErrorExample Response Error:
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "error": "Error In Input Data"
 *      }
 * 
 */

/*=================== End =====================*/

/*
===================== ///////// <---------> =================== <---------> ///////// =====================> 
===================== ///////// <---------> Log in Using Google <---------> ///////// =====================> 
===================== ///////// <---------> =================== <---------> ///////// =====================> 
*/

/**
 * @api {post} /google/login Log In Using Google.
 * 
 * @apiName googleLogin
 * @apiGroup User
 * @apiSampleRequest api.tumblr.com/google/login
 * 
 * @apiVersion 0.0.0 
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apiParam {String} Email User's email
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
 *                       "message": "user Logged in Successfully"
 *                       "data":"Token"
 *                     }   
 *      }
 * 
 * @apiErrorExample Response Error:
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "error": "Error In Input Data"
 *      }
 */

/*=================== End =====================*/

/*
===================== ///////// <---------> =========================== <---------> ///////// =====================> 
===================== ///////// <---------> Changing Your Email Address <---------> ///////// =====================> 
===================== ///////// <---------> =========================== <---------> ///////// =====================> 
*/

/**
 * @api {put} /user/:user_id/email Changing Your Email Address.
 * 
 * @apiName changeUserEmail
 * @apiGroup User
 * @apiSampleRequest api.tumblr.com/user/:user_id/email\-H "Authorization: Bearer < YOUR_API_TOKEN>"
 * @apiVersion 0.0.0 
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apiParam {String} Password User's password
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
 *                       "message": "Email Changed Successfully"
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
===================== ///////// <---------> ================ <---------> ///////// =====================> 
===================== ///////// <--------->  Update password <---------> ///////// =====================> 
===================== ///////// <---------> ================ <---------> ///////// =====================> 
*/

/**
 * @api {put} /user/:user_id/updatePassword Update your password.
 * 
 * @apiName updatePassword
 * @apiGroup User
 * @apiSampleRequest api.tumblr.com/user/:user_id/updatePassword\-H "Authorization: Bearer < YOUR_API_TOKEN>"
 * @apiVersion 0.0.0 
 * @apiPermission User, Admin, Super_Admin 
 * 
 * @apiParam {String} Current_Password Current user's password
 * @apiParam {String} New_Password New user's password
 *
 *@apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "meta": {
 *                       "status": 200,
 *                       "msg": "OK"
 *                  },
 * 
 *          "response":{
 *                       "message": "Password Updated Successfully"
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
===================== ///////// <---------> ====================== <---------> ///////// =====================> 
===================== ///////// <--------->  Deleting Your Account <---------> ///////// =====================> 
===================== ///////// <---------> ====================== <---------> ///////// =====================> 
*/

/**
 * @api {delete} /user/:user_id/deleteAccount Deleting Your Account.
 * 
 * @apiName deleteAccount
 * @apiGroup User
 * @apiSampleRequest api.tumblr.com/user/:user_id/updatePassword\-H "Authorization: Bearer < YOUR_API_TOKEN>"
 * @apiVersion 0.0.0 
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apiParam {String} Email User's email
 * @apiParam {String} Password User's password
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
 *                       "message": "Account Deleted Successfully"
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
===================== ///////// <---------> ==================================================== <---------> ///////// =====================> 
===================== ///////// <--------->  Access and manage data associated with your account <---------> ///////// =====================> 
===================== ///////// <---------> ==================================================== <---------> ///////// =====================> 
*/

/**
 * @api {get} /user/:user_id/data Access and manage data associated with your account.
 * 
 * @apiName accessdData
 * @apiGroup User
 * @apiSampleRequest api.tumblr.com/user/:user_id/data\-H "Authorization: Bearer < YOUR_API_TOKEN>"
 * @apiVersion 0.0.0 
 * @apiPermission User, Admin, Super_Admin
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
 *                       "message": "Data Will Be Sent Via Email"
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
===================== ///////// <--------->  Email Verification <---------> ///////// =====================> 
===================== ///////// <---------> ==================== <---------> ///////// =====================> 
*/

/**
 * @api {put} /user/:user_id/emailVerification Email Verification.
 * 
 * @apiName emailVerification
 * @apiGroup User
 * @apiSampleRequest api.tumblr.com/user/:user_id/emailVerification\-H "Authorization: Bearer < YOUR_API_TOKEN>"
 * @apiVersion 0.0.0 
 * @apiPermission User, Admin, Super_Admin
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
 *                       "message": "Email Verifid Successfully"
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
===================== ///////// <--------->  Get User Settings <---------> ///////// =====================> 
===================== ///////// <---------> ==================== <---------> ///////// =====================> 
*/

/**
 * @api {get} /user/:user_id/settings/ Get User Settings.
 * 
 * @apiName userSettings
 * @apiGroup User
 * @apiSampleRequest api.tumblr.com/user/:user_id/settings\-H "Authorization: Bearer < YOUR_API_TOKEN>"
 * @apiVersion 0.0.0 
 * @apiPermission User, Admin, Super_Admin
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
 *                       "data": "{ Object Contains User Settings }"
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
 * @api {get} /user/:user_id/forgot_password Forgot Password.
 * 
 * @apiName forgotPassword
 * @apiGroup User
 * @apiSampleRequest api.tumblr.com/user/:user_id/forgot_password\-H "Authorization: Bearer < YOUR_API_TOKEN>"
 * @apiVersion 0.0.0 
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apiParam {String} Email User's email.
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
 *                       "message": "{ Send Email To Reset Password }"
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
 * @api {put} /user/:user_id/reset_password Reset Password.
 * 
 * @apiName resetPassword
 * @apiGroup User
 * @apiSampleRequest api.tumblr.com/user/:user_id/reset_password\-H "Authorization: Bearer < YOUR_API_TOKEN>"
 * @apiVersion 0.0.0 
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apiParam {String} Email User's email.
 * @apiParam {String} Password User's New Password.
 * @apiParam {String} Confirm User's Password.
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
 *                      "message": "{ Password Updated Successfully }"
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
===================== ///////// <--------->  Change Color Scheme <---------> ///////// =====================> 
===================== ///////// <---------> ==================== <---------> ///////// =====================> 
*/

/**
 * @api {put} /user/:user_id/color Change Color Scheme.
 * 
 * @apiName colorScheme
 * @apiGroup User
 * @apiSampleRequest api.tumblr.com/user/:user_id/color\-H "Authorization: Bearer < YOUR_API_TOKEN>"
 * @apiVersion 0.0.0 
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apiParam {String} Color New Color Scheme.
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
 *                      "message": "{ Color Scheme Updated Successfully }"
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
===================== ///////// <--------->  Report Post <---------> ///////// =====================> 
===================== ///////// <---------> ==================== <---------> ///////// =====================> 
*/

/**
 * @api {post} /blog/:blog_id/pin/post Report Post.
 * 
 * @apiName reportPost
 * @apiGroup User
 * @apiSampleRequest api.tumblr.com/blog/:blog_id//pin/post\-H "Authorization: Bearer < YOUR_API_TOKEN>"
 * @apiVersion 0.0.0 
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apiParam {String} id Reported Post ID
 * @apiParam {String} Type Report's Type
 * @apiParam {String} content Report's Content
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
 *                      "message": "Report Sent successfully"
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

/*=================== End =====================*/