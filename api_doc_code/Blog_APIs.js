// =====================================================================================================
// =====================================================================================================
// =====================================================================================================
/*
===================== ///////// <---------> ============== <---------> ///////// =====================>
===================== ///////// <---------> Blog's Methods <---------> ///////// =====================>
===================== ///////// <---------> ============== <---------> ///////// =====================>
*/
// =====================================================================================================
// =====================================================================================================
// =====================================================================================================

/*
===================== ///////// <---------> ============= <---------> ///////// =====================>
===================== ///////// <---------> Delete Blog <---------> ///////// =====================>
===================== ///////// <---------> ============= <---------> ///////// =====================>
*/

/**
 * @api {post} user/delete/blog      deletes a blog
 * @apiName  deleteBlog
 * @apiGroup Blog
 *
 * @apiPermission User, Admin, Super_Admin
 * @apidescription delete a blog
 * @apiVersion 0.0.0
 *
 * @apiHeader {String} Token User's Secret Code.
 * @apiParam {String} blogId The ID of the blog wanted to be deleted
 * 
 * @apiSuccess {Object} The deleted blog
 * @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *   "meta": {
 *       "status": 200,
 *       "msg": "OK"
 *  },
 *   "res": {
 *       "message": "Blog Deleted Successfully",
 *       "data": blog Objcet
 *  }
 *}
 * @apiErrorExample Response Error:
 *      HTTP/1.1 400 BAD REQUEST
 *     {
 *   "meta": {
 *       "status": 404,
 *       "msg": "NOT FOUND"
 *   },
 *   "res": {
 *      "message": "Blog Not FOUND",
 *       "data": ""
 *   }
 *}
 *      HTTP/1.1 401 Unauthorized
 *      {
 *          "error": "User Is Unauthorized"
 *      }
 */

/* =================== End =====================*/

/*
===================== ///////// <---------> ============= <---------> ///////// =====================>
===================== ///////// <---------> Retrieve Blog information <---------> ///////// =====================>
===================== ///////// <---------> ============= <---------> ///////// =====================>
*/


/**
 * @api {get} /blog/view/:blogId Retrieve Blog information
 * @apiName retrieveBlog
 * @apiGroup Blog
 * @apiPermission User, Admin, Super_Admin
 * @apidescription retrieve all information about the blog
 * @apiVersion 0.0.0
 *
 * @apiHeader {String} Token User's Secret Code.
 * @apiParam {String} blogId Blog's Unique Name.
 * 
 * @apiSuccess {Object} The Blog
 * 
 *@apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "meta": {
 *                       "status": 200,
 *                       "msg": "OK"
 *                  },
 *
 *        "res": {
 *                        "message": "Blog Retrieved Successfuly",
 *                       "data":"{Object Contains Blog Info}"
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

/* =================== End =====================*/

/*
===================== ///////// <---------> ============= <---------> ///////// =====================>
===================== ///////// <---------> Block a Blog <---------> ///////// =====================>
===================== ///////// <---------> ============= <---------> ///////// =====================>
*/

/**
 * @api {post} /blog/block/:blogId Block a Blog
 * @apiName blockBlog
 * @apiGroup Blog
 * @apiPermission User, Admin, Super_Admin
 * @apidescription blocks a blog so you can't see the blog or its posts
 * @apiVersion 0.0.0
 *
 * @apiHeader {String} Token User's Secret Code.
 * @apiParam {String} blogId  Id of the blocking blog
 * @apiParam {String} blockedBlogId Id if the blog to be blocked
 * 
 * @apiSuccess {Object} The blocked blog
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
 *                       "message":"Blog Blocked Successfully",
 *
 *                       "data":"{Object Contains Blog Info}"
 *
 *                     }
 *
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


/* =================== End =====================*/


/*
===================== ///////// <---------> ============= <---------> ///////// =====================>
===================== ///////// <---------> Delete a Block <---------> ///////// =====================>
===================== ///////// <---------> ============= <---------> ///////// =====================>
*/

/**
 * @api {post} /blog/unblock/:blogId  Unblocks a blog
 * @apiName unblockBlog
 * @apiGroup Blog
 * @apiPermission User, Admin, Super_Admin
 * @apidescription removes a block from a blog
 * @apiVersion 0.0.0
 * @apiHeader {String} Token User's Secret Code.
 * @apiParam {String} blogId Id of the requesting Blog
 * @apiParam {String} unblockedBlogId Id of the blog to be unblocked
 * 
 * @apiSuccess {Object} The unblocked blog
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
 *                       "message":"Blog Unblocked Successfully",
 *                    "data":"{Object Contains Blog Info}"
 *
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

/* =================== End =====================*/


/*
===================== ///////// <---------> ============= <---------> ///////// =====================>
===================== ///////// <---------> Follow a blog <---------> ///////// =====================>
===================== ///////// <---------> ============= <---------> ///////// =====================>
*/

/**
 * @api {post} /follow User follows a blog
 * @apiName followBlog
 * @apiGroup Blog
 * @apiPermission User, Admin, Super_Admin
 *
 * @apidescription Follow a blog
 * @apiVersion 0.0.0
 *
 * @apiHeader {String} Token User's Secret Code.
 * @apiParam {String} blogId Id of the followed blog.
 * @apiSuccess {Object} The followed blog
 * @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "meta": {
 *                       "status": 200,
 *                       "msg": "OK"
 *                  },
 *
 *          "response":{
 *                       "message":"Blog Followed Successfully",
 *                     "data":"{Object Contains Blog Info}"
 *
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


/* =================== End =====================*/


/*
===================== ///////// <---------> ============= <---------> ///////// =====================>
===================== ///////// <---------> Unfollow a blog <---------> ///////// =====================>
===================== ///////// <---------> ============= <---------> ///////// =====================>
*/

/**
 * @api {post} /unfollow   Unfollow a blog
 * @apiName unfollowBlogPost
 * @apiGroup Blog
 * @apiPermission User, Admin, Super_Admin
 *
 * @apidescription Unfollow a blog
 * @apiVersion 0.0.0
 *
 * @apiHeader {String} Token User's Secret Code.
 * @apiParam {String} blogId Id of the unfollowed blog.
 * 
 * @apiSuccess {Object} The unfollowed blog
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
 *    "message":"Blog Unfollowed Successfully",
 *                     "data":"{Object Contains Blog Info}"
 *
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


/* =================== End =====================*/
/*
===================== ///////// <---------> ============= <---------> ///////// =====================>
===================== ///////// <---------> Follow a blog <---------> ///////// =====================>
===================== ///////// <---------> ============= <---------> ///////// =====================>
*/

/**
 * @api {post} /doesFollow check if a user follows a blog
 * @apiName doesFollow
 * @apiGroup Blog
 * @apiPermission User, Admin, Super_Admin
 *
 * @apidescription Follow a blog
 * @apiVersion 0.0.0
 *
 * @apiHeader {String} Token User's Secret Code.
 * @apiParam {String} blogId Id of the followed blog.
 * @apiSuccess {Object} The user
 * @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "meta": {
 *                       "status": 200,
 *                       "msg": "OK"
 *                  },
 *
 *          "response":{
 *                       "message":"",
 *                     "data":"{Object Contains User Info}"
 *
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
/* =================== End =====================*/

/*
===================== ///////// <---------> ============= <---------> ///////// =====================>
===================== ///////// <---------> Create a new blog <---------> ///////// =====================>
===================== ///////// <---------> ============= <---------> ///////// =====================>
*/

/**
 * @api {post} user/new/blog  Create a new blog.
 *
 * @apiName newBlog
 * @apiGroup Blog
 * @apiVersion 0.0.0
 * @apiPermission User, Admin, Super_Admin
 *
 * @apiHeader {String} Token User's Secret Code.
 * @apiParam {String} Title Blog's Title
 * @apiParam {String} name Name of the Blog and must be unique
 * @apiparam {Boolean} privacy  Wether the blog is private or not
 * @apiParam {String} [Password] Blog's password if it's private
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
 *                       "message": "Blog Created Successfully",
 *                     "data":"{Object Contains Blog Info}"
 *
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

/* =================== End =====================*/
/*
===================== ///////// <---------> ============= <---------> ///////// =====================>
===================== ///////// <--------->   Edit Blog  <---------> ///////// =====================>
===================== ///////// <---------> ============= <---------> ///////// =====================>
*/

/**
 * @api {post} /blog/edit/:blogId Edit Blog Settings.
 *
 * @apiName eidtBlog
 * @apiGroup Blog
 * @apiVersion 0.0.0
 * @apiPermission User, Admin, Super_Admin
 *
 * @apiHeader {String} Token User's Secret Code.
 * @apiparam {String} blogId  - id of the blog
 * @apiparam {String} [title]
 * @apiparam {String} [accent]
 * @apiparam {String} [name]
 * @apiparam {String} [password]
 * @apiparam {String} [headerImage]
 * @apiparam {String} [background]
 * @apiparam {String} [avatar]
 * @apiparam {Boolean} [showAvatar]
 * @apiparam {Boolean} [showTitle]
 * @apiparam {String} [theme]
 * @apiparam {String} [description]
 * @apiparam {Boolean} [showDescription]
 * @apiparam {Boolean} [showHeaderImage]
 * @apiparam {Boolean} [stretchHeaderImage]
 * @apiSuccess {Object} The blog after updating
 * @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "meta": {
 *                       "status": 200,
 *                       "msg": "OK"
 *                  },
 *
 *          "response":{
 *                       "message": "Blog Editted successfully",
 *                       "data":"{Object Contains Blog Info}"
 *
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

/*
===================== ///////// <---------> ============= <---------> ///////// =====================>
===================== ///////// <--------->  Check out these blogs   <---------> ///////// =====================>
===================== ///////// <---------> ============= <---------> ///////// =====================>
*/

/**
 * @api {get} /ranBlogs Check out these blogs
 * @apiName ranBlogs
 * @apiGroup Blog
 * @apiPermission  User, admin, super admin
 * @apidescription retrieve blogs to be followed by other blogs
 * @apiVersion 0.0.0
 *
 *
 * @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "response":{
 *                       "ranBlogs": "[array of random 10 blogs]"
 *                     }
 *      }
 * @apiErrorExample Response Error:
 *      HTTP/1.1 401 Unauthorized
 *      {
 *          "error": "User Is Unauthorized"
 *      }
 *
 */

/* =================== End =====================*/
