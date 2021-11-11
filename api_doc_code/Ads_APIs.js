//=====================================================================================================
//=====================================================================================================
//=====================================================================================================
/*
===================== ///////// <---------> ============== <---------> ///////// =====================> 
===================== ///////// <---------> Ads's Methods <---------> ///////// =====================> 
===================== ///////// <---------> ============== <---------> ///////// =====================> 
*/
//=====================================================================================================
//=====================================================================================================
//=====================================================================================================

/*
===================== ///////// <---------> ============= <---------> ///////// =====================> 
===================== ///////// <---------> Retrieve Ads <---------> ///////// =====================> 
===================== ///////// <---------> ============= <---------> ///////// =====================> 
*/

/**
 * @api {get} /:user_id/getAds/ Retrieve Ads
 * @apiName getAds
 * @apiGroup Ads
 *
 * @apiPermission User, Admin, Super_Admin
 * @apidescription Sponsored Ads appears in Dashboard/Explore pages at the right bottom
 * @apiVersion 0.0.0
 *
 * @apiSampleRequest api.tumblr.com/:user_id/getAds  \-H "Authorization: Bearer < YOUR_API_TOKEN>"
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
 *                       "message": "{Object} ad ad object has all its aspects"
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
 * 
 */

/*=================== End =====================*/