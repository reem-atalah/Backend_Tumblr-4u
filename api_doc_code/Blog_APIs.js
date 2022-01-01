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
 * @apiParam {String} Token User's Secret Code.
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
 * @apiParam {String} Token User's Secret Code.
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
 * @apiParam {String} Token User's Secret Code.
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

 * @apiParam {String} Token User's Secret Code.
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
 * @apiParam {String} Token User's Secret Code.
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
 * @apiParam {String} Token User's Secret Code.
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
 * @apiParam {String} Token User's Secret Code.
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
 * @apiParam {String} Token User's Secret Code.
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

/* =================== End =====================*/

// /*
// ===================== ///////// <---------> ============= <---------> ///////// =====================>
// ===================== ///////// <---------> Get tag filters <---------> ///////// =====================>
// ===================== ///////// <---------> ============= <---------> ///////// =====================>
// */

// /**
//  * @api {get} /blog/gfiltered_tags Get tag filters
//  * @apiName getTagFilters
//  * @apiGroup Blog
//  * @apiPermission User, Admin, Super_Admin
//  *
//  * @apidescription Get tag filters
//  * @apiVersion 0.0.0
//  *
//  * @apiParam {String} Token User's Secret Code.
//  * @apiParam {String} blog-id Blog ID to filter by tags.
//  * @apiSuccessExample Response Data:
//  *      HTTP/1.1 200 OK
//  *      {
//  *          "meta": {
//  *                       "status": 200,
//  *                       "msg": "OK"
//  *                  },
//  *
//  *          "response":{
//  *                       "data":"[Filtered Tags]"
//  *                     }
//  *      }
//  * @apiErrorExample Response Error:
//  *      HTTP/1.1 400 BAD REQUEST
//  *      {
//  *          "error": "Error In Input Data"
//  *      }
//  *      HTTP/1.1 401 Unauthorized
//  *      {
//  *          "error": "User Is Unauthorized"
//  *      }
//  */


// /* =================== End =====================*/

// /*
// ===================== ///////// <---------> ============= <---------> ///////// =====================>
// ===================== ///////// <---------> Delete tag filters <---------> ///////// =====================>
// ===================== ///////// <---------> ============= <---------> ///////// =====================>
// */

// /**
//  * @api {delete} /blog/dfiltered_tags Delete tag filters
//  * @apiName deleteTagFilters
//  * @apiGroup Blog
//  * @apiPermission User, Admin, Super_Admin
//  *
//  * @apidescription Delete tag filters
//  * @apiVersion 0.0.0
//  *
//  * @apiParam {String} Token User's Secret Code.
//  * @apiParam {String} blog-id Blog ID to filter by tags.
//  * @apiParam {String} tag Tag to stop filtering.
//  *
//  * @apiSuccessExample Response Data:
//  *      HTTP/1.1 200 OK
//  *      {
//  *          "meta": {
//  *                       "status": 200,
//  *                       "msg": "OK"
//  *                  },
//  *
//  *          "response":{
//  *                       "message":"Success"
//  *                     }
//  *      }
//  * @apiErrorExample Response Error:
//  *      HTTP/1.1 400 BAD REQUEST
//  *      {
//  *          "error": "Error In Input Data"
//  *      }
//  *      HTTP/1.1 401 Unauthorized
//  *      {
//  *          "error": "User Is Unauthorized"
//  *      }
//  */

// /* =================== End =====================*/

// /*
// ===================== ///////// <---------> ============= <---------> ///////// =====================>
// ===================== ///////// <---------> Post content filters <---------> ///////// =====================>
// ===================== ///////// <---------> ============= <---------> ///////// =====================>
// */

// /**
//  * @api {post} /blog/pfiltered_content Post content filters
//  * @apiName postContentFilters
//  * @apiGroup Blog
//  * @apiPermission User, Admin, Super_Admin
//  *
//  * @apidescription Post content filters
//  * @apiVersion 0.0.0
//  *
//  * @apiParam {String} Token User's Secret Code.
//  * @apiParam {String} blog-id Blog ID to filter by content.
//  * @apiParam {Array} filtered_content One or more than one string to add to your list of filters.
//  *
//  * @apiSuccessExample Response Data:
//  *      HTTP/1.1 200 OK
//  *      {
//  *          "meta": {
//  *                       "status": 200,
//  *                       "msg": "OK"
//  *                  },
//  *
//  *          "response":{
//  *                       "message":"Success"
//  *                     }
//  *      }
//  * @apiErrorExample Response Error:
//  *      HTTP/1.1 400 BAD REQUEST
//  *      {
//  *          "error": "Error In Input Data"
//  *      }
//  *      HTTP/1.1 401 Unauthorized
//  *      {
//  *          "error": "User Is Unauthorized"
//  *      }
//  */

// /* =================== End =====================*/


// /*
// ===================== ///////// <---------> ============= <---------> ///////// =====================>
// ===================== ///////// <---------> Get content filters <---------> ///////// =====================>
// ===================== ///////// <---------> ============= <---------> ///////// =====================>
// */

// /**
//  * @api {get} /blog/:blog-id/gfiltered_tags Get content filters
//  * @apiName getContentFilters
//  * @apiGroup Blog
//  * @apiPermission User, Admin, Super_Admin
//  *
//  *
//  * @apidescription Get content filters
//  * @apiVersion 0.0.0
//  *
//  * @apiParam {String} Token User's Secret Code.
//  * @apiParam {String} blog-id Blog ID to filter by content.
//  *
//  * @apiSuccessExample Response Data:
//  *      HTTP/1.1 200 OK
//  *      {
//  *          "meta": {
//  *                       "status": 200,
//  *                       "msg": "OK"
//  *                  },
//  *
//  *          "response":{
//  *                       "data":"[Filtered Tags]"
//  *                     }
//  *      }
//  * @apiErrorExample Response Error:
//  *      HTTP/1.1 400 BAD REQUEST
//  *      {
//  *          "error": "Error In Input Data"
//  *      }
//  *      HTTP/1.1 401 Unauthorized
//  *      {
//  *          "error": "User Is Unauthorized"
//  *      }

// /*=================== End =====================*/


// /*
// ===================== ///////// <---------> ============= <---------> ///////// =====================>
// ===================== ///////// <---------> Delete content filters <---------> ///////// =====================>
// ===================== ///////// <---------> ============= <---------> ///////// =====================>
// */

// /**
//  * @api {delete} /blog/dfiltered_tags Delete content filters
//  * @apiName deleteContentFilters
//  * @apiGroup Blog
//  * @apiPermission User, Admin, Super_Admin
//  *
//  * @apidescription Delete tag filters
//  * @apiVersion 0.0.0
//  *
//  * @apiParam {String} Token User's Secret Code.
//  * @apiParam {String} blog-id Blog ID to filter by content.
//  * @apiParam {String} filtered_content Content filter string to remove.
//  *
//  * @apiSuccessExample Response Data:
//  *      HTTP/1.1 200 OK
//  *      {
//  *          "meta": {
//  *                       "status": 200,
//  *                       "msg": "OK"
//  *                  },
//  *
//  *          "response":{
//  *                       "message":"Success"
//  *                     }
//  *      }
//  * @apiErrorExample Response Error:
//  *      HTTP/1.1 400 BAD REQUEST
//  *      {
//  *          "error": "Error In Input Data"
//  *      }
//  *      HTTP/1.1 401 Unauthorized
//  *      {
//  *          "error": "User Is Unauthorized"
//  *      }
//  */

// /* =================== End =====================*/


// /*
// ===================== ///////// <---------> ============= <---------> ///////// =====================>
// ===================== ///////// <---------> Create a new blog <---------> ///////// =====================>
// ===================== ///////// <---------> ============= <---------> ///////// =====================>
// */

// /**
//  * @api {post} user/new/blog/:userId Create a new blog.
//  *
//  * @apiName newBlog
//  * @apiGroup Blog
//  * @apiVersion 0.0.0
//  * @apiPermission User, Admin, Super_Admin
//  *
//  * @apiParam {String} Token User's Secret Code.
//  * @apiParam {String} Title Blog's Title
//  * @apiParam {String} name Name of the Blog and must be unique
//  * @apiparam {Boolean} privacy  Wether the blog is private or not
//  * @apiParam {String} [Password] Blog's password if it's private
//  *
//  * @apiSuccessExample Response Data:
//  *      HTTP/1.1 200 OK
//  *      {
//  *          "meta": {
//  *                       "status": 200,
//  *                       "msg": "OK"
//  *                  },
//  *
//  *          "response":{
//  *                       "message": "Blog Created Successfully"
//  *                     "data":"{Object Contains Blog Info}"
//  *
//  *                     }
//  *      }
//  * @apiErrorExample Response Error:
//  *      HTTP/1.1 400 BAD REQUEST
//  *      {
//  *          "error": "Error In Input Data"
//  *      }
//  *      HTTP/1.1 401 Unauthorized
//  *      {
//  *          "error": "User Is Unauthorized"
//  *      }
//  */

// /* =================== End =====================*/


// /*
// ===================== ///////// <---------> ============= <---------> ///////// =====================>
// ===================== ///////// <---------> Adding Members  <---------> ///////// =====================>
// ===================== ///////// <---------> ============= <---------> ///////// =====================>
// */
// /**
//  * @api {post} /members/ Adding members.
//  *
//  * @apiName addMember
//  * @apiGroup Blog
//  * @apiVersion 0.0.0
//  * @apiPermission User, Admin, Super_Admin
//  *
//  * @apiParam {String} Token User's Secret Code.
//  * @apiParam {String} Member Member's email
//  *
//  * @apiSuccessExample Response Data:
//  *      HTTP/1.1 200 OK
//  *      {
//  *          "meta": {
//  *                       "status": 200,
//  *                       "msg": "OK"
//  *                  },
//  *
//  *          "response":{
//  *                        "message": "Invitation Sent Via Email"
//  *                     }
//  *      }
//  * @apiErrorExample Response Error:
//  *      HTTP/1.1 400 BAD REQUEST
//  *      {
//  *          "error": "Error In Input Data"
//  *      }
//  *      HTTP/1.1 401 Unauthorized
//  *      {
//  *          "error": "User Is Unauthorized"
//  *      }
//  */

// /* =================== End =====================*/

// /*
// ===================== ///////// <---------> ============= <---------> ///////// =====================>
// ===================== ///////// <---------> Join Group  <---------> ///////// =====================>
// ===================== ///////// <---------> ============= <---------> ///////// =====================>
// */

// /**
//  * @api {post} /join/:Token Join Group.
//  *
//  * @apiName joinGroup
//  * @apiGroup Blog
//  * @apiVersion 0.0.0
//  * @apiPermission User, Admin, Super_Admin
//  *
//  * @apiSuccessExample Response Data:
//  *      HTTP/1.1 200 OK
//  *      {
//  *          "meta": {
//  *                       "status": 200,
//  *                       "msg": "OK"
//  *                  },
//  *
//  *          "response":{
//  *                        "message": "Member Added Successfully"
//  *                     }
//  *      }
//  * @apiErrorExample Response Error:
//  *      HTTP/1.1 400 BAD REQUEST
//  *      {
//  *          "error": "Error In Input Data"
//  *      }
//  *      HTTP/1.1 401 Unauthorized
//  *      {
//  *          "error": "User Is Unauthorized"
//  *      }
//  */

// /* =================== End =====================*/


// /*
// ===================== ///////// <---------> ============= <---------> ///////// =====================>
// ===================== ///////// <--------->  Remove Member  <---------> ///////// =====================>
// ===================== ///////// <---------> ============= <---------> ///////// =====================>
// */

// /**
//  * @api {delete} /members/ Remove member.
//  *
//  * @apiName removeMember
//  * @apiGroup Blog
//  * @apiVersion 0.0.0
//  * @apiPermission User, Admin, Super_Admin
//  *
//  * @apiParam {String} Token User's Secret Code.
//  * @apiParam {String} Member Blog's Id
//  *
//  * @apiSuccessExample Response Data:
//  *      HTTP/1.1 200 OK
//  *      {
//  *          "meta": {
//  *                       "status": 200,
//  *                       "msg": "OK"
//  *                  },
//  *
//  *          "response":{
//  *                        "message": "Blog Removed Successfully"
//  *                     }
//  *      }
//  * @apiErrorExample Response Error:
//  *      HTTP/1.1 400 BAD REQUEST
//  *      {
//  *          "error": "Error In Input Data"
//  *      }
//  *      HTTP/1.1 401 Unauthorized
//  *      {
//  *          "error": "User Is Unauthorized"
//  *      }
//  */

// /* =================== End =====================*/

// /*
// ===================== ///////// <---------> ============= <---------> ///////// =====================>
// ===================== ///////// <--------->  Promote To Admin  <---------> ///////// =====================>
// ===================== ///////// <---------> ============= <---------> ///////// =====================>
// */

// /**
//  * @api {put} /members/ Promote to Admin.
//  *
//  * @apiName promoteBlog
//  * @apiGroup Blog
//  * @apiVersion 0.0.0
//  * @apiPermission User, Admin, Super_Admin
//  *
//  * @apiParam {String} Token User's Secret Code.
//  * @apiParam {String} Member Blog's Id
//  *
//  * @apiSuccessExample Response Data:
//  *      HTTP/1.1 200 OK
//  *      {
//  *          "meta": {
//  *                       "status": 200,
//  *                       "msg": "OK"
//  *                  },
//  *
//  *          "response":{
//  *                        "message": "Blog Promoted To Admin Successfully"
//  *                     }
//  *      }
//  * @apiErrorExample Response Error:
//  *      HTTP/1.1 400 BAD REQUEST
//  *      {
//  *          "error": "Error In Input Data"
//  *      }
//  *      HTTP/1.1 401 Unauthorized
//  *      {
//  *          "error": "User Is Unauthorized"
//  *      }
//  */

// /* =================== End =====================*/


// /*
// ===================== ///////// <---------> ============= <---------> ///////// =====================>
// ===================== ///////// <--------->   Leave This Blog <---------> ///////// =====================>
// ===================== ///////// <---------> ============= <---------> ///////// =====================>
// */
// /**
//  * @api {delete} /members/leave/ Leave this blog.
//  *
//  * @apiName leaveBlog
//  * @apiGroup Blog
//  * @apiVersion 0.0.0
//  * @apiPermission User, Admin, Super_Admin
//  *
//  * @apiParam {String} Token User's Secret Code.
//  * @apiParam {String} Blog's group Id
//  *
//  * @apiSuccessExample Response Data:
//  *      HTTP/1.1 200 OK
//  *      {
//  *          "meta": {
//  *                       "status": 200,
//  *                       "msg": "OK"
//  *                  },
//  *
//  *          "response":{
//  *                        "message": "Blog Leave Group Successfully"
//  *                     }
//  *      }
//  * @apiErrorExample Response Error:
//  *      HTTP/1.1 400 BAD REQUEST
//  *      {
//  *          "error": "Error In Input Data"
//  *      }
//  *      HTTP/1.1 401 Unauthorized
//  *      {
//  *          "error": "User Is Unauthorized"
//  *      }
//  */

// /* =================== End =====================*/

// /*
// ===================== ///////// <---------> ============= <---------> ///////// =====================>
// ===================== ///////// <--------->   Get Blog Settings <---------> ///////// =====================>
// ===================== ///////// <---------> ============= <---------> ///////// =====================>
// */

// /**
//  * @api {get} /blog/appearance/ Get Blog Settings.
//  *
//  * @apiName blogSettings
//  * @apiGroup Blog
//  * @apiVersion 0.0.0
//  * @apiPermission User, Admin, Super_Admin
//  *
//  * @apiParam {String} Token User's Secret Code.
//  * @apiParam {String} Id Blog's Id
//  *
//  * @apiSuccessExample Response Data:
//  *      HTTP/1.1 200 OK
//  *      {
//  *          "meta": {
//  *                       "status": 200,
//  *                       "msg": "OK"
//  *                  },
//  *
//  *          "response":{
//  *                       "message": "{ Object Contains Blog Settings }"
//  *                     }
//  *      }
//  * @apiErrorExample Response Error:
//  *      HTTP/1.1 400 BAD REQUEST
//  *      {
//  *          "error": "Error In Input Data"
//  *      }
//  *      HTTP/1.1 401 Unauthorized
//  *      {
//  *          "error": "User Is Unauthorized"
//  *      }
//  */

// /* =================== End =====================*/

// /*
// ===================== ///////// <---------> ============= <---------> ///////// =====================>
// ===================== ///////// <--------->   Edit Blog Settings  <---------> ///////// =====================>
// ===================== ///////// <---------> ============= <---------> ///////// =====================>
// */

// /**
//  * @api {post} /blog/edit/:blogId Edit Blog Settings.
//  *
//  * @apiName eidtBlog
//  * @apiGroup Blog
//  * @apiVersion 0.0.0
//  * @apiPermission User, Admin, Super_Admin
//  *
//  * @apiparam {String} blogId  - id of the blog
//  * @apiparam {String} [title]
//  * @apiparam {String} [accent]
//  * @apiparam {String} [name]
//  * @apiparam {String} [password]
//  * @apiparam {String} [headerImage]
//  * @apiparam {String} [background]
//  * @apiparam {String} [avatar]
//  * @apiparam {String} [theme]
//  * @apiparam {String} [description]
//  * 
//  * @apiSuccessExample Response Data:
//  *      HTTP/1.1 200 OK
//  *      {
//  *          "meta": {
//  *                       "status": 200,
//  *                       "msg": "OK"
//  *                  },
//  *
//  *          "response":{
//  *                       "message": "Settings updated successfully"
//  *                       "data":"{Object Contains Blog Info}"
//  *
//  *                     }
//  *      }
//  * @apiErrorExample Response Error:
//  *      HTTP/1.1 400 BAD REQUEST
//  *      {
//  *          "error": "Error In Input Data"
//  *      }
//  *      HTTP/1.1 401 Unauthorized
//  *      {
//  *          "error": "User Is Unauthorized"
//  *      }
//  */

// /* =================== End =====================*/

// /*
// ===================== ///////// <---------> ============= <---------> ///////// =====================>
// ===================== ///////// <--------->   Get Blog Theme  <---------> ///////// =====================>
// ===================== ///////// <---------> ============= <---------> ///////// =====================>
// */

// /**
//  * @api {get} /blog/theme/ Get Blog's Theme.
//  *
//  * @apiName blogTheme
//  * @apiGroup Blog
//  * @apiVersion 0.0.0
//  * @apiPermission User, Admin, Super_Admin
//  *
//  * @apiParam {String} Token User's Secret Code.
//  * @apiParam {String} Id Blog's Id
//  *
//  * @apiSuccessExample Response Data:
//  *      HTTP/1.1 200 OK
//  *      {
//  *          "meta": {
//  *                       "status": 200,
//  *                       "msg": "OK"
//  *                  },
//  *
//  *          "response":{
//  *                       "message": "Object Contains Blog Theme"
//  *                     }
//  *      }
//  * @apiErrorExample Response Error:
//  *      HTTP/1.1 400 BAD REQUEST
//  *      {
//  *          "error": "Error In Input Data"
//  *      }
//  *      HTTP/1.1 401 Unauthorized
//  *      {
//  *          "error": "User Is Unauthorized"
//  *      }
//  */

// /* =================== End =====================*/


// /*
// ===================== ///////// <---------> ============= <---------> ///////// =====================>
// ===================== ///////// <--------->  Edit Blog Theme   <---------> ///////// =====================>
// ===================== ///////// <---------> ============= <---------> ///////// =====================>
// */

// /**
//  * @api {put} /blog/theme/ Edit Blog Theme.
//  *
//  * @apiName eidtBlogTheme
//  * @apiGroup Blog
//  * @apiVersion 0.0.0
//  * @apiPermission User, Admin, Super_Admin
//  *
//  * @apiParam {String} Token User's Secret Code.
//  * @apiParam {String} Id Blog's Id
//  * @apiParam {String} New_Theme Blog's new theme
//  *
//  * @apiSuccessExample Response Data:
//  *      HTTP/1.1 200 OK
//  *      {
//  *          "meta": {
//  *                       "status": 200,
//  *                       "msg": "OK"
//  *                  },
//  *
//  *          "response":{
//  *                       "message": "Theme updated successfully"
//  *                     }
//  *      }
//  * @apiErrorExample Response Error:
//  *      HTTP/1.1 400 BAD REQUEST
//  *      {
//  *          "error": "Error In Input Data"
//  *      }
//  *      HTTP/1.1 401 Unauthorized
//  *      {
//  *          "error": "User Is Unauthorized"
//  *      }
//  */

// /* =================== End =====================*/


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
