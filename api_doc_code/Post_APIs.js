/* eslint-disable max-len */
/* eslint-disable linebreak-style */
// =====================================================================================================
// =====================================================================================================
// =====================================================================================================
/*
===================== ///////// <---------> ============ <---------> ///////// =====================>
===================== ///////// <---------> Post Methods <---------> ///////// =====================>
===================== ///////// <---------> ============ <---------> ///////// =====================>
*/
// =====================================================================================================
// =====================================================================================================
// =====================================================================================================


/*
===================== ///////// <---------> ============= <---------> ///////// =====================>
===================== ///////// <---------> Upload Media <---------> ///////// =====================>
===================== ///////// <---------> ============== <---------> ///////// =====================>
*/

/**
 * @api {post} /uploadImg Upload Media on Server
 * @apiName uploadImg
 * @apiGroup Post
 * @apiPermission User, Admin, Super_Admin

 * 
 * @apidescription upload media types: photo, audio, video.
 * @apiVersion 0.0.0
 *
 * @apiHeader {String} Token User's Secret Code.
 * 
 * @apiParam {String} multiple base64 image/s or video/s or audio/s strings
 * 
 * @apiSuccess {Array} images array of links to the server
 * 
 * @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "res":{
 *                      "images": "array of links to the uploaded media on cloud server"
 *                     }   
 *      }
 * 
 * @apiErrorExample Response Error:
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "error": "Blog Not Found"
 *      }
 *      HTTP/1.1 401 Unauthorized
 *      {
 *          "error": "User Is Unauthorized"
 *      }
 *      HTTP/1.1 500 Internal Server Error
 *      {
 *          "error": "Error In Upload Function"
 *      }
 */

/*=================== End =====================*/


/*
===================== ///////// <---------> ============= <---------> ///////// =====================>
===================== ///////// <---------> Create a Blog Post <---------> ///////// =====================>
===================== ///////// <---------> ============== <---------> ///////// =====================>
*/

/**
 * @api {post} /:blogId/posts/create_post Create a New Blog Post
 * @apiName postBlogPost
 * @apiGroup Post
 * @apiPermission User, Admin, Super_Admin

 * 
 * @apidescription Create a New Blog Post (Legacy), one of the following types: text, photo, quote, link, chat, audio, video.
 * @apiVersion 0.0.0
 *
 * @apiParam {String} blogId ID of the blog that the post will be created in.
 * @apiParam {String} postHtml The post content in html format.
 * @apiParam {String} type=text The type of post to create. Specify one of the following: text, photo, quote, link, chat, audio, video.
 * @apiParam {String} [state=published] The state of the post. Specify one of the following: published, queued, draft, private.
 * @apiParam {String} [tags] Comma-separated tags for this post.
 * @apiParam {String} [date=The date and time of the POST request] Date of creation.
 *
 * @apiSuccess {String} postId Id of the created post
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
 *                      "message": "Post Created Successfully"
 *                      "postId": postId
 *                     }   
 *      }
 * 
 * @apiErrorExample Response Error:
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "error": "Blog Not Found"
 *      }
 *      HTTP/1.1 401 Unauthorized
 *      {
 *          "error": "User Is Unauthorized"
 *      }
 *      HTTP/1.1 500 Internal Server Error
 *      {
 *          "error": "Error In Create Post Function"
 *      }
 */

/*=================== End =====================*/



/*
===================== ///////// <---------> ============= <---------> ///////// =====================> 
===================== ///////// <---------> Show a Blog Post <---------> ///////// =====================> 
===================== ///////// <---------> ============== <---------> ///////// =====================> 
*/

/**
 * @api {get} /posts/:postId/show_post Show a Blog Post
 * @apiName showBlogPost
 * @apiGroup Post
 * @apiPermission User, Admin, Super_Admin

 * 
 * @apidescription Shows a Blog Post.
 * @apiVersion 0.0.0
 *
 * @apiParam {String} postId ID of the post.
 *
 * @apiSuccess {String} postContent Content of the post.
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
 *                      "message": "Post Returned Successfully"
 *                      "postContent": postContent
 *                     }   
 *      }
 * 
 * @apiErrorExample Response Error:
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "error": "Post Not Found"
 *      }
 *      HTTP/1.1 401 Unauthorized
 *      {
 *          "error": "User Is Unauthorized"
 *      }
 *      HTTP/1.1 500 Internal Server Error
 *      {
 *          "error": "Error In Show Post Function"
 *      }
 */

/*=================== End =====================*/



/*
===================== ///////// <---------> ================ <---------> ///////// =====================> 
===================== ///////// <---------> Edit a Blog Post <---------> ///////// =====================> 
===================== ///////// <---------> ================ <---------> ///////// =====================> 
*/

/**
 * @api {put} /posts/:postId/edit_post Edit a Blog Post
 * @apiName editBlogPost
 * @apiGroup Post
 * 
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apidescription Edit a Blog Post (Legacy)
 * @apiVersion 0.0.0
 *
 * @apiParam {String} postId The ID of the post to edit.
 * @apiParam {String} postContent Post content after editing.
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
 *                      "message": "Post Edited Successfully"
 *                      "postContent": postContent
 *                     }   
 *      }
 * 
 * @apiErrorExample Response Error:
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "error": "Post Not Found"
 *      }
 *      HTTP/1.1 500 Internal Server Error
 *      {
 *          "error": "Error In Edit Post Function"
 *      }
 *      HTTP/1.1 401 Unauthorized
 *      {
 *          "error": "User Is Unauthorized"
 *      }
 */

/*=================== End =====================*/


/*
===================== ///////// <---------> ================= <---------> ///////// =====================> 
===================== ///////// <---------> Delete a Blog Post <---------> ///////// =====================> 
===================== ///////// <---------> ================= <---------> ///////// =====================> 
*/

/**
 * @api {Delete} /posts/:postId/delete_post Delete a Blog Post
 * @apiName deletePost
 * @apiGroup Post
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apidescription removes a post for the poster owner
 * @apiVersion 0.0.0
 *
 * @apiParam {String} postId The ID of the post to delete
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
 *                      "message": "Post Deleted Successfully"
 *                     }   
 *      }
 * 
 * @apiErrorExample Response Error:
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "error": "Post Not Found"
 *      }
 *      HTTP/1.1 500 Internal Server Error
 *      {
 *          "error": "Error In Delete Post Function"
 *      }
 *      HTTP/1.1 401 Unauthorized
 *      {
 *          "error": "User Is Unauthorized"
 *      } 
 */

/*=================== End =====================*/


/*
===================== ///////// <---------> ================ <---------> ///////// =====================> 
===================== ///////// <---------> Press Like of a Blog Post <---------> ///////// =====================> 
===================== ///////// <---------> ================ <---------> ///////// =====================> 
*/

/**
 * @api {put} /:blogId/:postId/like_press Press Like of a Blog Post
 * @apiName pressLikeBlogPost
 * @apiGroup Post
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apidescription Like or Unlike a blog post
 * @apiVersion 0.0.0
 *
 * @apiParam {String} blogId The ID of the blog that likes the post.
 * @apiParam {String} postId The ID of the liked post.
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
 *                      "message": "Post Liked Successfully"
 *                     }   
 *      }
 *      HTTP/1.1 200 OK
 *      {
 *          "meta": {
 *                       "status": 200,
 *                       "msg": "OK"
 *                  },
 * 
 *          "res":{
 *                      "message": "Post Unliked Successfully"
 *                     }   
 *      }
 * 
 * @apiErrorExample Response Error:
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "error": "Blog Not Found"
 *      }
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "error": "Post Not Found"
 *      }
 *      HTTP/1.1 500 Internal Server Error
 *      {
 *          "error": "Error In Press Like Funcion"
 *      }
 *      HTTP/1.1 401 Unauthorized
 *      {
 *          "error": "User Is Unauthorized"
 *      }
 */

/*=================== End =====================*/


/*
===================== ///////// <---------> ================= <---------> ///////// =====================> 
===================== ///////// <---------> Make a Comment <---------> ///////// =====================> 
===================== ///////// <---------> ================= <---------> ///////// =====================> 
*/

/**
 * @api {put} /:blogId/:postId/comment Make Comment
 * @apiName makeComment
 * @apiGroup Post
 * @apiPermission User, Admin, Super_Admin
 * @apidescription a commenter blog can make comments on any posts
 * @apiVersion 0.0.0
 * 
 * @apiParam {String} blogId The ID of the blog making the comment.
 * @apiParam {String} postId The ID of the post.
 * @apiParam {String} text comment text.  
 * 
 * @apiSuccess {String} commentId Id of the created comment.
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
 *                      "message": "Comment Posted Successfully"
 *                      "commentId": commentId
 *                     }   
 *      }
 * 
 * @apiErrorExample Response Error:
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "error": "Blog Not Found"
 *      }
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "error": "Post Not Found"
 *      }
 *      HTTP/1.1 500 Internal Server Error
 *      {
 *          "error": "Error In Make Comment Funcion"
 *      }
 *      HTTP/1.1 401 Unauthorized
 *      {
 *          "error": "User Is Unauthorized"
 *      }
 */

/*=================== End =====================*/


/*
===================== ///////// <---------> ================= <---------> ///////// =====================> 
===================== ///////// <---------> Remove a Comment <---------> ///////// =====================> 
===================== ///////// <---------> ================= <---------> ///////// =====================> 
*/

/**
 * @api {delete} /:postId/:commentId/remove_comment Remove Comment
 * @apiName commentRemover
 * @apiGroup Post
 * @apiPermission User, Admin, Super_Admin
 * @apidescription removes the comment on a post
 * @apiVersion 0.0.0
 * 
 * @apiParam {String} postId Id of the post to remove comment from.
 * @apiParam {String} commentId Id of the comment to remove.
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
 *                      "message": "Comment Removed Successfully"
 *                     }   
 *      }
 * 
 * @apiErrorExample Response Error:
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "error": "Post Not Found"
 *      }
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "error": "Comment Not Found"
 *      }
 *      HTTP/1.1 500 Internal Server Error
 *      {
 *          "error": "Error In Remove Comment Funcion"
 *      }
 *      HTTP/1.1 401 Unauthorized
 *      {
 *          "error": "User Is Unauthorized"
 *      }
 */

/*=================== End =====================*/


/*
===================== ///////// <---------> =========== <---------> ///////// =====================> 
===================== ///////// <---------> Share With <---------> ///////// =====================> 
===================== ///////// <---------> ============ <---------> ///////// =====================> 
*/

/**
 * @api {post} /posts/:postId/share_with Share With
 * @apiName sharePostWith
 * @apiGroup Post
 * @apiPermission User, Admin, Super_Admin
 * @apidescription can share with anyone, we'll send post url
 * @apiVersion 0.0.0
 * 
 * 
 * @apiParam {String} postId The ID of the post to share.
 * 
 * @apiSuccess {String} postUrl Url of the post to share.
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
 *                      "message": "Post Shared Successfully"
 *                      "postUrl": postUrl
 *                     }   
 *      }
 * 
 * @apiErrorExample Response Error:
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "error": "Post Not Found"
 *      }
 *      HTTP/1.1 500 Internal Server Error
 *      {
 *          "error": "Error In Share With Funcion"
 *      }
 *      HTTP/1.1 401 Unauthorized
 *      {
 *          "error": "User Is Unauthorized"
 *      }
 */

/*=================== End =====================*/


/*
===================== ///////// <---------> ================ <---------> ///////// =====================> 
===================== ///////// <---------> Reblog a Blog Post <---------> ///////// =====================> 
===================== ///////// <---------> ================ <---------> ///////// =====================> 
*/

/**
 * @api {put} /:blogId/:postId/reblog_post Reblog a Blog Post
 * @apiName reblogBlogPost
 * @apiGroup Post
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apidescription Reblog a Post (Legacy)
 * @apiVersion 0.0.0
 *
 * @apiParam {String} blogId The ID of the reblogging blog.
 * @apiParam {String} postId The ID of the rebloged post.
 * @apiParam {String} [text] Optional description on the rebloged post.
 * 
 * @apiSuccess {String} reblogId Id of the reblog.
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
 *                      "message": "Post Reblogged Successfully"
 *                      "reblogId": reblogId
 *                     }   
 *      }
 * 
 * @apiErrorExample Response Error:
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "error": "Blog Not Found"
 *      }
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "error": "Post Not Found"
 *      }
 *      HTTP/1.1 500 Internal Server Error
 *      {
 *          "error": "Error In Reblog Post Funcion"
 *      }
 *      HTTP/1.1 401 Unauthorized
 *      {
 *          "error": "User Is Unauthorized"
 *      }
 */

/*=================== End =====================*/


/*
===================== ///////// <---------> ================ <---------> ///////// =====================> 
===================== ///////// <---------> Remove a Rebloged Post <---------> ///////// =====================> 
===================== ///////// <---------> ================ <---------> ///////// =====================> 
*/

/**
 * @api {delete} /:postId/:reblogId/remove_reblog Remove Reblog of a Blog Post
 * @apiName reblogBlogPost
 * @apiGroup Post
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apidescription Reblog a Post (Legacy)
 * @apiVersion 0.0.0
 *
 * @apiParam {String} postId The ID of the post to remove reblog from.
 * @apiParam {String} reblogId The ID of the reblog to remove.
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
 *                      "message": "Reblog Removed Successfully"
 *                     }   
 *      }
 * 
 * @apiErrorExample Response Error:
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "error": "Post Not Found"
 *      }
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "error": "Reblog Not Found"
 *      }
 *      HTTP/1.1 500 Internal Server Error
 *      {
 *          "error": "Error In Remove Reblog Funcion"
 *      }
 *      HTTP/1.1 401 Unauthorized
 *      {
 *          "error": "User Is Unauthorized"
 *      }
 */

/*=================== End =====================*/


/*
===================== ///////// <---------> ================ <---------> ///////// =====================> 
===================== ///////// <---------> Get Post notes <---------> ///////// =====================> 
===================== ///////// <---------> ================ <---------> ///////// =====================> 
*/

/**
 * @api {get} /posts/:postId/notes Get notes for a specific Post
 * @apiName getBlogPostNotes
 * @apiGroup Post
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apidescription Get notes for a specific Post
 * @apiVersion 0.0.0
 * 
 * @apiParam {String} postId The ID of the post to fetch notes for.
 * 
 * @apiSuccess {Array} notes Array of array, contains 4 arrays: likesArray, commentsArray, reblogsArray, countsArray(likesCount, reblogsCount, notesCount)
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
 *                      "message": 'Notes Got Successfully'
 *                      "notes": notes
 *                     }   
 *      }
 * 
 * @apiErrorExample Response Error:
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "error": "Post Not Found"
 *      }
 *      HTTP/1.1 500 Internal Server Error
 *      {
 *          "error": "Error In Get Notes Funcion"
 *      }
 *      HTTP/1.1 401 Unauthorized
 *      {
 *          "error": "User Is Unauthorized"
 *      }
 */

/*=================== End =====================*/


/*
===================== ///////// <---------> ================ <---------> ///////// =====================> 
===================== ///////// <---------> Get Dashboard <---------> ///////// =====================> 
===================== ///////// <---------> ================ <---------> ///////// =====================> 
*/

/**
 * @api {get} /userId/:blogId/notes Get notes for a specific Post
 * @apiName getBlogPostNotes
 * @apiGroup Post
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apidescription Get notes for a specific Post
 * @apiVersion 0.0.0
 * 
 * @apiParam {String} userId The ID of the user.
 * @apiParam {String} blogId The ID of the blog to get its dashboard.
 * 
 * @apiSuccess {Array} data Array of posts.
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
 *                      "message": 'Notes Got Successfully'
 *                      "data": data
 *                     }   
 *      }
 * 
 * @apiErrorExample Response Error:
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "error": "Blog Not Found"
 *      }
 *      HTTP/1.1 500 Internal Server Error
 *      {
 *          "error": "Error In Get Dashboard Funcion"
 *      }
 *      HTTP/1.1 401 Unauthorized
 *      {
 *          "error": "User Is Unauthorized"
 *      }
 */

/*=================== End =====================*/


/*
===================== ///////// <---------> ================ <---------> ///////// =====================>
===================== ///////// <---------> Get Posts with search content in dashboard <---------> ///////// =====================>
===================== ///////// <---------> ================ <---------> ///////// =====================>
*/

/**
 * @api {get} /autoCompleteSearchDash/:wordName Get Posts with search content
 * @apiName autoCompleteSearchDash
 * @apiGroup Post
 * @apiPermission Guests, User, Admin, Super_Admin
 *
 * @apidescription Get Posts with search content
 * @apiVersion 0.0.0
 *
 * @apiParam {String} wordName The content in the posts you'd like to retrieve.
 *
 * @apiSuccessExample Response Data:
 *      result={
 *          resultHashTag: resultHashTag,//if I have word //gets all hashtags with the needed regex
 *          resultPostHashTag: resultPostHashTag, //if I have word //gets all posts with the needed tag with the needed regex
 *          resultBlogs: resultBlogs, //if I have word // gets all mention blogs with the regex
 *          resultFollowedTag: resultFollowedTag //if I don't have word // gets all posts with the followed/interested tags
 *      }
 */ 


/*
===================== ///////// <---------> ================ <---------> ///////// =====================>
===================== ///////// <---------> Get Posts with search content in dashboard <---------> ///////// =====================>
===================== ///////// <---------> ================ <---------> ///////// =====================>
*/

/**
 * @api {get} /autoCompleteSearchDash/:wordName Get Posts with search content
 * @apiName autoCompleteSearchDash
 * @apiGroup Post
 * @apiPermission Guests, User, Admin, Super_Admin
 *
 * @apidescription Get Posts with search content
 * @apiVersion 0.0.0
 *
 * @apiHeader {String} Token User's Secret Code.
 * @apiSuccessExample Response Data:
 *      result={
 *          resultPostHashTag: resultPostHashTag, //get posts of the interests
 *          resultFollowedTag: resultFollowedTag //if I don't have word // gets all posts with the followed/interested tags
 *      }
 */ 
/*
===================== ///////// <---------> ================ <---------> ///////// =====================> 
===================== ///////// <---------> Get Trending Posts <---------> ///////// =====================> 
===================== ///////// <---------> ================ <---------> ///////// =====================> 
*/

/**
 * @api {get} /trendPosts Get Trending Posts 
 * @apiName trendPosts
 * @apiGroup Post
 * @apiPermission Guests, User, Admin, Super_Admin
 * 
 * @apidescription Get Posts for the trending page
 * @apiVersion 0.0.0
 *
 * @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "response":{
 *                      "postsToShow": {
 *                                          countNotesEachPost: [array of 10 numbers of notes counts]
 *                                          trendingPostsLim: [array of 10 top posts]
 *                                      }
 *                     }   
 *      }
 * 
 */


/*
===================== ///////// <---------> ================ <---------> ///////// =====================> 
===================== ///////// <---------> Get Explore Posts <---------> ///////// =====================> 
===================== ///////// <---------> ================ <---------> ///////// =====================> 
*/

/**
 * @api {get} /ranPosts Get Explore Posts 
 * @apiName ranPosts
 * @apiGroup Post
 * @apiPermission Guests, User, Admin, Super_Admin
 * 
 * @apidescription Get Posts for the explore page
 * @apiVersion 0.0.0
 *
 * @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "response":{
 *                      "ranBlogs": "[array of random 10 blogs]"
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
===================== ///////// <---------> Retrieve Radar Post <---------> ///////// =====================> 
===================== ///////// <---------> ================ <---------> ///////// =====================> 
*/

/**
 * @api {get} getRadar/ Retrieve Radar Post
 * @apiName getRadar
 * @apiGroup Post
 * @apiPermission User, Admin, Super_Admin
 * @apidescription The most popular post, having many notes is represented
 * @apiVersion 0.0.0
 * 
 * @apiParam {String} Token User's Secret Code.
 * @apiParam {String} id Radar Post id 
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
 *                      "data": "{Object} radar post object has all its aspects"
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
 * 
 */

/*=================== End =====================*/
