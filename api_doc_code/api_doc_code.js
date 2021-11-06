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

/**
 * @api {post} /user/:user_id/follow_tag Follow Tag
 * @apiName followTag
 * @apiGroup User
 * @apiSampleRequest api.tumblr.com/user/:user_id/follow_tag
 * @apiPermission User, admin, super admin
 * @apidescription can share with anyone, we'll send post url
 * @apiVersion 0.50.1
 * 
 * @apiParam {String} user_id The ID of the user wants to follow a tag 
 * @apiParam {String} token User's token
 * @apiParam {String} tag_text the tag
 * 
 * 
 * @apiExample Example usage:
 * curl -i https://localhost/user/300/follow_tag
 * 
 * @apiSuccess {boolean}  returns true when the tag is successfully put in the folllowed tags
 * 
 * @apiError UserNotFound No such a user with this id is found
 * @apiError BlogNotFound No such a blog with this id is found
 * @apiError BadRequest Can't access the tag,or doesn't exist 
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
 * @api {post} /user/:user_id/get_followed_tags  Tags Followed
 * @apiName getFollowedTags
 * @apiGroup User
 * @apiSampleRequest api.tumblr.com/user/:user_id/get_followed_tags
 * @apiPermission User, admin, super admin
 * @apidescription get the tag followed by the user, used in search
 * @apiVersion 0.50.1
 * 
 * @apiParam {String} user_id The ID of the user followed tags
 * @apiParam {String} token User's token
 * 
 * 
 * @apiExample Example usage:
 * curl -i https://localhost/user/300/get_followed_tags
 * 
 * @apiSuccess {String[]} tags array of strings have all tags followed by the user
 * 
 * @apiError UserNotFound No such a user with this id is found
 * @apiError BlogNotFound No such a blog with this id is found
 * @apiError BadRequest Can't access the tag,or doesn't exist 
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

// --------------------------------- Blog --------------------------------------


/**
 * @api {delete} /blog/:blog_id/remove_blog Remove Blog
 * @apiName blogRemover
 * @apiGroup Blog
 * @apiSampleRequest api.tumblr.com/blog/:blog_id/remove_blog 
 * @apiPermission User, admin, super admin
 * @apidescription removes a post
 * @apiVersion 0.50.1
 * 
 * @apiParam {String} blog_id The ID of the blog wanted to be removed
 * @apiParam {String} token User's token
 * 
 * 
 * @apiExample Example usage:
 * curl -i https://localhost/blog/34/remove_blog
 * 
 * @apiSuccess {boolean}  returns true when the blog is successfully removed
 * 
 * @apiError UserNotFound No such a user with this id is found
 * @apiError BlogNotFound No such a blog with this id is found
 * @apiError BadRequest Can't access the blog or the blog is arleady deleted or doesn't exist
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


/**
 * @api {post} /blog/:blog-id/follow Follow a blog
 * @apiName followBlogPost
 * @apiGroup Blog
 * @apiSampleRequest api.tumblr.com/blog/:blog_id/follow
 * @apiPermission User, admin, super admin
 * 
 * @apiExample Example usage:
 * curl -i https://localhost/blog/335/follow
 * 
 * @apidescription Follow a blog
 * @apiVersion 0.50.1
 *
 * @apiParam {Number} following-blog-id Primary blog ID.
 * @apiParam {Number} followed-blog-id ID of the followed blog.
 *
 * @apiSuccess {Object} blog The followed blog info.
 * 
 * @apiError BlogNotFound No such a blog with this id is found.
 * @apiError BadRequest Can't follow.
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
 * @api {post} /blog/:blog-id/unfollow Unfollow a blog
 * @apiName unfollowBlogPost
 * @apiGroup Blog
 * @apiSampleRequest api.tumblr.com/blog/:blog_id/unfollow
 * @apiPermission User, admin, super admin
 * 
 * @apiExample Example usage:
 * curl -i https://localhost/blog/335/unfollow
 * 
 * @apidescription Unfollow a blog
 * @apiVersion 0.50.1
 *
 * @apiParam {Number} following-blog-id Primary blog ID.
 * @apiParam {Number} unfollowed-blog-id ID of the followed blog.
 *
 * @apiSuccess Returns 200: OK (blog successfully unfollowed) or a 404 (if the blog was not found).
 * 
 * @apiError BlogNotFound No such a blog with this id is found.
 * @apiError BadRequest Can't unfollow.
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
 * @api {post} /blog/:blog-id/pfiltered_tags Post tag filters
 * @apiName postTagFilters
 * @apiGroup Blog
 * @apiSampleRequest api.tumblr.com/blog/:blog_id/filtered_tags
 * @apiPermission User, admin, super admin
 * 
 * @apiExample Example usage:
 * curl -i https://localhost/blog/335/pfiltered_tags
 * 
 * @apidescription Post tag filters
 * @apiVersion 0.50.1
 *
 * @apiParam {Number} blog-id Blog ID to filter by tags.
 * @apiParam {Array} filtered_tags One or more than one tag string to add to your list of filters.
 *
 * @apiSuccess Returns 201 Created on success, with an empty response object.
 * 
 * @apiError BlogNotFound No such a blog with this id is found.
 * @apiError BadRequest If given an invalid/empty tag to filter.
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
 * @api {get} /blog/:blog-id/gfiltered_tags Get tag filters
 * @apiName getTagFilters
 * @apiGroup Blog
 * @apiSampleRequest api.tumblr.com/blog/:blog_id/filtered_tags
 * @apiPermission User, admin, super admin
 * 
 * @apiExample Example usage:
 * curl -i https://localhost/blog/335/gfiltered_tags
 * 
 * @apidescription Get tag filters
 * @apiVersion 0.50.1
 *
 * @apiParam {Number} blog-id Blog ID to filter by tags.
 *
 * @apiSuccess {Array} filtered_tags Your list of filters.
 * 
 * @apiError BlogNotFound No such a blog with this id is found.
 * @apiError BadRequest Can't get filters.
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
 * @api {delete} /blog/:blog-id/dfiltered_tags Delete tag filters
 * @apiName deleteTagFilters
 * @apiGroup Blog
 * @apiSampleRequest api.tumblr.com/blog/:blog_id/filtered_tags
 * @apiPermission User, admin, super admin
 * 
 * @apiExample Example usage:
 * curl -i https://localhost/blog/335/dfiltered_tags
 * 
 * @apidescription Delete tag filters
 * @apiVersion 0.50.1
 *
 * @apiParam {Number} blog-id Blog ID to filter by tags.
 * @apiParam {String} tag Tag to stop filtering.
 *
 * @apiSuccess Returns 201 Created on success, with an empty response object.
 * 
 * @apiError BlogNotFound No such a blog with this id is found.
 * @apiError BadRequest If given an invalid/empty tag to delete.
 * @apiError Unauthorized you must log in first
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
 * @api {post} /blog/:blog-id/pfiltered_content Post content filters
 * @apiName postContentFilters
 * @apiGroup Blog
 * @apiSampleRequest api.tumblr.com/blog/:blog_id/filtered_content
 * @apiPermission User, admin, super admin
 * 
 * @apiExample Example usage:
 * curl -i https://localhost/blog/335/pfiltered_content
 * 
 * @apidescription Post content filters
 * @apiVersion 0.50.1
 *
 * @apiParam {Number} blog-id Blog ID to filter by content.
 * @apiParam {Array} filtered_content One or more than one string to add to your list of filters.
 *
 * @apiSuccess Returns 201 Created on success, with an empty response object.
 * 
 * @apiError BlogNotFound No such a blog with this id is found.
 * @apiError BadRequest If given an invalid/empty string to filter, or if given an already-filtered string.
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
 * @api {get} /blog/:blog-id/gfiltered_tags Get content filters
 * @apiName getContentFilters
 * @apiGroup Blog
 * @apiSampleRequest api.tumblr.com/blog/:blog_id/filtered_content
 * @apiPermission User, admin, super admin
 * 
 * @apiExample Example usage:
 * curl -i https://localhost/blog/335/gfiltered_content
 * 
 * @apidescription Get content filters
 * @apiVersion 0.50.1
 *
 * @apiParam {Number} blog-id Blog ID to filter by content.
 *
 * @apiSuccess {Array} filtered_tags Your list of filters.
 * 
 * @apiError BlogNotFound No such a blog with this id is found.
 * @apiError BadRequest Can't get filters.
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
 * @api {delete} /blog/:blog-id/dfiltered_tags Delete content filters
 * @apiName deleteContentFilters
 * @apiGroup Blog
 * @apiSampleRequest api.tumblr.com/blog/:blog_id/filtered_content
 * @apiPermission User, admin, super admin
 * 
 * @apiExample Example usage:
 * curl -i https://localhost/blog/335/dfiltered_content
 * 
 * @apidescription Delete tag filters
 * @apiVersion 0.50.1
 *
 * @apiParam {Number} blog-id Blog ID to filter by content.
 * @apiParam {String} filtered_content Content filter string to remove.
 *
 * @apiSuccess Returns 201 Created on success, with an empty response object.
 * 
 * @apiError BlogNotFound No such a blog with this id is found.
 * @apiError BadRequest If given an invalid/empty content filter to delete.
 * @apiError Unauthorized you must log in first
 * @apiErrorExample Response Error:
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "error":"No Access Right"
 *      }
 *      HTTP/1.1 401 Unauthorized
 *      {
 *          "error":"No Access Right"
 */


// --------------------------------- Post --------------------------------------




/**
 * @api {post} /posts/:post_blog_id/:post_id/remove_comment Remove Comments
 * @apiName commentRemover
 * @apiGroup Post
 * @apiSampleRequest api.tumblr.com/posts/:post_blog_id/:post_id/remove_comment
 * @apiPermission User, admin, super admin
 * @apidescription removes the comment on a post
 * @apiVersion 0.50.1
 * 
 * @apiParam {String} post_id The ID of the post 
 * @apiParam {String} token User's token
 * 
 * 
 * @apiExample Example usage:
 * curl -i https://localhost/post/4/344/remove_comment
 * 
 * @apiSuccess {boolean}  returns true when the comment is successfully removed
 * 
 * @apiError UserNotFound No such a user with this id is found
 * @apiError BlogNotFound No such a blog with this id is found
 * @apiError BadRequest Can't access the post or the comment is arleady removed
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
 * @api {get} /posts/:post_id/:count_reblogs Count Reblogs
 * @apiName countReblogs
 * @apiGroup Post
 * @apiSampleRequest api.tumblr.com/posts/:post_id/:count_reblogs
 * @apiPermission User, admin, super admin
 * @apidescription count the number of reblogs of a certain post
 * @apiVersion 0.50.1
 * 
 * @apiParam {String} post_id The ID of the post 
 * @apiParam {String} token User's token
 * 
 * 
 * @apiExample Example usage:
 * curl -i https://localhost/post/4/count_reblogs
 * 
 * @apiSuccess {number}  count return number of reblogs of a post
 * 
 * @apiError UserNotFound No such a user with this id is found
 * @apiError BlogNotFound No such a blog with this id is found
 * @apiError BadRequest Can't access the post
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
 * @api {post} /post/:post_blog_id/:commenter_blog_id/make_comment Make Comment
 * @apiName makeComment
 * @apiGroup Post
 * @apiSampleRequest api.tumblr.com/post/:post_blog_id/:commenter_blog_id/make_comment
 * @apiPermission User, admin, super admin
 * @apidescription a commenter blog can make comments on any posts
 * @apiVersion 0.50.1
 * 
 * @apiParam {String} post_blog_id The ID of the post 
 * @apiParam {String} token User's token
 * @apiParam {String} text comment text  
 * @apiParam {String} commenter_id id of the blog writting comment
 * 
 * 
 * @apiExample Example usage:
 * curl -i https://localhost/post/4/344/make_comment
 * 
 * @apiSuccess {boolean} commented true when comment is posted
 * 
 * @apiError UserNotFound No such a user with this id is found
 * @apiError BlogNotFound No such a blog with this id is found
 * @apiError BadRequest Can't access the post, post maybe deleted
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
 * @api {Delete} /blog/:blog_id/:post_id/delete Delete a Post
 * @apiName deletePost
 * @apiSampleRequest api.tumblr.com/blog/:blog_id/:post_id/delete
 * @apiGroup Post
 * @apiPermission User, admin, super admin
 * 
 * @apiExample Example usage:
 * curl -i https://localhost/blog/335/4/delete
 * 
 * @apidescription removes a post for the poster owner
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


/**
 * @api {post} /posts/:post_id/share_with Share With
 * @apiName sharePostWith
 * @apiGroup Post
 * @apiSampleRequest api.tumblr.com/posts/:post_id/share_with
 * @apiPermission User, admin, super admin
 * @apidescription can share with anyone, we'll send post url
 * @apiVersion 0.50.1
 * 
 * @apiParam {String} post_id The ID of the post 
 * @apiParam {String} token User's token
 * 
 * 
 * @apiExample Example usage:
 * curl -i https://localhost/posts/344/share_with
 * 
 * @apiSuccess {boolean}  returns true when the link is successfully shared and recieved 
 * 
 * @apiError UserNotFound No such a user with this id is found
 * @apiError BlogNotFound No such a blog with this id is found
 * @apiError BadRequest Can't access the post 
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
 * @api {post} /blog/:blog-id/post Create a New Blog Post (Legacy)
 * @apiName postBlogPost
 * @apiGroup Post
 * @apiSampleRequest api.tumblr.com/blog/:blog_id/post
 * @apiPermission User, admin, super admin
 * 
 * @apiExample Example usage:
 * curl -i https://localhost/blog/335/4/post
 * 
 * @apidescription Create a New Blog Post (Legacy), one of the following types: text, photo, quote, link, chat, audio, video.
 * @apiVersion 0.50.1
 *
 * @apiParam {Number} blog-id ID of the blog that the post will be created in.
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
 * @apiSuccess {String} response Returns 201: Created or an error code.
 * 
 * @apiError BadRequest Can't post.
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
 * @api {post} /blog/:blog-id/:post-id/edit Edit a Blog Post (Legacy)
 * @apiName editBlogPost
 * @apiGroup Post
 * @apiSampleRequest api.tumblr.com/blog/:blog_id/post/edit
 * @apiPermission User, admin, super admin
 * 
 * @apiExample Example usage:
 * curl -i https://localhost/post/335/4/edit
 * 
 * @apidescription Edit a Blog Post (Legacy)
 * @apiVersion 0.50.1
 *
 * @apiParam {String} request_parameters These parameters are in addition to the common parameters listed under /post.
 * @apiParam {Number} post-id The ID of the post to edit.
 *
 * @apiSuccess {String} response Returns 200: OK (successfully edited) or an error code.
 * 
 * @apiError BadRequest Can't edit.
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
 * @api {post} /blog/:blog-id/:post-id/reblog Reblog a Post (Legacy)
 * @apiName reblogBlogPost
 * @apiGroup Post
 * @apiSampleRequest api.tumblr.com/blog/:blog_id/post/reblog
 * @apiPermission User, admin, super admin
 * 
 * @apiExample Example usage:
 * curl -i https://localhost/post/335/4/reblog
 * 
 * @apidescription Reblog a Post (Legacy)
 * @apiVersion 0.50.1
 *
 * @apiParam {String} request_parameters These parameters are in addition to the common parameters listed under /post.
 * @apiParam {Number} post-id The ID of the rebloged post.
 * @apiParam {String} [description] Optional description on the rebloged post.
 *
 * @apiSuccess Returns 201: Created or an error code.
 * 
 * @apiError BadRequest Can't reblog.
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
 * @api {get} /blog/:blog-id/:post-id/notes Get notes for a specific Post
 * @apiName getBlogPostNotes
 * @apiGroup Post
 * @apiSampleRequest api.tumblr.com/blog/:blog_id/:post-id/notes
 * @apiPermission User, admin, super admin
 * 
 * @apiExample Example usage:
 * curl -i https://localhost/post/335/4/notes
 * 
 * @apidescription Get notes for a specific Post
 * @apiVersion 0.50.1
 *
 * @apiParam {Number} blog-id The ID of the blog that have the post to get its notes.
 * @apiParam {Number} post-id The ID of the post to fetch notes for.
 *
 * @apiSuccess {Array} notes An array of note objects.
 * 
 * @apiError BadRequest Can't get notes.
 * @apiErrorExample Response Error:
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "error":"No Access Right"
 *      }
 */


/**
 * @api {post} /blog/:blog-id/:post-id/like Like a blog post
 * @apiName likeBlogPost
 * @apiGroup Post
 * @apiSampleRequest api.tumblr.com/blog/:blog_id/:post-id/like
 * @apiPermission User, admin, super admin
 * 
 * @apiExample Example usage:
 * curl -i https://localhost/post/335/4/like
 * 
 * @apidescription Like a blog post
 * @apiVersion 0.50.1
 *
 * @apiParam {Number} blog-id Primary blog ID (only primary blogs can like posts).
 * @apiParam {Number} post-id The ID of the liked post.
 *
 * @apiSuccess Returns 200: OK (post successfully liked ) or a 404 (post ID was not found)
 * 
 * @apiError PostNotFound No such a blog with this id is found.
 * @apiError BadRequest Can't like.
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
 * @api {post} /blog/:blog-id/:post-id/unlike Unlike a blog post
 * @apiName unlikeBlogPost
 * @apiGroup Post
 * @apiSampleRequest api.tumblr.com/blog/:blog_id/:post-id/unlike
 * @apiPermission User, admin, super admin
 * 
 * @apiExample Example usage:
 * curl -i https://localhost/post/335/4/unlike
 * 
 * @apidescription Unlike a blog post
 * @apiVersion 0.50.1
 *
 * @apiParam {Number} blog-id Primary blog ID (only primary blogs can unlike posts).
 * @apiParam {Number} post-id The ID of the post to unlike.
 *
 * @apiSuccess Returns 200: OK (post successfully unliked ) or a 404 (post ID was not found)
 * 
 * @apiError PostNotFound No such a blog with this id is found.
 * @apiError BadRequest Can't unlike.
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
 * @api {get} /blog/post/:search_content Get Posts with search content
 * @apiName getPostsWithSearchContent
 * @apiGroup Post
 * @apiSampleRequest api.tumblr.com/post/:search_content
 * @apiPermission User, admin, super admin
 * 
 * @apiExample Example usage:
 * curl -i https://localhost/blog/335/post/search_content
 * 
 * @apidescription Get Posts with search content
 * @apiVersion 0.50.1
 *
 * @apiParam {String} search_content The content in the posts you'd like to retrieve.
 *
 * @apiSuccess {post[]} search_content_posts the posts with the search content.
 * 
 * @apiError PostNotFound No such a post with this id is found.
 * @apiError BadRequest can't get posts with this search content.
 * @apiError Unauthorized you must log in first
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
 * @api {get} /blog/:blog-id/post/:search_content Get Posts with search content in a specific blog
 * @apiName getPostsWithSearchContentInBlog
 * @apiGroup Post
 * @apiSampleRequest api.tumblr.com/post/:search_content
 * @apiPermission User, admin, super admin
 * 
 * @apiExample Example usage:
 * curl -i https://localhost/blog/blog-id/335/post/search_content
 * 
 * @apidescription Get Posts with search content in a specific blog
 * @apiVersion 0.50.1
 *
 * @apiParam {Number} blog-id The ID of the blog to search in.
 * @apiParam {String} search_content The content in the posts you'd like to retrieve.
 *
 * @apiSuccess {post[]} search_content_posts the posts with the search content.
 * 
 * @apiError PostNotFound No such a post with this id is found.
 * @apiError BadRequest can't get posts with this search content.
 * @apiError Unauthorized you must log in first
 * @apiErrorExample Response Error:
 *      HTTP/1.1 400 BAD REQUEST
 *      {
 *          "error":"No Access Right"
 *      }
 *      HTTP/1.1 401 Unauthorized
 *      {
 *          "error":"No Access Right"
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

/*--------------------------------------------------*/
/* =========================== ///  Changing Your Email Address  /// ============================ */
/*--------------------------------------------------*/

/**
 * @api {put} /user/email/ Changing Your Email Address.
 * 
 * @apiName changeUserEmail
 * @apiGroup User's methods
 * @apiVersion 0.0.0 
 * @apiPermission User
 * 
 * @apiParam {String} Token User's token
 * @apiParam {String} Email User's new email
 * @apiParam {String} Password User's password
 *
 * @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "message": "Email Changed Successfully"
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


/*--------------------------------------------------*/
/* =========================== ///  Resetting your password  /// ============================ */
/*--------------------------------------------------*/

/**
 * @api {put} /user/resetPassword/ Resetting your password.
 * 
 * @apiName resetPassword
 * @apiGroup User's methods
 * @apiVersion 0.0.0 
 * @apiPermission User
 * 
 * @apiParam {String} Token User's token
 * @apiParam {String} Current_Password Current user's password
 * @apiParam {String} New_Password New user's password
 *
 * @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "message": "Password Updated Successfully"
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


/*--------------------------------------------------*/
/* =========================== ///  Deleting Your Account  /// ============================ */
/*--------------------------------------------------*/

/**
 * @api {delete} /user/deleteAccount/ Deleting Your Account.
 * 
 * @apiName deleteAccount
 * @apiGroup User's methods
 * @apiVersion 0.0.0 
 * @apiPermission User
 * 
 * @apiParam {String} Token User's token
 * @apiParam {String} Email User's email
 * @apiParam {String} Password User's password
 *
 * @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "message": "Account Deleted Successfully"
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


/*--------------------------------------------------*/
/* =========================== ///  Email Verification  /// ============================ */
/*--------------------------------------------------*/

/**
 * @api {put} /user/emailVerification/:Token Email Verification.
 * 
 * @apiName emailVerification
 * @apiGroup User's methods
 * @apiVersion 0.0.0 
 * @apiPermission User
 * 
 *
 * @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "message": "Email Verifid Successfully"
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


/*--------------------------------------------------*/
/* =========================== ///  Access and manage data associated with your account  /// ============================ */
/*--------------------------------------------------*/

/**
 * @api {get} /user/data/ Access and manage data associated with your account.
 * 
 * @apiName accessdData
 * @apiGroup User's methods
 * @apiVersion 0.0.0 
 * @apiPermission User
 * 
 * @apiParam {String} Token User's token
 *
 *  @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "message": "Data Will Be Sent Via Email"
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
===================================================================================================
===================================================================================================
===================================================================================================
===================================================================================================
===================================================================================================
===================================================================================================
===================================================================================================
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

/*--------------------------------------------------*/
/* =========================== ///  Changing Your Email Address  /// ============================ */
/*--------------------------------------------------*/

/**
 * @api {put} /user/email/ Changing Your Email Address.
 * 
 * @apiName changeUserEmail
 * @apiGroup User's methods
 * @apiVersion 0.0.0 
 * @apiPermission User
 * 
 * @apiParam {String} Token User's token
 * @apiParam {String} Email User's new email
 * @apiParam {String} Password User's password
 *
 * @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "message": "Email Changed Successfully"
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


/*--------------------------------------------------*/
/* =========================== ///  Update password  /// ============================ */
/*--------------------------------------------------*/

/**
 * @api {put} /user/updatePassword/ Update your password.
 * 
 * @apiName update Password
 * @apiGroup User's methods
 * @apiVersion 0.0.0 
 * @apiPermission User
 * 
 * @apiParam {String} Token User's token
 * @apiParam {String} Current_Password Current user's password
 * @apiParam {String} New_Password New user's password
 *
 * @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "message": "Password Updated Successfully"
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


/*--------------------------------------------------*/
/* =========================== ///  Deleting Your Account  /// ============================ */
/*--------------------------------------------------*/

/**
 * @api {delete} /user/deleteAccount/ Deleting Your Account.
 * 
 * @apiName deleteAccount
 * @apiGroup User's methods
 * @apiVersion 0.0.0 
 * @apiPermission User
 * 
 * @apiParam {String} Token User's token
 * @apiParam {String} Email User's email
 * @apiParam {String} Password User's password
 *
 * @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "message": "Account Deleted Successfully"
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


/*--------------------------------------------------*/
/* =========================== ///  Email Verification  /// ============================ */
/*--------------------------------------------------*/

/**
 * @api {put} /user/emailVerification/:Token Email Verification.
 * 
 * @apiName emailVerification
 * @apiGroup User's methods
 * @apiVersion 0.0.0 
 * @apiPermission User
 * 
 *
 * @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "message": "Email Verifid Successfully"
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


/*--------------------------------------------------*/
/* =========================== ///  Access and manage data associated with your account  /// ============================ */
/*--------------------------------------------------*/

/**
 * @api {get} /user/data/ Access and manage data associated with your account.
 * 
 * @apiName accessdData
 * @apiGroup User's methods
 * @apiVersion 0.0.0 
 * @apiPermission User
 * 
 * @apiParam {String} Token User's token
 *
 *  @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "message": "Data Will Be Sent Via Email"
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

/*--------------------------------------------------*/
/* =========================== ///  Get User Settings  /// ============================ */
/*--------------------------------------------------*/

/**
 * @api {get} /user/settings/ Get User Settings.
 * 
 * @apiName userSettings
 * @apiGroup User's methods
 * @apiVersion 0.0.0 
 * @apiPermission User
 * 
 * @apiParam {String} Token User's token
 *
 *  @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "message": "{ Object Contains User Settings }"
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


/*--------------------------------------------------*/
/* =========================== ///  Forgot Password  /// ============================ */
/*--------------------------------------------------*/

/**
 * @api {get} /user/forgot_password/ Forgot Password.
 * 
 * @apiName forgotPassword
 * @apiGroup User's methods
 * @apiVersion 0.0.0 
 * @apiPermission User
 * 
 * @apiParam {String} Email User's email.
 *
 *  @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "message": "{ Send Email To Reset Password }"
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


/*--------------------------------------------------*/
/* =========================== ///  Reset Password  /// ============================ */
/*--------------------------------------------------*/

/**
 * @api {put} /user/reset_password/:Token Reset Password.
 * 
 * @apiName resetPassword
 * @apiGroup User's methods
 * @apiVersion 0.0.0 
 * @apiPermission User
 * 
 *  @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "message": "{ Password Updated Successfully }"
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
===================================================================================================
===================================================================================================
===================================================================================================
===================================================================================================
===================================================================================================
===================================================================================================
===================================================================================================
*/

/*--------------------------------------------------*/
/* =========================== ///  Create a new blog  /// ============================ */
/*--------------------------------------------------*/

/**
 * @api {post} /new/blog/ Create a new blog.
 * 
 * @apiName newBlog
 * @apiGroup Blog's methods
 * @apiVersion 0.0.0 
 * @apiPermission User
 * 
 * @apiParam {String} Token User's token
 * @apiParam {String} Title Blog's Title
 * @apiParam {String} Url Blog's Url
 * @apiParam {String} [Password] Blog's password
 *
 *  @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "message": "Blog Created Successfully"
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


/*--------------------------------------------------*/
/* =========================== ///  Adding Members  /// ============================ */
/*--------------------------------------------------*/

/**
 * @api {post} /members/ Adding members.
 * 
 * @apiName addMember
 * @apiGroup Blog's methods
 * @apiVersion 0.0.0 
 * @apiPermission User
 * 
 * @apiParam {String} Token User's token
 * @apiParam {String} Member Member's email
 *
 *  @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "message": "Invitation Sent Via Email"
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

/*--------------------------------------------------*/
/* =========================== ///  Join Group  /// ============================ */
/*--------------------------------------------------*/

/**
 * @api {post} /join/:Token Join Group.
 * 
 * @apiName joinGroup
 * @apiGroup Blog's methods
 * @apiVersion 0.0.0 
 * @apiPermission User
 * 
 *  @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "message": "Member Added Successfully"
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

/*--------------------------------------------------*/
/* =========================== ///  Remove Member  /// ============================ */
/*--------------------------------------------------*/

/**
 * @api {delete} /members/ Remove member.
 * 
 * @apiName removeMember
 * @apiGroup Blog's methods
 * @apiVersion 0.0.0 
 * @apiPermission User
 * 
 * @apiParam {String} Token User's token
 * @apiParam {String} Member Blog's Id
 *
 *  @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "message": "Blog Removed Successfully"
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

/*--------------------------------------------------*/
/* =========================== ///  Promote To Admin  /// ============================ */
/*--------------------------------------------------*/

/**
 * @api {put} /members/ Promote to Admin.
 * 
 * @apiName promoteBlog
 * @apiGroup Blog's methods
 * @apiVersion 0.0.0 
 * @apiPermission User
 * 
 * @apiParam {String} Token User's token
 * @apiParam {String} Member Blog's Id
 *
 * @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "message": "Blog Promoted To Admin Successfully"
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


/*--------------------------------------------------*/
/* =========================== ///  Leave This Blog  /// ============================ */
/*--------------------------------------------------*/

/**
 * @api {delete} /members/leave/ Leave this blog.
 * 
 * @apiName leaveBlog
 * @apiGroup Blog's methods
 * @apiVersion 0.0.0 
 * @apiPermission User
 * 
 * @apiParam {String} Token User's token
 * @apiParam {String} Blog's group Id
 *
 * @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "message": "Blog Leave Group Successfully"
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


/*--------------------------------------------------*/
/* =========================== ///  Get Blog Settings  /// ============================ */
/*--------------------------------------------------*/

/**
 * @api {get} /blog/appearance/ Get Blog Settings.
 * 
 * @apiName blogSettings
 * @apiGroup Blog's methods
 * @apiVersion 0.0.0 
 * @apiPermission User
 * 
 * @apiParam {String} Token User's token
 * @apiParam {String} Id Blog's Id
 *
 *  @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "message": "{ Object Contains Blog Settings }"
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

/*--------------------------------------------------*/
/* =========================== ///  Edit Blog Settings  /// ============================ */
/*--------------------------------------------------*/

/**
 * @api {put} /blog/appearance/ Edit Blog Settings.
 * 
 * @apiName eidtBlogSettings
 * @apiGroup Blog's methods
 * @apiVersion 0.0.0 
 * @apiPermission User
 * 
 * @apiParam {String} Token User's token
 * @apiParam {String} Id Blog's Id
 * @apiParam {String} New_Settings Blog's new settings
 *
 *  @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "message": "Settings updated successfully"
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


/*--------------------------------------------------*/
/* =========================== ///  Get Blog Theme  /// ============================ */
/*--------------------------------------------------*/

/**
 * @api {get} /blog/theme/ Get Blog's Theme.
 * 
 * @apiName blogTheme
 * @apiGroup Blog's methods
 * @apiVersion 0.0.0 
 * @apiPermission User
 * 
 * @apiParam {String} Token User's token
 * @apiParam {String} Id Blog's Id
 *
 *  @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "message": "Object Contains Blog Theme"
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

/*--------------------------------------------------*/
/* =========================== ///  Edit Blog Theme  /// ============================ */
/*--------------------------------------------------*/

/**
 * @api {put} /blog/theme/ Edit Blog Theme.
 * 
 * @apiName eidtBlogTheme
 * @apiGroup Blog's methods
 * @apiVersion 0.0.0 
 * @apiPermission User
 * 
 * @apiParam {String} Token User's token
 * @apiParam {String} Id Blog's Id
 * @apiParam {String} New_Theme Blog's new theme
 *
 *  @apiSuccessExample Response Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "message": "Theme updated successfully"
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
===================================================================================================
===================================================================================================
===================================================================================================
===================================================================================================
===================================================================================================
===================================================================================================
===================================================================================================
*/