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
 * @apiParam {String} Token User's Secret Code.
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
 * @apiParam {String} Token User's Secret Code.
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
 * @apiParam {String} Token User's Secret Code.
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
 * @apiParam {String} Token User's Secret Code.
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
 * @apiParam {String} Token User's Secret Code.
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
 * @apiParam {String} Token User's Secret Code.
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
 * @apiParam {String} Token User's Secret Code.
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
===================== ///////// <---------> ============= <---------> ///////// =====================> 
===================== ///////// <--------->  Check out these blogs   <---------> ///////// =====================> 
===================== ///////// <---------> ============= <---------> ///////// =====================> 
*/

/**
 * @api {get} /Check_out_these_blogs Check out these blogs
 * @apiName getCheckBlog
 * @apiGroup Blog
 * @apiPermission  User, admin, super admin
 * @apidescription retrieve unfollowed blogs as recommendations to be followed
 * @apiVersion 0.0.0
 * 
 * @apiParam {String} Token User's Secret Code.
 * @apiParam {String} user_id  user's ID to know who he/she follows
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
 *                       "data": "[gets some of the blogs not followed by the user]"
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