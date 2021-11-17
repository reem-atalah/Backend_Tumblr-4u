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


/*
===================== ///////// <---------> ================ <---------> ///////// =====================> 
===================== ///////// <---------> Get Explore Posts <---------> ///////// =====================> 
===================== ///////// <---------> ================ <---------> ///////// =====================> 
*/

/**
 * @api {get} /explore Get Explore Posts 
 * @apiName getExplorePosts
 * @apiGroup Post
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apidescription Get Posts for the explore page
 * @apiVersion 0.0.0
 *
 * @apiParam {String} Token User's Secret Code.
 * @apiParam {String} type where the type of posts are {text/photos/gifs/quotes/chats/audio/videos/asks/staff picks/trending/for you}
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
 *                      "data": "[ type_posts the posts with certain type as choosen ]"
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