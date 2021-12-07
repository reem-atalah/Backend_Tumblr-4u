//=====================================================================================================
//=====================================================================================================
//=====================================================================================================
/*
===================== ///////// <---------> ============ <---------> ///////// =====================> 
===================== ///////// <---------> Post Methods <---------> ///////// =====================> 
===================== ///////// <---------> ============ <---------> ///////// =====================> 
*/
//=====================================================================================================
//=====================================================================================================
//=====================================================================================================


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
===================== ///////// <---------> ============= <---------> ///////// =====================> 
===================== ///////// <---------> Show a Blog Post <---------> ///////// =====================> 
===================== ///////// <---------> ============== <---------> ///////// =====================> 
*/

/**
 * @api {get} /posts/:postId/show_post Create a New Blog Post
 * @apiName showBlogPost
 * @apiGroup Post
 * @apiPermission User, Admin, Super_Admin

 * 
 * @apidescription Shows a Blog Post.
 * @apiVersion 0.0.0
 *
 * @apiParam {String} posrId ID of the post.
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
 * @apiParam {String} postHtml Post content after editing.
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
===================== ///////// <---------> ================= <---------> ///////// =====================> 
===================== ///////// <---------> Delete a Blog Post <---------> ///////// =====================> 
===================== ///////// <---------> ================= <---------> ///////// =====================> 
*/

/**
 * @api {Delete} /posts/:postId/delete_post Delete a Post
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
===================== ///////// <---------> ================ <---------> ///////// =====================> 
===================== ///////// <---------> Press Like of a Blog Post <---------> ///////// =====================> 
===================== ///////// <---------> ================ <---------> ///////// =====================> 
*/

/**
 * @api {post} /:blogId/:postId/like_press Like a blog post
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
===================== ///////// <---------> ================= <---------> ///////// =====================> 
===================== ///////// <---------> Make a Comment <---------> ///////// =====================> 
===================== ///////// <---------> ================= <---------> ///////// =====================> 
*/

/**
 * @api {post} /:blogId/:postId/comment Make Comment
 * @apiName makeComment
 * @apiGroup Post
 * @apiPermission User, Admin, Super_Admin
 * @apidescription a commenter blog can make comments on any posts
 * @apiVersion 0.0.0
 * 
 * @apiParam {String} blogId The ID of the blog making the comment.
 * @apiParam {String} postId The ID of the post.
 * @apiParam {String} text comment text  
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
===================== ///////// <---------> Remove a Comment <---------> ///////// =====================> 
===================== ///////// <---------> ================= <---------> ///////// =====================> 
*/

/**
 * @api {post} /:postId/:commentId/remove_comment Remove Comments
 * @apiName commentRemover
 * @apiGroup Post
 * @apiPermission User, Admin, Super_Admin
 * @apidescription removes the comment on a post
 * @apiVersion 0.0.0
 * 
 * @apiParam {String} blogId Id of the blog to remove its comment.
 * @apiParam {String} postId Post Id.
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
 * @apiParam {String} postId The ID of the post
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
===================== ///////// <---------> ================ <---------> ///////// =====================> 
===================== ///////// <---------> Reblog a Blog Post <---------> ///////// =====================> 
===================== ///////// <---------> ================ <---------> ///////// =====================> 
*/

/**
 * @api {post} /:blogId/:postId/reblog_post Reblog a Post
 * @apiName reblogBlogPost
 * @apiGroup Post
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apidescription Reblog a Post (Legacy)
 * @apiVersion 0.0.0
 *
 * @apiParam {String} blogId The ID of the reblogging blog.
 * @apiParam {String} postId The ID of the rebloged post.
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
===================== ///////// <---------> Remove a Rebloged Post <---------> ///////// =====================> 
===================== ///////// <---------> ================ <---------> ///////// =====================> 
*/

/**
 * @api {post} /:postId/:reblogId/remove_reblog Reblog a Post
 * @apiName reblogBlogPost
 * @apiGroup Post
 * @apiPermission User, Admin, Super_Admin
 * 
 * @apidescription Reblog a Post (Legacy)
 * @apiVersion 0.0.0
 *
 * @apiParam {String} blogId The ID of the reblogging blog.
 * @apiParam {String} postId The ID of the rebloged post.
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
===================== ///////// <---------> =========== <---------> ///////// =====================> 
===================== ///////// <---------> Pin a Blog Post <---------> ///////// =====================> 
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
===================== ///////// <---------> GetQueuedPosts <---------> ///////// =====================> 
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
===================== ///////// <---------> Reorder Queued Posts <---------> ///////// =====================> 
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
===================== ///////// <---------> Shuffle Queued Posts <---------> ///////// =====================> 
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
===================== ///////// <---------> Retrieve Draft Posts <---------> ///////// =====================> 
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
===================== ///////// <---------> ================ <---------> ///////// =====================> 
===================== ///////// <---------> Get Posts with search content <---------> ///////// =====================> 
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
===================== ///////// <---------> Get Posts with search content in a specific blog <---------> ///////// =====================> 
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