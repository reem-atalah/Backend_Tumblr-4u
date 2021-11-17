//=====================================================================================================
//=====================================================================================================
//=====================================================================================================
/*
===================== ///////// <---------> ============== <---------> ///////// =====================> 
===================== ///////// <---------> Settings's Methods <---------> ///////// =====================> 
===================== ///////// <---------> ============== <---------> ///////// =====================> 
*/
//=====================================================================================================
//=====================================================================================================
//=====================================================================================================

/*
===================== ///////// <---------> ============= <---------> ///////// =====================> 
===================== ///////// <---------> Update privacy settings <---------> ///////// =====================> 
===================== ///////// <---------> ============= <---------> ///////// =====================> 
*/

/**
 * @api {put} user/settings/privacy Update privacy settings
 * @apiName updateSettingsPrivacy
 * @apiGroup settings
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apidescription Update privacy settings
 * @apiVersion 0.0.0
 *
 * @apiParam {String} Token User's Secret Code.
 * @apiParam {String} id User ID.
 * @apiParam {Boolean} active=1 Let others see that you're active.
 * @apiParam {Boolean} improved_search=1 Let Tumblr use your search history to help provide more relevant recommendations.
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
===================== ///////// <---------> Update notifications settings <---------> ///////// =====================> 
===================== ///////// <---------> ============= <---------> ///////// =====================> 
*/

/**
 * @api {put} user/settings/notifications Update notifications settings
 * @apiName updateSettingsNotifications
 * @apiGroup settings
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apidescription Update notifications settings
 * @apiVersion 0.0.0
 *
 * @apiParam {String} Token User's Secret Code.
 * @apiParam {String} id User ID.
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
===================== ///////// <---------> Update dashboard settings <---------> ///////// =====================> 
===================== ///////// <---------> ============= <---------> ///////// =====================> 
*/

/**
 * @api {put} user/settings/dashboard Update dashboard settings
 * @apiName updateSettingsDashboard
 * @apiGroup settings
 * @apiPermission User, Admin, Super_Admin
 * 
 * 
 * @apidescription Update dashboard settings
 * @apiVersion 0.0.0
 *
 * @apiParam {String} Token User's Secret Code.
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
===================== ///////// <---------> Update account settings <---------> ///////// =====================> 
===================== ///////// <---------> ============= <---------> ///////// =====================> 
*/

/**
 * @api {put} user/:user-id/settings/account Update account settings
 * @apiName updateSettingsAccount
 * @apiGroup settings
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apidescription Update account settings
 * @apiVersion 0.0.0
 *
 * @apiParam {String} Token User's Secret Code.
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