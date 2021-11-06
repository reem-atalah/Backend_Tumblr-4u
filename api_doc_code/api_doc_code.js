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
 * @api {get} /user Retrieve User information
 * @apiName getUser
 * @apiGroup User
 * @apiPermission User, Admin, Super_Admin
 * @apidescription Gets information of the user account.
 * @apiVersion 0.0.0
 * 
 * @apiParam {String} Token User's Secret Code.
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
 * @api {get} /dashboard Retrieve a User's Dashboard
 * @apiName getDashboard
 * @apiGroup  User
 * @apiPermission User, Admin, Super_Admin
 * @apidescription go to the dashboard page
 * @apiVersion 0.0.0
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
 * @api {post} /user/follow_tag Follow Tag
 * @apiName followTag
 * @apiGroup User
 * @apiPermission User, Admin, Super_Admin
 * @apidescription can share with anyone, we'll send post url
 * @apiVersion 0.0.0
 * 
 * @apiParam {String} Token User's Secret Code.
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
 * @api {get} /user/get_followed_tags  Tags Followed
 * @apiName getFollowedTags
 * @apiGroup User
 * @apiPermission User, Admin, Super_Admin
 * @apidescription get the tag followed by the user, used in search
 * @apiVersion 0.0.0
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
 * @api {post} /user/signup Sign Up.
 * 
 * @apiName signUp
 * @apiGroup User
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
 * @api {post} /user/login Log In.
 * 
 * @apiName login
 * @apiGroup User
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
 * @api {put} /user/email Changing Your Email Address.
 * 
 * @apiName changeUserEmail
 * @apiGroup User
 * @apiVersion 0.0.0 
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apiParam {String} Token User's Secret Code.
 * @apiParam {String} Email User's new email
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
 * @api {put} /user/updatePassword Update your password.
 * 
 * @apiName updatePassword
 * @apiGroup User
 * @apiVersion 0.0.0 
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apiParam {String} Token User's Secret Code.
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
 * @api {delete} /user/deleteAccount Deleting Your Account.
 * 
 * @apiName deleteAccount
 * @apiGroup User
 * @apiVersion 0.0.0 
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apiParam {String} Token User's Secret Code.
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
 * @api {get} /user/data Access and manage data associated with your account.
 * 
 * @apiName accessdData
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
 * @api {put} /user/emailVerification/:Token Email Verification.
 * 
 * @apiName emailVerification
 * @apiGroup User
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
 * @api {get} /user/settings/ Get User Settings.
 * 
 * @apiName userSettings
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
 * @api {get} /user/forgot_password Forgot Password.
 * 
 * @apiName forgotPassword
 * @apiGroup User
 * @apiVersion 0.0.0 
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apiParam {String} Token User's Secret Code.
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
 * @api {put} /user/reset_password/:Token Reset Password.
 * 
 * @apiName resetPassword
 * @apiGroup User
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
 * @api {put} /user/color Change Color Scheme.
 * 
 * @apiName colorScheme
 * @apiGroup User
 * @apiVersion 0.0.0 
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apiParam {String} Token User's Secret Code.
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
 * @api {post} /pin/post Report Post.
 * 
 * @apiName reportPost
 * @apiGroup User
 * @apiVersion 0.0.0 
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apiParam {String} Token User's Secret Code.
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

//=====================================================================================================
//=====================================================================================================
//=====================================================================================================
/*
===================== ///////// <---------> ============ <---------> ///////// =====================> 
===================== ///////// <---------> Post Methods  <---------> ///////// =====================> 
===================== ///////// <---------> ============ <---------> ///////// =====================> 
*/
//=====================================================================================================
//=====================================================================================================
//=====================================================================================================

/*
===================== ///////// <---------> =========== <---------> ///////// =====================> 
===================== ///////// <--------->   Pin Post <---------> ///////// =====================> 
===================== ///////// <---------> =========== <---------> ///////// =====================> 
*/

/**
 * @api {put} /pin/post Pin Post.
 * 
 * @apiName pinPost
 * @apiGroup Post
 * @apiVersion 0.0.0 
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apiParam {String} Token User's Secret Code.
 * @apiParam {String} Post_Id Post's ID
 * @apiParam {String} Blog_Id Blog's Id
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
 *                      "message": "Post Pinned Successfully"
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
===================== ///////// <--------->   Remove Comments <---------> ///////// =====================> 
===================== ///////// <---------> ================= <---------> ///////// =====================> 
*/

/**
 * @api {post} /posts/remove_comment Remove Comments
 * @apiName commentRemover
 * @apiGroup Post
 * @apiPermission User, Admin, Super_Admin
 * @apidescription removes the comment on a post
 * @apiVersion 0.0.0
 * 
 * @apiParam {String} Token User's Secret Code.
 * @apiParam {String} Comment_Id Comment Id.
 * @apiParam {String} Post_Id Post Id.
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
 *                      "message": "Comment Deleted Successfully"
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
===================== ///////// <--------->   Count Reblogs <---------> ///////// =====================> 
===================== ///////// <---------> ================= <---------> ///////// =====================> 
*/

/**
 * @api {get} /posts/count_reblogs Count Reblogs
 * @apiName countReblogs
 * @apiGroup Post
 * @apiPermission User, Admin, Super_Admin
 * @apidescription count the number of reblogs of a certain post
 * @apiVersion 0.0.0
 * 
 * @apiParam {String} Token User's Secret Code.
 * @apiParam {String} post_id The ID of the post 
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
 *                      "data": "Number of Reblogs"
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
===================== ///////// <--------->   Make Comment <---------> ///////// =====================> 
===================== ///////// <---------> ================= <---------> ///////// =====================> 
*/

/**
 * @api {post} /post/make_comment Make Comment
 * @apiName makeComment
 * @apiGroup Post
 * @apiPermission User, Admin, Super_Admin
 * @apidescription a commenter blog can make comments on any posts
 * @apiVersion 0.0.0
 * 
 * @apiParam {String} Token User's Secret Code.
 * @apiParam {String} post_blog_id The ID of the post 
 * @apiParam {String} text comment text  
 * @apiParam {String} commenter_id id of the blog writting comment
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
 *                      "message": "Comment Created Successfully"
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
===================== ///////// <--------->   Delete a Post <---------> ///////// =====================> 
===================== ///////// <---------> ================= <---------> ///////// =====================> 
*/

/**
 * @api {Delete} /post/delete Delete a Post
 * @apiName deletePost
 * @apiGroup Post
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apidescription removes a post for the poster owner
 * @apiVersion 0.0.0
 *
 * @apiParam {String} Token User's Secret Code.
 * @apiParam {String} post_id The ID of the post to delete
 * @apiParam {String} blog_id The ID of the bloghas the post
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
 *                      "message": "Post Deleted Successfully"
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
===================== ///////// <--------->   GetQueuedPosts <---------> ///////// =====================> 
===================== ///////// <---------> ================= <---------> ///////// =====================> 
*/

/**
 * @api {get} /blog/queue  GetQueuedPosts
 * @apiDescription Gives you a list of the currently queued posts for the specified blog.
 * @apiName getQueuedPosts
 * 
 * @apiGroup Post
 * @apiPermission User, Admin, Super_Admin
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
 *                      "data": "[Array of Queued Posts]"
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
===================== ///////// <--------->   Reorder Queued Posts <---------> ///////// =====================> 
===================== ///////// <---------> ====================== <---------> ///////// =====================> 
*/

/**
 * @api {put} /blog/queue/reorder   Reorder Queued Posts
 * @apiDescription This allows you to reorder a post within the queue, moving it after an existing queued post, or to the top.
 * @apiName reorderQueuedPosts
 * @apiGroup Post
 * @apiPermission User, Admin, Super_Admin
 * @apiVersion 0.0.0
 * 
 * @apiParam {String} Token User's Secret Code.
 * @apiParam {String} blog_id The ID of the bloghas the post
 * @apiParam {String} post_id Post ID to move.
 * @apiParam {String} [insert_after="0"] Which post ID to move it after, or 0 to make it the first post
 * @apiParam {Array} UnOrdered_Queued_posts all queued posts
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
 *                      "data": "[Array of Ordered_Queued_posts change time of each post]"
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
===================== ///////// <--------->   Shuffle Queued Posts <---------> ///////// =====================> 
===================== ///////// <---------> ====================== <---------> ///////// =====================> 
*/

/**
 * @api {post} /blog/queue/shuffle  Shuffle Queued Posts
 * @apiDescription This randomly shuffles the queue for the specified blog.
 * @apiName shuffleQueuedPosts
 * @apiGroup Post
 * @apiPermission User, Admin, Super_Admin
 * @apiVersion 0.0.0
 * 
 * @apiParam {String} Token User's Secret Code.
 * @apiParam {String} blog_id The ID of the bloghas the post
 * @apiParam {String} [insert_after="0"] Which post ID to move it after, or 0 to make it the first post
 * @apiParam {Array} UnOrdered_Queued_posts all queued posts
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
 *                      "data": "[Array of Ordered_Queued_posts change time of each post after shuffeling]"
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
===================== ///////// <--------->   Retrieve Draft Posts <---------> ///////// =====================> 
===================== ///////// <---------> ====================== <---------> ///////// =====================> 
*/

/**
 * @api {get} /blog/draft Retrieve Draft Posts
 * @apiName retrieveDraftPosts
 * @apiGroup Post
 * @apiPermission User, Admin, Super_Admin
 * @apidescription get the posts which were published as drafts to the owner of the post
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
 *                      "data": "[Array of posts was posted as drafts]"
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
===================== ///////// <---------> =========== <---------> ///////// =====================> 
===================== ///////// <--------->  Share With <---------> ///////// =====================> 
===================== ///////// <---------> ============ <---------> ///////// =====================> 
*/

/**
 * @api {post} /posts/share_with Share With
 * @apiName sharePostWith
 * @apiGroup Post
 * @apiPermission User, Admin, Super_Admin
 * @apidescription can share with anyone, we'll send post url
 * @apiVersion 0.0.0
 * 
 * 
 * @apiParam {String} Token User's Secret Code.
 * @apiParam {String} post_id The ID of the post
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
 *                      "message": "Post Shared Successfully"
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
===================== ///////// <---------> ============= <---------> ///////// =====================> 
===================== ///////// <--------->  New Blog Post <---------> ///////// =====================> 
===================== ///////// <---------> ============== <---------> ///////// =====================> 
*/

/**
 * @api {post} /blog/post Create a New Blog Post
 * @apiName postBlogPost
 * @apiGroup Post
 * @apiPermission User, Admin, Super_Admin

 * 
 * @apidescription Create a New Blog Post (Legacy), one of the following types: text, photo, quote, link, chat, audio, video.
 * @apiVersion 0.0.0
 *
 * @apiParam {String} Token User's Secret Code.
 * @apiParam {String} blog-id ID of the blog that the post will be created in.
 * @apiParam {String} type=text The type of post to create. Specify one of the following: text, photo, quote, link, chat, audio, video.
 * @apiParam {String} [state=published] The state of the post. Specify one of the following: published, draft, queue, private.
 * @apiParam {String} [tags] Comma-separated tags for this post.
 * @apiParam {String} [date=The date and time of the POST request] Date of creation.
 * @apiParam {String} [text_post] Fields requested for text posts:
 * @apiParam {String} [title] The optional title of the post.
 * @apiParam {String} body The body of the post.
 * @apiParam {String} [photo_post] Fields requested for photo posts:
 * @apiParam {String} [caption] Caption of set or single photo.
 * @apiParam {Array} [photos] Array of photos each has:
 * @apiParam {String} [caption] Caption of single photo.
 * @apiParam {String} link The "click-through URL" for the photo.
 * @apiParam {String} [quote_post] Fields requested for quote posts:
 * @apiParam {String} text The full text of the quote.
 * @apiParam {String} [source] Full HTML for the source of the quote Example: <a href="...">Steve Jobs</a>.
 * @apiParam {String} [link_post] Fields requested for link posts:
 * @apiParam {String} link The link!.
 * @apiParam {String} [title] The title of the page the link points to.
 * @apiParam {String} [summary] Summary of the page the link points to.
 * @apiParam {String} [description] A user-supplied description.
 * @apiParam {String} [link_author] The author of the article the link points to.
 * @apiParam {String} [chat_post] Fields requested for chat posts:
 * @apiParam {String} [title] The optional title of the chat.
 * @apiParam {String} body The full chat body.
 * @apiParam {String} [audio_post] Fields requested for audio posts:
 * @apiParam {String} [caption] User supplied caption.
 * @apiParam {String} external_url The URL of the site that hosts the audio file (not Tumblr).
 * @apiParam {String} data An audio file, limit 10MB.
 * @apiParam {String} [video_post] Fields requested for video posts:
 * @apiParam {String} [caption] User supplied caption.
 * @apiParam {String} data A video file, limited to 500MB and 10 minutes.
 * @apiParam {String} embed HTML embed code for the video or a URI to the video. If you provide an unsupported service's URI you may receive a 400 response.	.
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
 *                      "message": "Post Created Successfully"
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
===================== ///////// <--------->  Edit a Blog Post <---------> ///////// =====================> 
===================== ///////// <---------> ================ <---------> ///////// =====================> 
*/

/**
 * @api {post} /blog/edit Edit a Blog Post
 * @apiName editBlogPost
 * @apiGroup Post
 * 
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apidescription Edit a Blog Post (Legacy)
 * @apiVersion 0.0.0
 *
 * @apiParam {String} Token User's Secret Code.
 * @apiParam {String} request_parameters These parameters are in addition to the common parameters listed under /post.
 * @apiParam {String} post-id The ID of the post to edit.
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
 *                      "message": "Post Edit Successfully"
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
===================== ///////// <--------->  Reblog a Post <---------> ///////// =====================> 
===================== ///////// <---------> ================ <---------> ///////// =====================> 
*/

/**
 * @api {post} /blog/reblog Reblog a Post
 * @apiName reblogBlogPost
 * @apiGroup Post
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apidescription Reblog a Post (Legacy)
 * @apiVersion 0.0.0
 *
 * @apiParam {String} Token User's Secret Code.
 * @apiParam {String} request_parameters These parameters are in addition to the common parameters listed under /post.
 * @apiParam {String} post-id The ID of the rebloged post.
 * @apiParam {String} blog-id The ID of the blog.
 * @apiParam {String} [description] Optional description on the rebloged post.
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
 *                      "message": "Post Rebloged Successfully"
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
===================== ///////// <--------->  Get notes <---------> ///////// =====================> 
===================== ///////// <---------> ================ <---------> ///////// =====================> 
*/

/**
 * @api {get} /blog/notes Get notes for a specific Post
 * @apiName getBlogPostNotes
 * @apiGroup Post
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apidescription Get notes for a specific Post
 * @apiVersion 0.0.0
 * 
 * @apiParam {String} Token User's Secret Code.
 * @apiParam {String} blog-id The ID of the blog that have the post to get its notes.
 * @apiParam {String} post-id The ID of the post to fetch notes for.
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
 *                      "data": "[ Notes ]"
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
===================== ///////// <--------->  Like a blog post <---------> ///////// =====================> 
===================== ///////// <---------> ================ <---------> ///////// =====================> 
*/

/**
 * @api {post} /blog/like Like a blog post
 * @apiName likeBlogPost
 * @apiGroup Post
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apidescription Like a blog post
 * @apiVersion 0.0.0
 *
 * @apiParam {String} Token User's Secret Code.
 * @apiParam {String} blog-id Primary blog ID (only primary blogs can like posts).
 * @apiParam {String} post-id The ID of the liked post.
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
 *                      "message": "Post Successfully Liked"
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
===================== ///////// <--------->  Unlike a blog post <---------> ///////// =====================> 
===================== ///////// <---------> ================ <---------> ///////// =====================> 
*/

/**
 * @api {post} /blog/unlike Unlike a blog post
 * @apiName unlikeBlogPost
 * @apiGroup Post
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apidescription Unlike a blog post
 * @apiVersion 0.0.0
 *
 * @apiParam {String} Token User's Secret Code.
 * @apiParam {String} blog-id Primary blog ID (only primary blogs can unlike posts).
 * @apiParam {String} post-id The ID of the post to unlike.
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
 *                      "message": "Post Successfully Unliked"
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
===================== ///////// <--------->  Get Posts with search content <---------> ///////// =====================> 
===================== ///////// <---------> ================ <---------> ///////// =====================> 
*/

/**
 * @api {get} /blog/post/ Get Posts with search content
 * @apiName getPostsWithSearchContent
 * @apiGroup Post
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apidescription Get Posts with search content
 * @apiVersion 0.0.0
 *
 * @apiParam {String} Token User's Secret Code.
 * @apiParam {String} search_content The content in the posts you'd like to retrieve.
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
 *                      "data": "[ Posts ]"
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
===================== ///////// <--------->  Get Posts with search content in a specific blog <---------> ///////// =====================> 
===================== ///////// <---------> ================ <---------> ///////// =====================> 
*/

/**
 * @api {get} /blog/search_content Get Posts with search content in a specific blog
 * @apiName getPostsWithSearchContentInBlog
 * @apiGroup Post
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apidescription Get Posts with search content in a specific blog
 * @apiVersion 0.0.0
 *
 * @apiParam {String} Token User's Secret Code.
 * @apiParam {String} post-id The ID of the post.
 * @apiParam {String} blog-id The ID of the blog to search in.
 * @apiParam {String} search_content The content in the posts you'd like to retrieve.
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
 *                      "data": "[ Posts ]"
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





//=====================================================================================================
//=====================================================================================================
//=====================================================================================================
/*
===================== ///////// <---------> ============== <---------> ///////// =====================> 
===================== ///////// <---------> Blog's Methods <---------> ///////// =====================> 
===================== ///////// <---------> ============== <---------> ///////// =====================> 
*/
//=====================================================================================================
//=====================================================================================================
//=====================================================================================================

/*
===================== ///////// <---------> ============= <---------> ///////// =====================> 
===================== ///////// <---------> Remove Blog <---------> ///////// =====================> 
===================== ///////// <---------> ============= <---------> ///////// =====================> 
*/

/**
 * @api {delete} /blog/:blog_id/remove_blog Remove Blog
 * @apiName blogRemover
 * @apiGroup Blog
 * 
 * @apiPermission User, Admin, Super_Admin
 * @apidescription removes a post
 * @apiVersion 0.0.0
 * 
 * @apiParam {String} Token User's Secret Code.
 * @apiParam {String} blog_id The ID of the blog wanted to be removed
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
 *                       "message":"Blog removed successfully"
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
===================== ///////// <---------> ============= <---------> ///////// =====================> 
===================== ///////// <---------> Retrieve Blog information <---------> ///////// =====================> 
===================== ///////// <---------> ============= <---------> ///////// =====================> 
*/


/**
 * @api {get} /blog/info Retrieve Blog information
 * @apiName getBlog
 * @apiGroup Blog
 * @apiPermission User, Admin, Super_Admin
 * @apidescription retrieve all that can be needed by front end to represent the blog
 * @apiVersion 0.0.0
 * 
 * @apiParam {String} Token User's Secret Code.
 * @apiParam {String} blog_id Blog's unique ID.
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
 *                       "data":"{Object Contains Blog Info}}"
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
===================== ///////// <---------> ============= <---------> ///////// =====================> 
===================== ///////// <---------> Retrieve Blog's Activity Feed <---------> ///////// =====================> 
===================== ///////// <---------> ============= <---------> ///////// =====================> 
*/

/**
 * @api {get} /blog/:blog_id/activity  Retrieve Blog's Activity Feed
 * @apiName getBlogActivityFeed
 * @apiGroup Blog
 * @apiPermission User, Admin, Super_Admin
 * @apidescription gets the blog's activity page
 * @apiVersion 0.0.0
 * 
 * @apiParam {String} Token User's Secret Code.
 * @apiParam {String} blog_id The ID of the blog's activity'
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
 *                       "data":"{Object Contains Blog's Activity Info}"
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
===================== ///////// <---------> Retrieve Blog's Blocks <---------> ///////// =====================> 
===================== ///////// <---------> ============= <---------> ///////// =====================> 
*/


/**
 * @api {get} /blog/blocks Retrieve Blog's Blocks
 * @apiName getBlogBlocks
 * @apiGroup Blog
 * @apiPermission User, Admin, Super_Admin
 * @apidescription gets the blogs I blocked  
 * @apiVersion 0.0.0
 * 
 * @apiParam {String} Token User's Secret Code.
 * @apiParam {String} blog_id Blog's unique ID.
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
 *                       "data":"[Bloked Blogs]"
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
===================== ///////// <---------> Block a Blog <---------> ///////// =====================> 
===================== ///////// <---------> ============= <---------> ///////// =====================> 
*/

/**
 * @api {post} /blog/block Block a Blog  
 * @apiName postBlogBlock
 * @apiGroup Blog
 * @apiPermission User, Admin, Super_Admin
 * @apidescription blocks a blog so you can't see the blog or its posts
 * @apiVersion 0.0.0
 * 
 * @apiParam {String} Token User's Secret Code.
 * @apiParam {String} blocking_blog_id Blocking blog id.
 * @apiParam {String} blocked_blog_id Blocked blog id.(if the blog isn't blocked via a post)
 * @apiParam {String} [post-id] Post id of blocked blog.(if the blog is blocked via a post)
 * @apiParam {Boolean} [Is_primary] flag indicates that the blocking is primary.
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
 *                       "message":"Blog Blocked Successfully"
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
===================== ///////// <---------> Remove a Block <---------> ///////// =====================> 
===================== ///////// <---------> ============= <---------> ///////// =====================> 
*/

/**
 * @api {post} /blog/remove_blocks Remove a Block
 * @apiName removeBlogBlock
 * @apiGroup Blog
 * @apiPermission User, Admin, Super_Admin
 * @apidescription removes a block from a blog
 * @apiVersion 0.0.0

 * @apiParam {String} Token User's Secret Code.
 * @apiParam {String} blocking_blog_id Blocking blog id.
 * @apiParam {String} blocked_blog_id Blocked blog id.(if the blog isn't blocked via a post)
 * @apiParam {String} [post-id] Post id of blocked blog.(if the blog is blocked via a post)
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
 *                       "message":"Blog Unblocked Successfully"
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
===================== ///////// <---------> Retrieve Blog's Archive <---------> ///////// =====================> 
===================== ///////// <---------> ============= <---------> ///////// =====================> 
*/

/**
 * @api {get} /blog/archive Retrieve Blog's Archive
 * @apiName getBlogLikes
 * @apiGroup Blog
 * @apiPermission User, Admin, Super_Admin
 * @apidescription gets the page of blog's archive page
 * @apiVersion 0.0.0
 * 
 * @apiParam {String} Token User's Secret Code.
 * @apiParam {String} blog_id Blog's unique ID.
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
 *                       "data":"[Posts]"
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
===================== ///////// <---------> Retrieve Blog's Likes <---------> ///////// =====================> 
===================== ///////// <---------> ============= <---------> ///////// =====================> 
*/

/**
 * @api {get} /blog/likes Retrieve Blog's Likes
 * @apiName getBlogLikes
 * @apiGroup Blog
 * 
 * @apiPermission User, Admin, Super_Admin
 * @apidescription gets the page of user's likes
 * @apiVersion 0.0.0
 * 
 * @apiParam {String} Token User's Secret Code.
 * @apiParam {Number} blog_id Blog's unique ID.
 * @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "meta": {
 *                       "status": 200,
 *                       "msg": "OK"
 *                  },
 * 
 *          "response":{
 *                       "data":"[Liked Posts]"
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
===================== ///////// <---------> Retrieve Blog's Following <---------> ///////// =====================> 
===================== ///////// <---------> ============= <---------> ///////// =====================> 
*/

/**
 * @api {get} /blog/following Retrieve Blog's Following
 * @apiName getBlogFollowing
 * @apiGroup Blog
 * @apiPermission User, Admin, Super_Admin
 * @apidescription gets a pgae with all blogs who I'm following a blog
 * @apiVersion 0.0.0
 * 
 * @apiParam {String} Token User's Secret Code.
 * @apiParam {String} blog_id Blog's unique ID.
 * @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "meta": {
 *                       "status": 200,
 *                       "msg": "OK"
 *                  },
 * 
 *          "response":{
 *                       "data":"[Following Blogs]"
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
===================== ///////// <---------> Retrieve Blog's Followers <---------> ///////// =====================> 
===================== ///////// <---------> ============= <---------> ///////// =====================> 
*/

/**
 * @api {get} /blog/followers Retrieve Blog's Followers
 * @apiName getBlogFollowers
 * @apiGroup Blog
 * @apiPermission User, Admin, Super_Admin
 * @apidescription gets a pgae with all blogs following a blog
 * @apiVersion 0.0.0
 * 
 * @apiParam {String} Token User's Secret Code.
 * @apiParam {String} blog_id Blog's unique ID.
 * @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "meta": {
 *                       "status": 200,
 *                       "msg": "OK"
 *                  },
 * 
 *          "response":{
 *                       "data":"[Blog Followers]"
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
===================== ///////// <---------> Retrieve Published Posts <---------> ///////// =====================> 
===================== ///////// <---------> ============= <---------> ///////// =====================> 
*/

/**
 * @api {get} /blog/posts Retrieve Published Posts
 * @apiName getPosts
 * @apiGroup Blog
 * @apiPermission User, Admin, Super_Admin
 * @apidescription gets the puplished posts page of a blog
 * @apiVersion 0.0.0
 * 
 * @apiParam {String} Token User's Secret Code.
 * @apiParam {String} blog_id Blog's unique ID.
 *
 * @apiSuccess {String} blog_name The short name used to uniquely identify a blog.
 * @apiSuccess {Number} id The post's unique ID.
 * @apiSuccess {String} genesis_post_id The post's unique "genesis" ID as a String.
 * @apiSuccess {String} post_url The location of the post.
 * @apiSuccess {String} type The type of the post.
 * @apiSuccess {Number} timestamp The time of the post, in seconds since the epoch.
 * @apiSuccess {String} date The GMT date and time of the post, as a string.
 * @apiSuccess {String} format The post format: html or markdown.
 * @apiSuccess {String} reblog_key The key used to reblog this post.
 * @apiSuccess {Boolean} mobile Indicates whether the post was created via mobile/email publishing.
 * @apiSuccess {String} source_url 	The URL for the source of the content (for quotes, reblogs, etc.).
 * @apiSuccess {String} source_title The title of the source site.
 * @apiSuccess {Boolean} liked Indicates if a user has already liked a post or not.
 * @apiSuccess {String} state Indicates the current state of the post.
 * @apiSuccess {Number} total_posts The total number of post available for this request, useful for paginating through results.
 * @apiSuccess {Array} Legacy_Photo_Posts Photo posts containing these fields:
 * @apiSuccess {String} Legacy_Photo_Posts.caption the user-supplied caption.
 * @apiSuccess {Number} Legacy_Photo_Posts.width The width of the photo or photoset.
 * @apiSuccess {Number} Legacy_Photo_Posts.height The height of the photo or photoset.
 * @apiSuccess {Array} 	Legacy_Photo_Posts.photos Photo objects with properties:
 * @apiSuccess {String} Legacy_Photo_Posts.photos.caption user supplied caption for the individual photo (Photosets only).
 * @apiSuccess {Array} Legacy_Photo_Posts.photos.alt_sizes alternate photo sizes, each with:
 * @apiSuccess {Number} Legacy_Photo_Posts.photos.alt_sizes.width of the photo, in pixels.
 * @apiSuccess {Number} Legacy_Photo_Posts.photos.alt_sizes.height of the photo, in pixels.
 * @apiSuccess {String} Legacy_Photo_Posts.photos.alt_sizes.url Location of the photo file (either a JPG, GIF, or PNG).
 * @apiSuccess {Array} Legacy_Quote_Posts Quote posts containing these fields:
 * @apiSuccess {String} Legacy_Quote_Posts.text The text of the quote (can be modified by the user when posting).
 * @apiSuccess {String} Legacy_Quote_Posts.source Full HTML for the source of the quote Example: <a href="...">Steve Jobs</a>.
 * @apiSuccess {Array} Legacy_Link_Posts Link posts containing these fields:
 * @apiSuccess {String} Legacy_Link_Posts.title The title of the page the link points to.
 * @apiSuccess {String} Legacy_Link_Posts.description A user-supplied description.
 * @apiSuccess {String} Legacy_Link_Posts.url The link!
 * @apiSuccess {String} Legacy_Link_Posts.link_author The author of the article the link points to.
 * @apiSuccess {String} Legacy_Link_Posts.excerpt An excerpt from the article the link points to.
 * @apiSuccess {String} Legacy_Link_Posts.publisher The publisher of the article the link points to.
 * @apiSuccess {Array} Legacy_Link_Posts.photos Photo objects with properties:
 * @apiSuccess {String} Legacy_Link_Posts.photos.caption The thumbnail caption.
 * @apiSuccess {Object} Legacy_Link_Posts.photos.original_size The photo at its original size.
 * @apiSuccess {Number} Legacy_Link_Posts.photos.width Width of the image, in pixels.
 * @apiSuccess {Number} Legacy_Link_Posts.photos.height Height of the image, in pixels.
 * @apiSuccess {String} Legacy_Link_Posts.photos.url Location of the image file (either a JPG, GIF, or PNG).
 * @apiSuccess {Array} Legacy_Link_Posts.photos.alt_sizes Alternate photo sizes, each with the same properties as above..
 * @apiSuccess {Array} Legacy_Chat_Posts Link posts containing these fields:
 * @apiSuccess {String} Legacy_Chat_Posts.title The optional title of the post.
 * @apiSuccess {String} Legacy_Chat_Posts.body The full chat body.
 * @apiSuccess {Array} Legacy_Audio_Posts Link posts containing these fields:
 * @apiSuccess {String} Legacy_Audio_Posts.caption The user-supplied caption.
 * @apiSuccess {String} [Legacy_Audio_Posts.external_urL] The URL of the site that hosts the audio file (not Tumblr).
 * @apiSuccess {String} [Legacy_Audio_Posts.data] An audio file, limit 10MB.
 * @apiSuccess {String} [Legacy_Audio_Posts.artist] The audio file's ID3 artist value.
 * @apiSuccess {String} [Legacy_Audio_Posts.album] The audio file's ID3 album value.
 * @apiSuccess {String} [Legacy_Audio_Posts.track_name] The audio file's ID3 title value.
 * @apiSuccess {Number} [Legacy_Audio_Posts.track_number] The audio file's ID3 track value.
 * @apiSuccess {Array} [Legacy_Video_Posts] Link posts containing these fields:
 * @apiSuccess {String} [Legacy_Video_Posts.caption] The user-supplied caption.
 * @apiSuccess {String} [Legacy_Video_Posts.data] String (URL-encoded binary contents).
 * @apiSuccess {String} [Legacy_Video_Posts.embed] HTML embed code for the video or a URI to the video. If you provide an unsupported service's URI you may receive a 400 response.	.
 * @apiSuccess {Array} [Legacy_Answer_Posts] Link posts containing these fields:
 * @apiSuccess {String} [Legacy_Answer_Posts.asking_name] The blog that sent this ask, or answered it if it was privately answered.
 * @apiSuccess {String} [Legacy_Answer_Posts.asking_url] The blog URL that sent this ask, or answered it if it was privately answered.
 * @apiSuccess {String} [Legacy_Answer_Posts.question] The question being asked.
 * @apiSuccess {String} [Legacy_Answer_Posts.answer] The answer given.
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
===================== ///////// <---------> Follow a blog <---------> ///////// =====================> 
===================== ///////// <---------> ============= <---------> ///////// =====================> 
*/

/**
 * @api {post} /blog/follow Follow a blog
 * @apiName followBlogPost
 * @apiGroup Blog
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apidescription Follow a blog
 * @apiVersion 0.0.0
 *
 * @apiParam {String} Token User's Secret Code.
 * @apiParam {String} following-blog-id Primary blog ID.
 * @apiParam {String} followed-blog-id ID of the followed blog.
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
 *                       "message":"Following Blog Success"
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
===================== ///////// <---------> Unfollow a blog <---------> ///////// =====================> 
===================== ///////// <---------> ============= <---------> ///////// =====================> 
*/

/**
 * @api {post} /blog/unfollow Unfollow a blog
 * @apiName unfollowBlogPost
 * @apiGroup Blog
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apidescription Unfollow a blog
 * @apiVersion 0.0.0
 *
 * @apiParam {String} Token User's Secret Code.
 * @apiParam {String} following-blog-id Primary blog ID.
 * @apiParam {String} unfollowed-blog-id ID of the followed blog.
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
 *                       "message":"Unfollowing Blog Success"
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
===================== ///////// <---------> Post tag filters <---------> ///////// =====================> 
===================== ///////// <---------> ============= <---------> ///////// =====================> 
*/

/**
 * @api {post} /blog/pfiltered_tags Post tag filters
 * @apiName postTagFilters
 * @apiGroup Blog
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apidescription Post tag filters
 * @apiVersion 0.0.0
 *
 * @apiParam {String} Token User's Secret Code.
 * @apiParam {String} blog-id Blog ID to filter by tags.
 * @apiParam {Array} filtered_tags One or more than one tag string to add to your list of filters.
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
 *                       "message":"Filtering Success"
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
===================== ///////// <---------> Get tag filters <---------> ///////// =====================> 
===================== ///////// <---------> ============= <---------> ///////// =====================> 
*/

/**
 * @api {get} /blog/gfiltered_tags Get tag filters
 * @apiName getTagFilters
 * @apiGroup Blog
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apidescription Get tag filters
 * @apiVersion 0.0.0
 *
 * @apiParam {String} Token User's Secret Code.
 * @apiParam {String} blog-id Blog ID to filter by tags.
 * @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "meta": {
 *                       "status": 200,
 *                       "msg": "OK"
 *                  },
 * 
 *          "response":{
 *                       "data":"[Filtered Tags]"
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
===================== ///////// <---------> Delete tag filters <---------> ///////// =====================> 
===================== ///////// <---------> ============= <---------> ///////// =====================> 
*/

/**
 * @api {delete} /blog/dfiltered_tags Delete tag filters
 * @apiName deleteTagFilters
 * @apiGroup Blog
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apidescription Delete tag filters
 * @apiVersion 0.0.0
 *
 * @apiParam {String} Token User's Secret Code.
 * @apiParam {String} blog-id Blog ID to filter by tags.
 * @apiParam {String} tag Tag to stop filtering.
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
 *                       "message":"Success"
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
===================== ///////// <---------> Post content filters <---------> ///////// =====================> 
===================== ///////// <---------> ============= <---------> ///////// =====================> 
*/

/**
 * @api {post} /blog/pfiltered_content Post content filters
 * @apiName postContentFilters
 * @apiGroup Blog
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apidescription Post content filters
 * @apiVersion 0.0.0
 *
 * @apiParam {String} Token User's Secret Code.
 * @apiParam {String} blog-id Blog ID to filter by content.
 * @apiParam {Array} filtered_content One or more than one string to add to your list of filters.
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
 *                       "message":"Success"
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
===================== ///////// <---------> Get content filters <---------> ///////// =====================> 
===================== ///////// <---------> ============= <---------> ///////// =====================> 
*/

/**
 * @api {get} /blog/:blog-id/gfiltered_tags Get content filters
 * @apiName getContentFilters
 * @apiGroup Blog
 * @apiPermission User, Admin, Super_Admin
 * 
 * 
 * @apidescription Get content filters
 * @apiVersion 0.0.0
 *
 * @apiParam {String} Token User's Secret Code.
 * @apiParam {String} blog-id Blog ID to filter by content.
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
 *                       "data":"[Filtered Tags]"
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

/*=================== End =====================*/


/*
===================== ///////// <---------> ============= <---------> ///////// =====================> 
===================== ///////// <---------> Delete content filters <---------> ///////// =====================> 
===================== ///////// <---------> ============= <---------> ///////// =====================> 
*/

/**
 * @api {delete} /blog/dfiltered_tags Delete content filters
 * @apiName deleteContentFilters
 * @apiGroup Blog
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apidescription Delete tag filters
 * @apiVersion 0.0.0
 *
 * @apiParam {String} Token User's Secret Code.
 * @apiParam {String} blog-id Blog ID to filter by content.
 * @apiParam {String} filtered_content Content filter string to remove.
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
 *                       "message":"Success"
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
===================== ///////// <---------> Create a new blog <---------> ///////// =====================> 
===================== ///////// <---------> ============= <---------> ///////// =====================> 
*/

/**
 * @api {post} /new/blog/ Create a new blog.
 * 
 * @apiName newBlog
 * @apiGroup Blog
 * @apiVersion 0.0.0 
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apiParam {String} Token User's Secret Code.
 * @apiParam {String} Title Blog's Title
 * @apiParam {String} Url Blog's Url
 * @apiParam {String} [Password] Blog's password
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
 *                       "message": "Blog Created Successfully"
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
===================== ///////// <---------> Adding Members  <---------> ///////// =====================> 
===================== ///////// <---------> ============= <---------> ///////// =====================> 
*/
/**
 * @api {post} /members/ Adding members.
 * 
 * @apiName addMember
 * @apiGroup Blog
 * @apiVersion 0.0.0 
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apiParam {String} Token User's Secret Code.
 * @apiParam {String} Member Member's email
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
 *                        "message": "Invitation Sent Via Email"
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
===================== ///////// <---------> Join Group  <---------> ///////// =====================> 
===================== ///////// <---------> ============= <---------> ///////// =====================> 
*/

/**
 * @api {post} /join/:Token Join Group.
 * 
 * @apiName joinGroup
 * @apiGroup Blog
 * @apiVersion 0.0.0 
 * @apiPermission User, Admin, Super_Admin
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
 *                        "message": "Member Added Successfully"
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
===================== ///////// <--------->  Remove Member  <---------> ///////// =====================> 
===================== ///////// <---------> ============= <---------> ///////// =====================> 
*/

/**
 * @api {delete} /members/ Remove member.
 * 
 * @apiName removeMember
 * @apiGroup Blog
 * @apiVersion 0.0.0 
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apiParam {String} Token User's token
 * @apiParam {String} Member Blog's Id
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
 *                        "message": "Blog Removed Successfully"
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
===================== ///////// <--------->  Promote To Admin  <---------> ///////// =====================> 
===================== ///////// <---------> ============= <---------> ///////// =====================> 
*/

/**
 * @api {put} /members/ Promote to Admin.
 * 
 * @apiName promoteBlog
 * @apiGroup Blog
 * @apiVersion 0.0.0 
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apiParam {String} Token User's token
 * @apiParam {String} Member Blog's Id
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
 *                        "message": "Blog Promoted To Admin Successfully"
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
===================== ///////// <--------->   Leave This Blog <---------> ///////// =====================> 
===================== ///////// <---------> ============= <---------> ///////// =====================> 
*/
/**
 * @api {delete} /members/leave/ Leave this blog.
 * 
 * @apiName leaveBlog
 * @apiGroup Blog
 * @apiVersion 0.0.0 
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apiParam {String} Token User's token
 * @apiParam {String} Blog's group Id
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
 *                        "message": "Blog Leave Group Successfully"
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
===================== ///////// <--------->   Get Blog Settings <---------> ///////// =====================> 
===================== ///////// <---------> ============= <---------> ///////// =====================> 
*/

/**
 * @api {get} /blog/appearance/ Get Blog Settings.
 * 
 * @apiName blogSettings
 * @apiGroup Blog
 * @apiVersion 0.0.0 
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apiParam {String} Token User's token
 * @apiParam {String} Id Blog's Id
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
 *                       "message": "{ Object Contains Blog Settings }"
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
===================== ///////// <--------->   Edit Blog Settings  <---------> ///////// =====================> 
===================== ///////// <---------> ============= <---------> ///////// =====================> 
*/

/**
 * @api {put} /blog/appearance/ Edit Blog Settings.
 * 
 * @apiName eidtBlogSettings
 * @apiGroup Blog
 * @apiVersion 0.0.0 
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apiParam {String} Token User's token
 * @apiParam {String} Id Blog's Id
 * @apiParam {String} New_Settings Blog's new settings
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
 *                       "message": "Settings updated successfully"
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
===================== ///////// <--------->   Get Blog Theme  <---------> ///////// =====================> 
===================== ///////// <---------> ============= <---------> ///////// =====================> 
*/

/**
 * @api {get} /blog/theme/ Get Blog's Theme.
 * 
 * @apiName blogTheme
 * @apiGroup Blog
 * @apiVersion 0.0.0 
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apiParam {String} Token User's token
 * @apiParam {String} Id Blog's Id
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
 *                       "message": "Object Contains Blog Theme"
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
===================== ///////// <--------->  Edit Blog Theme   <---------> ///////// =====================> 
===================== ///////// <---------> ============= <---------> ///////// =====================> 
*/

/**
 * @api {put} /blog/theme/ Edit Blog Theme.
 * 
 * @apiName eidtBlogTheme
 * @apiGroup Blog
 * @apiVersion 0.0.0 
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apiParam {String} Token User's token
 * @apiParam {String} Id Blog's Id
 * @apiParam {String} New_Theme Blog's new theme
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
 *                       "message": "Theme updated successfully"
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
===================================================================================================
===================================================================================================
===================================================================================================
===================================================================================================
===================================================================================================
===================================================================================================
===================================================================================================
*/











































// --------------------------------- Inbox --------------------------------------


/**
 * @api {get} /blog/:blog_id/inbox Retrieve Inbox Posts
 * @apiName retrieveInboxPosts
 * @apiGroup Inbox
 * @apiSampleRequest api.tumblr.com/blog/{blog-identifier}/:blog_id/inbox
 * @apiPermission User, admin, super admin
 * @apidescription gets all the submission and ask posts in a page arranged according to time
 * @apiVersion 0.50.1
 * 
 * @apiParam {String} blog_id The ID of the blog has the post
 * @apiParam {String} token User's token
 * 
 * @apiExample Example usage:
 * curl -i https://localhost/blog/335/inbox
 * 
 * @apiSuccess {Post[]} Submission array of submission posts
 * @apiSuccess {Post[]} Ask array of ask posts
 * 
 * 
 * @apiError UserNotFound No such a user with this id is found
 * @apiError BlogNotFound No such a blog with this id is found
 * @apiError BadRequest Can't access the inbox page
 * @apiError Unauthorized you must log in first
 * @apiErrorExample Response Error:
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "error":"No Access Right"
 *      }
 *      HTTP/1.1 401 Unauthorized
 *      {
 *          "error":"No Access Right"
 *      }
 */


/**
 * @api {delete} /blog/:blog_id/inbox/delete Delete All Messages
 * @apiName deleteInboxPosts
 * @apiGroup Inbox
 * @apiSampleRequest api.tumblr.com/blog/:blog_id/inbox/delete
 * @apiPermission User, admin, super admin
 * @apidescription remove all posts in the inbox page
 * @apiVersion 0.50.1
 * 
 * @apiParam {String} blog_id The ID of the blog has the post
 * @apiParam {String} token User's token
 * 
 * @apiExample Example usage:
 * curl -i https://localhost/blog/335/inbox/delete
 * 
 * @apiSuccess {Boolean} removed true if we removed succesfully message
 * 
 * @apiError UserNotFound No such a user with this id is found
 * @apiError BlogNotFound No such a blog with this id is found
 * @apiError BadRequest Can't delete messages, maybe no messages exists or it's one message
 * @apiError Unauthorized you must log in first
 * @apiErrorExample Response Error:
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "error":"No Access Right"
 *      }
 *      HTTP/1.1 401 Unauthorized
 *      {
 *          "error":"No Access Right"
 *      }
 */

// --------------------------------- Submission --------------------------------------

/**
 * @api {post} /blog/:blog_id/submit Make Submission Posts
 * @apiName makeSubmissionPosts
 * @apiGroup Submission
 * @apiSampleRequest api.tumblr.com/blog/:blog_id/submit
 * @apiPermission Guest,User, admin, super admin
 * @apidescription Submit a post on a blogs dashboard, take permission to post
 * @apiVersion 0.50.1
 * 
 * @apiParam {String} blog_id The ID of the blog I want to submit at
 * @apiParam {String} token User's token
 * @apiParam {String} type The type of post. One of the following: text, photo, quote, link, video
 * @apiParam {String[]} tags Tags applied to the post
 * @apiParam {String} title of the post
 * @apiParam {String} text of the post
 * 
 * @apiExample Example usage:
 * curl -i https://localhost/blog/335/submit
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
 * @apiError UserNotFound No such a user with this id is found
 * @apiError BlogNotFound No such a blog with this id is found
 * @apiError BadRequest Can't access the sumbission page
 * @apiErrorExample Response Error:
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "error":"No Access Right"
 *      }
 */


/**
 * @api {delete} /blog/:blog_id/inbox/delete_submit Delete Submission Posts
 * @apiName deleteSubmissionPosts
 * @apiGroup Submission
 * @apiSampleRequest api.tumblr.com/blog/:blog_id/inbox/delete_submit
 * @apiPermission User, admin, super admin
 * @apidescription  Delete Submission Posts from inbox page
 * @apiVersion 0.50.1
 * 
 * @apiParam {String} blog_id The ID of the blog has the submission
 * @apiParam {String} token User's token
 * 
 * @apiExample Example usage:
 * curl -i https://localhost/blog/335/inbox/delete_submit
 * 
 * @apiSuccess {boolean} is_deleted true if we removed succesfully the submission post
 *  
 * @apiError UserNotFound No such a user with this id is found
 * @apiError BlogNotFound No such a blog with this id is found
 * @apiError BadRequest Can't delete submission post, maybe arleady deleted/doesn't exist
 * @apiError Unauthorized you must log in first
 * @apiErrorExample Response Error:
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "error":"No Access Right"
 *      }
 *      HTTP/1.1 401 Unauthorized
 *      {
 *          "error":"No Access Right"
 *      }
 */


/**
 * @api {put} /blog/:blog_id/inbox/edit_submit Edit Submission Posts
 * @apiName editSubmissionPosts
 * @apiGroup Submission
 * @apiSampleRequest api.tumblr.com/blog/:blog_id/inbox/edit_submit
 * @apiPermission User, admin, super admin
 * @apidescription edit text in the submission post, only can done by the blog will have this post on their dashboard
 * @apiVersion 0.50.1
 * 
 * @apiParam {String} blog_id The ID of the blog having the submitted post
 * @apiParam {String} token User's token
 * @apiParam {String[]} tags Tags applied to the post
 * @apiParam {String} title of the post
 * @apiParam {String} text of the post
 * 
 * @apiExample Example usage:
 * curl -i https://localhost/blog/335/inbox/edit_submit
 * 
 * @apiSuccess {post} the sumbission post updated 
 *  
 * @apiError UserNotFound No such a user with this id is found
 * @apiError BlogNotFound No such a blog with this id is found
 * @apiError BadRequest Can't edit post, maybe deleted
 * @apiError Unauthorized you must log in first
 * @apiErrorExample Response Error:
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "error":"No Access Right"
 *      }
 *      HTTP/1.1 401 Unauthorized
 *      {
 *          "error":"No Access Right"
 *      }
 */


/**
 * @api {post} /blog/:blog_id/inbox/post_submit Post Submission Posts
 * @apiName postSubmissionPosts
 * @apiGroup Submission
 * @apiSampleRequest api.tumblr.com/blog/:blog_id/inbox/post_submit
 * @apiPermission User, admin, super admin
 * @apidescription posts the submission posts in the dashboard of the blog
 * @apiVersion 0.50.1
 * 
 * @apiParam {String} blog_id The ID of the blog has the post
 * @apiParam {String} token User's token
 * 
 * @apiExample Example usage:
 * curl -i https://localhost/blog/335/inbox/post_submit
 * 
 * @apiSuccess {boolean} posted return true when it's successfullay posyed in the dashboard and removed from inbox
 * 
 * @apiError UserNotFound No such a user with this id is found
 * @apiError BlogNotFound No such a blog with this id is found
 * @apiError BadRequest Can't post, maybe arleady posted or doesn't exist post
 * @apiError Unauthorized you must log in first
 * @apiErrorExample Response Error:
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "error":"No Access Right"
 *      }
 *      HTTP/1.1 401 Unauthorized
 *      {
 *          "error":"No Access Right"
 *      }
 */


/**
 * @api {put} /blog/:blog_id/inbox/queue_submit Queue Submission Posts
 * @apiName queueSubmissionPosts
 * @apiGroup Submission
 * @apiSampleRequest api.tumblr.com/blog/:blog_id/inbox/queue_submit
 * @apiPermission User, admin, super admin
 * @apidescription put the submitted post with the queue posts
 * @apiVersion 0.50.1
 * 
 * @apiParam {String} blog_id The ID of the bloghas the post
 * @apiParam {String} token User's token
 * 
 * @apiExample Example usage:
 * curl -i https://localhost/blog/335/inbox/queue_submit
 * 
 * @apiSuccess {boolean} queued return true when post is changed from submission post to queue post
 * 
 *  
 * @apiError UserNotFound No such a user with this id is found
 * @apiError BlogNotFound No such a blog with this id is found
 * @apiError BadRequest Can't put in queue, maybe doesn't exist
 * @apiError Unauthorized you must log in first
 * @apiErrorExample Response Error:
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "error":"No Access Right"
 *      }
 *      HTTP/1.1 401 Unauthorized
 *      {
 *          "error":"No Access Right"
 *      }
 */



























































// --------------------------------- Ask --------------------------------------








// --------------------------------- Settings -------------------------------------------------

/**
 * @api {put} user/:user-id/settings/privacy Update privacy settings
 * @apiName updateSettingsPrivacy
 * @apiGroup settings
 * @apiSampleRequest api.tumblr.com/user/:user-id/settings/privacy
 * @apiPermission User, admin, super admin
 * 
 * @apiExample Example usage:
 * curl -i https://localhost/settings/335/privacy
 * 
 * @apidescription Update privacy settings
 * @apiVersion 0.50.1
 *
 * @apiParam {String} token User's token.
 * @apiParam {Number} id User ID.
 * @apiParam {Boolean} active=1 Let others see that you're active.
 * @apiParam {Boolean} improved_search=1 Let Tumblr use your search history to help provide more relevant recommendations.
 *
 * @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "message": "Settings updated successfully"
 *      }
 * 
 * @apiErrorExample Response Error:
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "error":"No Access Right"
 *      }
 *      HTTP/1.1 401 Unauthorized
 *      {
 *          "error":"No Access Right"
 */

/**
 * @api {put} user/:user-id/settings/notifications Update notifications settings
 * @apiName updateSettingsNotifications
 * @apiGroup settings
 * @apiSampleRequest api.tumblr.com/user/:user-id/settings/notifications
 * @apiPermission User, admin, super admin
 * 
 * @apiExample Example usage:
 * curl -i https://localhost/settings/335/notifications
 * 
 * @apidescription Update notifications settings
 * @apiVersion 0.50.1
 *
 * @apiParam {String} token User's token.
 * @apiParam {Number} id User ID.
 * @apiParam {Boolean} new_followers=1 Email you if you have a new follower.
 * @apiParam {Boolean} new_replies=0 Email you if you have a new reply.
 * @apiParam {Boolean} mentions=1 Email you if you have a new mention.
 * @apiParam {Boolean} answered_asks=1 Email you if you have a new answered ask.
 * @apiParam {String} notifications_from Notify you either from everyone or from people you follow or from nobody.
 * @apiParam {Boolean} tumblr_news Email you about trending topics, interesting blogs, whatever.
 * @apiParam {Boolean} conversational_notifications Notifications about posts you're participating in.
 *
 * @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "message": "Settings updated successfully"
 *      }
 * 
 * @apiErrorExample Response Error:
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "error":"No Access Right"
 *      }
 *      HTTP/1.1 401 Unauthorized
 *      {
 *          "error":"No Access Right"
 */

/**
 * @api {put} user/:user-id/settings/dashboard Update dashboard settings
 * @apiName updateSettingsDashboard
 * @apiGroup settings
 * @apiSampleRequest api.tumblr.com/user/:user-id/settings/dashboard
 * @apiPermission User, admin, super admin
 * 
 * @apiExample Example usage:
 * curl -i https://localhost/settings/335/dashboard
 * 
 * @apidescription Update dashboard settings
 * @apiVersion 0.50.1
 *
 * @apiParam {String} token User's token.
 * @apiParam {Number} id User ID.
 * @apiParam {Boolean} sounds=1 Messaging sounds.
 * @apiParam {Boolean} best_stuff_first=1 This switch puts stuff you'll like at the top of your dash.
 * @apiParam {Boolean} include_stuff_in_your_orbit=1 Posts that your favorite people liked.
 * @apiParam {Boolean} enable_colorized_tags=1 Colorize matching tags on the dashboard. Colorized tags add a nice touch to your dashboard but they might be harder to read.
 * @apiParam {Boolean} include_followed_tag_posts=1 Posts from the tags you follow.
 *
 * @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "message": "Settings updated successfully"
 *      }
 * 
 * @apiErrorExample Response Error:
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "error":"No Access Right"
 *      }
 *      HTTP/1.1 401 Unauthorized
 *      {
 *          "error":"No Access Right"
 */

/**
 * @api {put} user/:user-id/settings/account Update account settings
 * @apiName updateSettingsAccount
 * @apiGroup settings
 * @apiSampleRequest api.tumblr.com/user/:user-id/settings/account
 * @apiPermission User, admin, super admin
 * 
 * @apiExample Example usage:
 * curl -i https://localhost/settings/335/account
 * 
 * @apidescription Update account settings
 * @apiVersion 0.50.1
 *
 * @apiParam {String} token User's token.
 * @apiParam {Number} id User ID.
 * @apiParam {String} login_options Login services.
 * @apiParam {Boolean} find_blog_with_email Let people find your blogs through this address.
 * @apiParam {Boolean} email_me_about_account_activity You will receive an email when someone logs into your account or a new app is authorized.
 * @apiParam {Array} filtered_tags Tag filtering hides posts with certain #tags from your dashboard and in search.
 * @apiParam {Array} filtered_post_content Post content filtering searches the entire post for instances of your filtered word or phrase, not just the tags.
 * @apiParam {String} location User location.
 * @apiParam {String} country User country.
 * @apiParam {String} browser Used browser.
 * @apiParam {String} last_seen Last seen time.
 * @apiParam {String} language User language.
 *
 * @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "message": "Settings updated successfully"
 *      }
 * 
 * @apiErrorExample Response Error:
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "error":"No Access Right"
 *      }
 *      HTTP/1.1 401 Unauthorized
 *      {
 *          "error":"No Access Right"
 */






























































/*
===================================================================================================
===================================================================================================
===================================================================================================
===================================================================================================
===================================================================================================
===================================================================================================
===================================================================================================
*/