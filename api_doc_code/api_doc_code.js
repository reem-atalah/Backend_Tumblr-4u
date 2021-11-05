// --------------------------------- User --------------------------------------

/**
 * @api {get} /user/:id Retrieve User information
 * @apiName getUser
 * @apiGroup User
 * @apiSampleRequest api.tumblr.com/user/:id
 * @apiPermission User, admin, super admin
 * @apidescription Gets information of the user account
 * @apiVersion 0.50.1
 * 
 * @apiParam {String} id User's unique ID.
 *
 * @apiExample Example usage:
 * curl -i https://localhost/user/411
 * 
 * @apiSuccess {String} name The user's tumblr short name.
 * @apiSuccess {Number} following The number of blogs the user is following.
 * @apiSuccess {String} default_post_format The default posting format - html, markdown, or raw.
 * @apiSuccess {Number} likes The total count of the user's likes.
 * @apiSuccess {Array} blog Each item is a blog the user has permissions to post to, containing these fields:
 * @apiSuccess {String} blogs.name the short name of the blog.
 * @apiSuccess {String} blogs.url the URL of the blog.
 * @apiSuccess {String} blogs.title the title of the blog.
 * @apiSuccess {Boolean} blogs.primary indicates if this is the user's primary blog.
 * @apiSuccess {Number} blogs.followers total count of followers for this blog.
 * @apiSuccess {String} blogs.tweet indicate if posts are tweeted auto, Y, N.
 * @apiSuccess {String} blogs.facebook indicate if posts are sent to facebook Y, N.
 * @apiSuccess {String} blogs.type indicates whether a blog is public or private.
 * 
 * @apiError UserNotFound No such a user with this id is found
 * @apiErrorExample Response Error:
 * HTTP/1.1 404 UserNotFound
 * {
 *      errro:"No Access Right"
 * }
 * 
 */


/**
 * @api {get} /:user_id/dashboard Retrieve a User's Dashboard
 * @apiName getDashboard
 * @apiGroup  User
 * @apiSampleRequest api.tumblr.com/:user_id/dashboard
 * @apiPermission user, admin, super admin
 * @apidescription go to the dashboard page
 * @apiVersion 0.50.1
 * 
 * @apiParam {String} user_id The ID of the blog user has the post
 * @apiParam {String} token User's token
 *
 * @apiExample Example usage:
 * curl -i https://localhost/411/dashboard
 * 
 * @apiSuccess posts_fields Dashboard responses include the fields returned in /posts responses (with all the various type-specific fields), but without the blog object. Instead, a blog_name field identifies the blog for each post returned.
 *
 * @apiError UserNotFound No such a user with this id is found
 * @apiError BadRequest Can't access the dashboard
 * @apiError Unauthorized you must log in first
 * 
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


// --------------------------------- Blog --------------------------------------

/**
 * @api {get} /blog/:blog_id/info Retrieve Blog information
 * @apiName getBlog
 * @apiGroup Blog
 * @apiSampleRequest api.tumblr.com/blog/:blog_id/info
 * @apiPermission Guest, User, admin, super admin
 * @apidescription retrieve all that can be needed by front end to represent the blog
 * @apiVersion 0.50.1
 * @apiParam {String} blog_id Blog's unique ID.
 * @apiParam {String} [token] User's token
 *
 * @apiExample Example usage:
 * curl -i https://localhost/blog/335/info
 * 
 * @apiSuccess {String} title The display title of the blog.
 * @apiSuccess {String} name The short blog name that appears before tumblr.com in a standard blog hostname.
 * @apiSuccess {Number} updated The time of the most recent post, in seconds since the epoch.
 * @apiSuccess {String} description You guessed it! The blog's description.
 * @apiSuccess {Boolean} [ask] Indicates whether the blog allows questions.
 * @apiSuccess {Boolean} [ask_anon] Indicates whether the blog allows anonymous questions; returned only if ask is true.
 * @apiSuccess {Number} [likes] Number of likes for this user, returned only if this is the user's primary blog and sharing of likes is enabled.
 * @apiSuccess {Boolean} [is_blocked_from_primary] Indicates whether this blog has been blocked by the calling user's primary blog; returned only if there is an authenticated user making this call.
 * @apiSuccess {Array} avatar An array of avatar objects, each a different size, which should each have a width, height, and URL..
 * @apiSuccess {Object} theme The blog's general theme options, which may not be useful if the blog uses a custom theme, and it contains the following fields:
 * @apiSuccess {String} theme.avatar_shape 	"circle" or "square", this is the shape of the mask over the user's avatar.
 * @apiSuccess {String} theme.background_color The intended hex color used for the blog's background color.
 * @apiSuccess {String} theme.body_font The font that the blog has selected as their "body" font.
 * @apiSuccess {Mixed} [theme.header_bounds] If the blog's header should be cropped, this is a comma-separated list of top/right/bottom/left coordinates to use.
 * @apiSuccess {String} theme.header_image The URL of the blog's original, full header image. Note that this may be a default Tumblr header image.
 * @apiSuccess {String} [theme.header_image_focused] If the blog cropped/repositioned their header image, this will be that version, which should be preferred over the original.
 * @apiSuccess {String} [theme.header_image_poster] The URL of a single-frame "poster" version of the blog's header image, if it's an animated image. Note that this may be an empty string if no poster could be made or is not needed.
 * @apiSuccess {String} [theme.header_image_scaled] If the blog only scaled their header image, this will be that scaled version. Note that this may be a default Tumblr header image in the case that they scaled and repositioned it, in which case, use the _focused version.
 * @apiSuccess {Boolean} theme.header_stretch Whether or not the blog's header is meant to be stretched to aspect-fill any given space where it's used.
 * @apiSuccess {String} theme.link_color The intended hex color of any links in the blog's description.
 * @apiSuccess {Boolean} [theme.show_avatar] Whether or not the blog's avatar should be displayed, even if it's given in the API payload.
 * @apiSuccess {Boolean} [theme.show_description] Whether or not the blog's description should be displayed, even if it's given in the API payload.
 * @apiSuccess {Boolean} [theme.show_header_image] Whether or not the blog's header image should be displayed, even if it's given in the API payload.
 * @apiSuccess {Boolean} [theme.show_title] Whether or not the blog's title should be displayed, even if it's given in the API payload.
 * @apiSuccess {String} [theme.title_color] The intended hex color of the blog's title.
 * @apiSuccess {String} [theme.title_font] The intended font to use when displaying the blog's title.
 * @apiSuccess {String} [theme.title_font_weight] The intended font weight to use when displaying the blog's title.
 * @apiSuccess {String} [time_zone] The blog's configured timezone, such as "US/Eastern". Only viewable by blog member. Partial response field ONLY..
 * @apiSuccess {String} [time_zone_offset] The blog's configured timezone as a GMT offset such as "GMT+0800". Only viewable by blog member. Partial response field ONLY..
 * @apiSuccess {Boolean} is_hidden_tumblr Hidden user from Tumblr.
 * @apiSuccess {Boolean} is_hidden_search Hidden user from search.
 * @apiSuccess {Boolean} is_primary Indicate if this blog is the primary blog or not.
 * @apiSuccess {Number} body_color Color of Tumblr, there are twelve colors.
 * @apiSuccess {Boolean} is_deleted Flag indicate, if blog deleted or not.
 * @apiSuccess {String} theme_id Theme object of blog.
 * @apiSuccess {String} created_by User who created this blog.
 * @apiError UserNotFound No such a user with this id is found
 * @apiError BadRequest Can't access the dashboard
 * @apiError Unauthorized you must log in first
 * @apiErrorExample Response Error:
 * HTTP/1.1 400 BAD REQUEST
 * {
 *      errro:"No Access Right"
 * }
 * HTTP/1.1 401 Unauthorized
 * {
 *      errro:"No Access Right"
 * }
 */


 
 /**
 * @api {get} /blog/:blog_id/activity  Retrieve Blog's Activity Feed
 * @apiName getBlogActivityFeed
 * @apiGroup Blog
 * @apiSampleRequest api.tumblr.com/blog/:blog_id/activity
 * @apiPermission User, admin, super admin
 * @apidescription gets the blog's activity page
 * @apiVersion 0.50.1
 * 
 * @apiParam {String} blog_id The ID of the blog's activity'
 * @apiParam {String} token User's token
 * 
 * @apiExample Example usage:
 * curl -i https://localhost/blog/335/activity
 * 
 * @apiSuccess {Notes[]} Notes array of notes
 * @apiSuccess {Followers[]} Fans array of biggest fans/followers
 * @apiSuccess {Post} Top post information
 * @apiSuccess {Number} Total followers to this blog
 * @apiError UserNotFound No such a user with this id is found
 * @apiError BadRequest Can't access the activity
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
 * @api {get} /blog/:blog_id/blocks Retrieve Blog's Blocks
 * @apiName getBlogBlocks
 * @apiGroup Blog
 * @apiSampleRequest api.tumblr.com/blog/:blog_id/blocks
 * @apiPermission User, admin, super admin
 * @apidescription gets the blogs I blocked  
 * @apiVersion 0.50.1
 * @apiParam {Number} blog_id Blog's unique ID.
 * @apiParam {String} token User's token
 *
 * @apiExample Example usage:
 * curl -i https://localhost/blog/335/blocks
 * 
 * @apiSuccess {Array} blocked_tumbleblogs Blog objects that are blocked.
 * 
 * @apiError UserNotFound No such a user with this id is found
 * @apiError BadRequest Can't access the blocks page
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
 * @api {post} /blog/:blog_id/block Block a Blog  
 * @apiName postBlogBlock
 * @apiGroup Blog
 * @apiSampleRequest api.tumblr.com/blog/:blog_id/block
 * @apiPermission User, admin, super admin
 * @apidescription blocks a blog so you can't see the blog or its posts
 * @apiVersion 0.50.1
 * @apiParam {Number} blocking_blog_id Blocking blog id.
 * @apiParam {Number} blocked_blog_id Blocked blog id.(if the blog isn't blocked via a post)
 * @apiParam {Number} [post-id] Post id of blocked blog.(if the blog is blocked via a post)
 * @apiParam {Boolean} [Is_primary] flag indicates that the blocking is primary.
 * @apiParam {String} token User's token
 *
 * @apiExample Example usage:
 * curl -i https://localhost/blog/335/block
 * 
 * @apiSuccess {Boolean} is_deleted Deletion flag.
 * @apiSuccess {Boolean} is_blocked_from_primary changes flag to true .
 *  
 * @apiError UserNotFound No such a user with this id is found
 * @apiError BadRequest Can't block the blog, may be arleady blocked
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
 * @api {post} /blog/:blog_id/remove_blocks Remove a Block
 * @apiName removeBlogBlock
 * @apiGroup Blog
 * @apiSampleRequest api.tumblr.com/blog/:blog_id/remove_blocks
 * @apiPermission User, admin, super admin
 * @apidescription removes a block from a blog
 * @apiVersion 0.50.1
 * @apiParam {Number} blocking_blog_id Blocking blog id.
 * @apiParam {Number} blocked_blog_id Blocked blog id.(if the blog isn't blocked via a post)
 * @apiParam {Number} [post-id] Post id of blocked blog.(if the blog is blocked via a post)
 * @apiParam {String} token User's token
 * 
 * @apiExample Example usage:
 * curl -i https://localhost/blog/335/blocks
 * 
 * @apiSuccess {Boolean} is_blocked_from_primary Removing block flag.
 * 
 * 
 * @apiError UserNotFound No such a user with this id is found
 * @apiError BadRequest Can't remove block, maybe arleady no block
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
 * @api {get} /blog/:blog_id/archive Retrieve Blog's Archive
 * @apiName getBlogLikes
 * @apiGroup Blog
 * @apiSampleRequest api.tumblr.com/blog/:blog_id/archive
 * @apiPermission Guest ,User, admin, super admin
 * @apidescription gets the page of blog's archive page
 * @apiVersion 0.50.1
 * @apiParam {Number} blog_id Blog's unique ID.
 * @apiParam {String} token User's token
 *
 * @apiExample Example usage:
 * curl -i https://localhost/blog/335/archive
 * 
 * @apiSuccess {Posts[]} post make or reblogged in certain timestamp
 * 
 * 
 * @apiError UserNotFound No such a user with this id is found
 * @apiError BlogNotFound No such a blog with this id is found
 * @apiError BadRequest Can't access the archieve
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
 * @api {get} /blog/:blog_id/likes Retrieve Blog's Likes
 * @apiName getBlogLikes
 * @apiGroup Blog
 * 
 * @apiPermission User, admin, super admin
 * @apidescription gets the page of user's likes
 * @apiVersion 0.50.1
 * @apiParam {Number} blog_id Blog's unique ID.
 * @apiParam {String} token User's token
 *
 * @apiExample Example usage:
 * curl -i https://localhost/blog/335/likes
 * 
 * @apiSuccess {Posts[]} liked_posts An array of post objects (posts liked by the user).
 * @apiSuccess {Number} liked_count Total number of liked posts.
 * 
 * 
 * @apiError UserNotFound No such a user with this id is found
 * @apiError BlogNotFound No such a blog with this id is found
 * @apiError BadRequest Can't access the likes page
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
 * @api {get} /blog/:blog_id/following Retrieve Blog's Following
 * @apiName getBlogFollowing
 * @apiGroup Blog
 * @apiPermission User, admin, super admin
 * @apidescription gets a pgae with all blogs who I'm following a blog
 * @apiVersion 0.50.1
 * @apiParam {Number} blog_id Primary Blog ID.
 * @apiParam {String} token User's token
 *
 * @apiExample Example usage:
 * curl -i https://localhost/blog/335/following
 * 
 * @apiSuccess {Following[]} blogs An array of short blog infos that this blog follows, in order from most recently-followed to first.
 * @apiSuccess {Number} total_blogs Total number of followed blogs.
 * 
  * 
 * @apiError UserNotFound No such a user with this id is found
 * @apiError BlogNotFound No such a blog with this id is found
 * @apiError BadRequest Can't access the following page
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
 * @api {get} /blog/:blog_id/followers Retrieve Blog's Followers
 * @apiName getBlogFollowers
 * @apiGroup Blog
 * @apiPermission User, admin, super admin
 * @apidescription gets a pgae with all blogs following a blog
 * @apiVersion 0.50.1
 * @apiParam {Number} blog_id Blog's unique ID.
 * @apiParam {String} token User's token
 *
 * @apiExample Example usage:
 * curl -i https://localhost/blog/335/followers
 * 
 * @apiSuccess {Number} total_users The number of users currently following the blog
 * @apiSuccess {User[]} users Each item is a follower, containing these fields:
 * @apiSuccess {String} [name] The user's name on tumblr.
 * @apiSuccess {Boolean} [following] Whether the caller is following the user.
 * @apiSuccess {String} [url] The URL of the user's primary blog.
 * 
 * @apiError UserNotFound No such a user with this id is found
 * @apiError BlogNotFound No such a blog with this id is found
 * @apiError BadRequest Can't access the followers page
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
 * @api {get} /blog/:blog_id/posts Retrieve Published Posts
 * @apiName getPosts
 * @apiGroup Blog
 * @apiPermission Guest, User, admin, super admin
 * @apidescription gets the puplished posts page of a blog
 * @apiVersion 0.50.1
 * @apiParam {String} blog_id Any blog identifier.
 * @apiParam {String} token User's token
 *
 * @apiExample Example usage:
 * curl -i https://localhost/blog/335/posts
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
 * 
 * 
 * @apiError UserNotFound No such a user with this id is found
 * @apiError BlogNotFound No such a blog with this id is found
 * @apiError BadRequest Can't access the posts page
 * @apiErrorExample Response Error:
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "error":"No Access Right"
 *      }
 */

// --------------------------------- Post --------------------------------------

/**
 * @api {Delete} /blog/:blog_id/:post_id/delete Delete a Post
 * @apiName deletePost
 * @apiSampleRequest api.tumblr.com/blog/:blog_id/:post_id/delete
 * @apiGroup Post
 * @apiPermission User, admin, super admin
 * 
 * @apiExample Example usage:
 * curl -i https://localhost/blog/335/4/delete
 * 
 * @apidescription removes a post for the pister owner
 * @apiVersion 0.50.1
 *
 * @apiParam {String} post_id The ID of the post to delete
 * @apiParam {String} blog_id The ID of the bloghas the post
 * @apiParam {String} token User's token
 * 
 * @apiSuccess {String} is_deleted make the flag true
 * 
 * 
 * @apiError UserNotFound No such a user with this id is found
 * @apiError BlogNotFound No such a blog with this id is found
 * @apiError BadRequest Can't delete the post, maybe arleady deleted
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
 * @api {get} /blog/:blog_id/queue  GetQueuedPosts
 * @apiDescription Gives you a list of the currently queued posts for the specified blog.
 * @apiName getQueuedPosts
 * @apiSampleRequest api.tumblr.com/blog/:blog_id/queue
 * @apiGroup Post
 * @apiPermission User, admin, super admin
 * @apiVersion 0.50.1
 * @apiParam {String} post_id The ID of the post to delete
 * @apiParam {String} blog_id The ID of the bloghas the post
 * @apiParam {String} token User's token
 * 
 * @apiExample Example usage:
 * curl -i https://localhost/blog/335/queue
 * 
 * @apiSuccess {Array} Queued_posts
 * 
 * @apiError UserNotFound No such a user with this id is found
 * @apiError BlogNotFound No such a blog with this id is found
 * @apiError BadRequest Can't access the queued posts page
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
 * 
 */


/**
 * @api {put} /blog/:blog_id/queue/reorder   Reorder Queued Posts
 * @apiDescription This allows you to reorder a post within the queue, moving it after an existing queued post, or to the top.
 * @apiName reorderQueuedPosts
 * @apiSampleRequest api.tumblr.com/blog/:blog_id/queue/reorder
 * @apiGroup Post
 * @apiPermission User, admin, super admin
 * @apiVersion 0.50.1
 * 
 * @apiParam {String} blog_id The ID of the bloghas the post
 * @apiParam {String} post_id Post ID to move.
 * @apiParam {String} [insert_after="0"] Which post ID to move it after, or 0 to make it the first post
 * @apiParam {Array} UnOrdered_Queued_posts all queued posts
 * @apiParam {String} token User's token
 * 
 * @apiExample Example usage:
 * curl -i https://localhost/blog/335/posts/reorder
 * 
 * @apiSuccess {Array} Ordered_Queued_posts change time of each post
 * 
 *  
 * @apiError UserNotFound No such a user with this id is found
 * @apiError BlogNotFound No such a blog with this id is found
 * @apiError BadRequest Can't reorder the posts,maybe it's just one post
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
 * @api {post} /blog/:blog_id/queue/shuffle  Shuffle Queued Posts
 * @apiDescription This randomly shuffles the queue for the specified blog.
 * @apiName shuffleQueuedPosts
 * @apiSampleRequest api.tumblr.com/blog/:blog_id/queue/shuffle
 * @apiGroup Post
 * @apiPermission User, admin, super admin
 * @apiVersion 0.50.1
 * 
 * @apiParam {String} blog_id The ID of the bloghas the post
 * @apiParam {String} [insert_after="0"] Which post ID to move it after, or 0 to make it the first post
 * @apiParam {Array} UnOrdered_Queued_posts all queued posts
 * @apiParam {String} token User's token
 * 
 * @apiExample Example usage:
 * curl -i https://localhost/blog/335/queue/shuffle
 * 
 * @apiSuccess {Array} Ordered_Queued_posts change time of each post after shuffeling
 * 
 * 
 * @apiError UserNotFound No such a user with this id is found
 * @apiError BlogNotFound No such a blog with this id is found
 * @apiError BadRequest Can't shuffle
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
 * @api {get} /blog/:blog_id/draft Retrieve Draft Posts
 * @apiName retrieveDraftPosts
 * @apiGroup Post
 * @apiSampleRequest api.tumblr.com/blog/:blog_id/draft
 * @apiPermission User, admin, super admin
 * @apidescription get the posts which were published as drafts to the owner of the post
 * @apiVersion 0.50.1
 * 
 * @apiParam {String} blog_id The ID of the bloghas the post
 * @apiParam {String} token User's token
 * 
 * @apiExample Example usage:
 * curl -i https://localhost/blog/335/draft
 * 
 * @apiSuccess {Array} Draft_posts array of posts was posted as drafts
 * 
 * @apiError UserNotFound No such a user with this id is found
 * @apiError BlogNotFound No such a blog with this id is found
 * @apiError BadRequest Can't access the drafts posts page
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

/**
 * @api {post} /blog/:blog_id/ask Make Ask Posts
 * @apiName makeAskPosts
 * @apiGroup Ask
 * @apiSampleRequest api.tumblr.com/blog/:blog_id/ask
 * @apiPermission User, admin, super admin
 * @apidescription ask a blog in a post
 * @apiVersion 0.50.1
 * 
 * @apiParam {String} blog_id The ID of the blog has the post
 * @apiParam {String} token User's token
 * @apiParam {String} text text of the question/ask
 * 
 * @apiExample Example usage:
 * curl -i https://localhost/blog/335/ask
 * 
 * @apiSuccess {String} id The ID of the asking/questionniere post
 * @apiSuccess {String} state Indicates the current state of the post (ask)
 * @apiSuccess {String} post_author Author of post, only available when submission is not anonymous
 * @apiSuccess {String} anonymous_name Name on an anonymous ask
 * 
 *  
 * @apiError UserNotFound No such a user with this id is found
 * @apiError BlogNotFound No such a blog with this id is found
 * @apiError BadRequest Can't post ask,maybe no permission for ask or no anonymous ask
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
 * @api {post} /blog/:blog_id/inbox/answer Answer Ask Posts
 * @apiName answerAskPosts
 * @apiGroup Ask
 * @apiSampleRequest api.tumblr.com/blog/:blog_id/inbox/answer
 * @apiPermission User, admin, super admin
 * @apidescription answer the post of ask in the blog dashboard
 * @apiVersion 0.50.1
 * 
 * @apiParam {String} blog_id The ID of the blog has the post
 * @apiParam {String} token User's token
 * @apiParam {String} text answer of the ask
 * @apiParam {String[]} tags Tags applied to the post
 * @apiParam {String} type post type (now, queue,draft,private,schedule)
 * 
 * @apiExample Example usage:
 * curl -i https://localhost/blog/335/inbox/answer
 * 
 * @apiSuccess {boolean} answered return true when post is changed from submission post to different post type
 * 
 * @apiError UserNotFound No such a user with this id is found
 * @apiError BlogNotFound No such a blog with this id is found
 * @apiError BadRequest Can't access the dashboard
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
 * @api {delete} /blog/:blog_id/inbox/delete_ask Delete Ask Posts
 * @apiName seleteAskPosts
 * @apiGroup Ask
 * @apiSampleRequest api.tumblr.com/blog/:blog_id/inbox/delete_ask
 * @apiPermission User, admin, super admin
 * @apidescription delete the ask post, it will never be puplished
 * @apiVersion 0.50.1
 * 
 * @apiParam {String} blog_id The ID of the blog has the ask post
 * @apiParam {String} token User's token
 * 
 * @apiExample Example usage:
 * curl -i https://localhost/blog/335/inbox/delete_ask
 * 
 * @apiSuccess {boolean} is_deleted true if we removed succesfully the submission post
 *  
 * @apiError UserNotFound No such a user with this id is found
 * @apiError BlogNotFound No such a blog with this id is found
 * @apiError BadRequest Can't delete tha ask,may be answered or arleady deleted
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