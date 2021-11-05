// --------------------------------- User --------------------------------------

/**
 * @api {get} /user/:id Retrieve User information
 * @apiName getUser
 * @apiGroup User
 * @apiVersion 0.50.1
 * 
 * @apiParam {String} id User's unique ID.
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
 */


/**
 * @api {get} /:user_id/:dashboard Retrieve a User's Dashboard
 * @apiName getDashboard
 * @apiGroup User
 * @apiVersion 0.50.1
 * 
 * @apiParam {String} user_id The ID of the blog user has the post
 * @apiParam {String} token User's token
 *
 * @apiSuccess posts_fields Dashboard responses include the fields returned in /posts responses (with all the various type-specific fields), but without the blog object. Instead, a blog_name field identifies the blog for each post returned.
 */


// --------------------------------- Blog --------------------------------------

/**
 * @api {get} /blog/:blog_id/info Retrieve Blog information
 * @apiName getBlog
 * @apiGroup Blog
 *@apiVersion 0.50.1
 * @apiParam {String} blog_id Blog's unique ID.
 * @apiParam {String} [token] User's token
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
 */

 
 /**
 * @api {get} /blog/:blog_id/activity  Retrieve Blog's Activity Feed
 * @apiName getBlogActivityFeed
 * @apiGroup Blog
 * @apiVersion 0.50.1
 * 
 * @apiParam {String} blog_id The ID of the blog's activity'
 * @apiParam {String} token User's token
 * 
 * @apiSuccess {Notes[]} Notes array of notes
 * @apiSuccess {Followers[]} Fans array of biggest fans/followers
 * @apiSuccess {Post} Top post information
 * @apiSuccess {Number} Total followers to this blog
*/



/**
 * @api {get} /blog/:blog_id/avatar Retrieve a Blog Avatar
 * @apiName getBlogAvatar
 * @apiGroup Blog
 *@apiVersion 0.50.1
 * @apiParam {Number} blog_id Blog's unique ID.
 * @apiParam {String} [token] User's token
 *
 * @apiSuccess {String} avatar_url The URL of the avatar image. 
 */


/**
 * @api {get} /blog/:blog_id/blocks Retrieve Blog's Blocks
 * @apiName getBlogBlocks
 * @apiGroup Blog
 * @apiVersion 0.50.1
 * @apiParam {Number} blog_id Blog's unique ID.
 * @apiParam {String} token User's token
 *
 * @apiSuccess {Array} blocked_tumbleblogs Blog objects that are blocked.
 */


/**
 * @api {post} /blog/:blog_id/blocks Block a Blog  
 * @apiName postBlogBlock
 * @apiGroup Blog
 * @apiVersion 0.50.1
 * @apiParam {Number} blocking_blog_id Blocking blog id.
 * @apiParam {Number} blocked_blog_id Blocked blog id.(if the blog isn't blocked via a post)
 * @apiParam {Number} [post-id] Post id of blocked blog.(if the blog is blocked via a post)
 * @apiParam {Boolean} [Is_primary] flag indicates that the blocking is primary.
 * @apiParam {String} token User's token
 *
 * @apiSuccess {Boolean} is_deleted Deletion flag.
 * @apiSuccess {Boolean} is_blocked_from_primary changes flag to true .
 */


/**
 * @api {post} /blog/:blog_id/blocks Remove a Block
 * @apiName removeBlogBlock
 * @apiGroup Blog
 * @apiVersion 0.50.1
 * @apiParam {Number} blocking_blog_id Blocking blog id.
 * @apiParam {Number} blocked_blog_id Blocked blog id.(if the blog isn't blocked via a post)
 * @apiParam {Number} [post-id] Post id of blocked blog.(if the blog is blocked via a post)
 * @apiParam {String} token User's token

 * @apiSuccess {Boolean} is_blocked_from_primary Removing block flag.
 */


/**
 * @api {get} /blog/:blog_id/likes Retrieve Blog's Likes
 * @apiName getBlogLikes
 * @apiGroup Blog
 * @apiVersion 0.50.1
 * @apiParam {Number} blog_id Blog's unique ID.
 * @apiParam {String} token User's token
 *
 * @apiSuccess {Posts[]} liked_posts An array of post objects (posts liked by the user).
 * @apiSuccess {Number} liked_count Total number of liked posts.
 */


/**
 * @api {get} /blog/:blog_id/following Retrieve Blog's Following
 * @apiName getBlogFollowing
 * @apiGroup Blog
 * @apiVersion 0.50.1
 * @apiParam {Number} blog_id Primary Blog ID.
 * @apiParam {String} token User's token
 *
 * @apiSuccess {Following[]} blogs An array of short blog infos that this blog follows, in order from most recently-followed to first.
 * @apiSuccess {Number} total_blogs Total number of followed blogs.
 */


/**
 * @api {get} /blog/:blog_id/followers Retrieve Blog's Followers
 * @apiName getBlogFollowers
 * @apiGroup Blog
 * @apiVersion 0.50.1
 * @apiParam {Number} blog_id Blog's unique ID.
 * @apiParam {String} token User's token
 *
 * @apiSuccess {Number} total_users The number of users currently following the blog
 * @apiSuccess {User[]} users Each item is a follower, containing these fields:
 * @apiSuccess {String} [name] The user's name on tumblr.
 * @apiSuccess {Boolean} [following] Whether the caller is following the user.
 * @apiSuccess {String} [url] The URL of the user's primary blog.
 */


/**
 * @api {get} /blog/:blog_id/posts Retrieve Published Posts
 * @apiName getPosts
 * @apiGroup Blog
 * @apiVersion 0.50.1
 * @apiParam {String} blog_id Any blog identifier.
 * @apiParam {String} token User's token
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
 */

// --------------------------------- Post --------------------------------------

/**
 * @api {Delete} /blog/:blog_id/:post_id/delete Delete a Post
 * @apiName deletePost
 * @apiGroup Post
 * @apiVersion 0.50.1
 *
 * @apiParam {String} post_id The ID of the post to delete
 * @apiParam {String} blog_id The ID of the bloghas the post
 * @apiParam {String} token User's token
 * 
 * @apiSuccess {String} is_deleted make the flag true
 */


/**
 * @api {get} /blog/:blog_id/queue  GetQueuedPosts
 * @apiDescription Gives you a list of the currently queued posts for the specified blog.
 * @apiName getQueuedPosts
 * @apiGroup Post
 * @apiVersion 0.50.1
 * @apiParam {String} post_id The ID of the post to delete
 * @apiParam {String} blog_id The ID of the bloghas the post
 * @apiParam {String} token User's token
 * 
 * @apiSuccess {Array} Queued_posts
 */


/**
 * @api {put} /blog/:blog_id/queue/reorder   Reorder Queued Posts
 * @apiDescription This allows you to reorder a post within the queue, moving it after an existing queued post, or to the top.
 * @apiName reorderQueuedPosts
 * @apiGroup Post
 * @apiVersion 0.50.1
 * 
 * @apiParam {String} blog_id The ID of the bloghas the post
 * @apiParam {String} post_id Post ID to move.
 * @apiParam {String} [insert_after="0"] Which post ID to move it after, or 0 to make it the first post
 * @apiParam {Array} UnOrdered_Queued_posts all queued posts
 * @apiParam {String} token User's token
 * 
 * @apiSuccess {Array} Ordered_Queued_posts change time of each post
 */


/**
 * @api {post} /blog/:blog_id/queue/shuffle  Shuffle Queued Posts
 * @apiDescription This randomly shuffles the queue for the specified blog.
 * @apiName shuffleQueuedPosts
 * @apiGroup Post
 * @apiVersion 0.50.1
 * 
 * @apiParam {String} blog_id The ID of the bloghas the post
 * @apiParam {String} [insert_after="0"] Which post ID to move it after, or 0 to make it the first post
 * @apiParam {Array} UnOrdered_Queued_posts all queued posts
 * @apiParam {String} token User's token
 * 
 * @apiSuccess {Array} Ordered_Queued_posts change time of each post after shuffeling
*/


/**
 * @api {get} /blog/:blog_id/draft Retrieve Draft Posts
 * @apiName retrieveDraftPosts
 * @apiGroup Post
 * @apiVersion 0.50.1
 * 
 * @apiParam {String} blog_id The ID of the bloghas the post
 * @apiParam {String} token User's token
 * 
 * @apiSuccess {Array} Draft_posts array of posts was posted as drafts
*/


// --------------------------------- Inbox --------------------------------------


/**
 * @api {get} /blog/:blog_id/inbox Retrieve Inbox Posts
 * @apiName retrieveInboxPosts
 * @apiGroup Inbox
 * @apiVersion 0.50.1
 * 
 * @apiParam {String} blog_id The ID of the blog has the post
 * @apiParam {String} token User's token
 * 
 * @apiSuccess {Post[]} Submission array of submission posts
 * @apiSuccess {Post[]} Ask array of ask posts
*/


/**
 * @api {delete} /blog/:blog_id/inbox Delete All Messages
 * @apiName deleteInboxPosts
 * @apiGroup Inbox
 * @apiVersion 0.50.1
 * 
 * @apiParam {String} blog_id The ID of the blog has the post
 * @apiParam {String} token User's token
 * 
 * @apiSuccess {Boolean} removed true if we removed succesfully message
*/
//delete all appears when there's > 1 post

// --------------------------------- Submission --------------------------------------

/**
 * @api {post} /blog/:blog_id/submit Make Submission Posts
 * @apiName makeSubmissionPosts
 * @apiGroup Submission
 * @apiVersion 0.50.1
 * 
 * @apiParam {String} blog_id The ID of the blog I want to submit at
 * @apiParam {String} token User's token
 * @apiParam {String} type The type of post. One of the following: text, photo, quote, link, video
 * @apiParam {String[]} tags Tags applied to the post
 * @apiParam {String} title of the post
 * @apiParam {String} text of the post
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
*/


/**
 * @api {delete} /blog/:blog_id/inbox Delete Submission Posts
 * @apiName deleteSubmissionPosts
 * @apiGroup Submission
 * @apiVersion 0.50.1
 * 
 * @apiParam {String} blog_id The ID of the blog has the submission
 * @apiParam {String} token User's token
 * 
 * @apiSuccess {boolean} is_deleted true if we removed succesfully the submission post
*/


/**
 * @api {put} /blog/:blog_id/inbox Edit Submission Posts
 * @apiName editSubmissionPosts
 * @apiGroup Submission
 * @apiVersion 0.50.1
 * 
 * @apiParam {String} blog_id The ID of the blog having the submitted post
 * @apiParam {String} token User's token
 * @apiParam {String[]} tags Tags applied to the post
 * @apiParam {String} title of the post
 * @apiParam {String} text of the post
 * 
 * @apiSuccess {post} the sumbission post updated 
*/


/**
 * @api {post} /blog/:blog_id/inbox Post Submission Posts
 * @apiName postSubmissionPosts
 * @apiGroup Submission
 * @apiVersion 0.50.1
 * 
 * @apiParam {String} blog_id The ID of the blog has the post
 * @apiParam {String} token User's token
 * 
 * @apiSuccess {boolean} posted return true when it's successfullay posyed in the dashboard and removed from inbox
*/


/**
 * @api {put} /blog/:blog_id/inbox Queue Submission Posts
 * @apiName queueSubmissionPosts
 * @apiGroup Submission
 * @apiVersion 0.50.1
 * 
 * @apiParam {String} blog_id The ID of the bloghas the post
 * @apiParam {String} token User's token
 * 
 * @apiSuccess {boolean} queued return true when post is changed from submission post to queue post
*/

// --------------------------------- Ask --------------------------------------

/**
 * @api {post} /blog/:blog_id/ask Make Ask Posts
 * @apiName makeAskPosts
 * @apiGroup Ask
 * @apiVersion 0.50.1
 * 
 * @apiParam {String} blog_id The ID of the blog has the post
 * @apiParam {String} token User's token
 * @apiParam {String} text text of the question/ask
 * 
 * @apiSuccess {String} id The ID of the asking/questionniere post
 * @apiSuccess {String} state Indicates the current state of the post (ask)
 * @apiSuccess {String} post_author Author of post, only available when submission is not anonymous
 * @apiSuccess {String} anonymous_name Name on an anonymous ask
*/


/**
 * @api {post} /blog/:blog_id/inbox Answer Ask Posts
 * @apiName answerAskPosts
 * @apiGroup Ask
 * @apiVersion 0.50.1
 * 
 * @apiParam {String} blog_id The ID of the blog has the post
 * @apiParam {String} token User's token
 * @apiParam {String} text answer of the ask
 * @apiParam {String[]} tags Tags applied to the post
 * @apiParam {String} type post type (now, queue,draft,private,schedule)
 * 
 * @apiSuccess {boolean} answered return true when post is changed from submission post to different post type

*/


/**
 * @api {delete} /blog/:blog_id/inbox Delete Ask Posts
 * @apiName seleteAskPosts
 * @apiGroup Ask
 * @apiVersion 0.50.1
 * 
 * @apiParam {String} blog_id The ID of the blog has the ask post
 * @apiParam {String} token User's token
 * 
 * @apiSuccess {boolean} is_deleted true if we removed succesfully the submission post

*/