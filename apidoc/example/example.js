/**
 * @api {get} /posts/queue  GetQueuedPosts
 * @apiDescription Gives you a list of the currently queued posts for the specified blog.
 * @apiName GetQueuedPosts
 * @apiGroup Blog
 * @apiSampleRequest api.tumblr.com/v2/blog/{blog-identifier}/posts/queue
 * @apiParam {String} [offset="0"] Post number to start at
 * @apiParam {Number} [limit=20] The number of results to return: 1�20, inclusive
 */


/**
 * @api {post} /posts/queue/reorder   Reorder Queued Posts
 * @apiDescription This allows you to reorder a post within the queue, moving it after an existing queued post, or to the top.
 * @apiName ReorderQueuedPosts
 * @apiGroup Blog
 * @apiSampleRequest api.tumblr.com/v2/blog/{blog-identifier}/posts/queue/reorder
 * @apiParam {String} post_id Post ID to move.
 * @apiParam {String} [insert_after="0"] Which post ID to move it after, or 0 to make it the first post
 */


/**
 * @api {post} /posts/queue/shuffle  Shuffle Queued Posts
 * @apiDescription This randomly shuffles the queue for the specified blog.
 * @apiName ShuffleQueuedPosts
 * @apiGroup Blog
 * @apiSampleRequest api.tumblr.com/v2/blog/{blog-identifier}/posts/queue/shuffle
*/


/**
 * @api {get} /posts/draft Retrieve Draft Posts
 * @apiName RetrieveDraftPosts
 * @apiGroup Blog
 * @apiSampleRequest api.tumblr.com/v2/blog/{blog-identifier}/posts/draft
 * @apiParam {Number} [before_id=0]	Return posts that have appeared before this ID; Use this parameter to page through the results: first get a set of posts, and then get posts since the last ID of the previous set.
 * @apiParam {String} [filter="None"] Specifies the post format to return, other than HTML: text � Plain text, no HTML; raw � As entered by the user (no post-processing); if the user writes in Markdown, the Markdown will be returned rather than HTML.
*/

/**
 * @api {get} /notifications  Retrieve Blog's Activity Feed
 * @apiName GetBlogActivityFeed
 * @apiGroup Blog
 * @apiSampleRequest api.tumblr.com/v2/blog/{blog-identifier}/posts/notifications
 * @apiParam {Integer} [before=Request time] Unix epoch timestamp that begins the page, defaults to request time.	
 * @apiParam {String[]="like","reply","follow","mention_in_reply"}  [types=None] 	An array of one or more types to filter by, or none if you want all
*/

/**
 * @api {get} /posts/submission Retrieve Submission Posts
 * @apiName RetrieveSubmissionPosts
 * @apiGroup Blog
 * @apiSampleRequest api.tumblr.com/v2/blog/{blog-identifier}/posts/submission
 * @apiParam {String} [offset="0"] Post number to start at
 * 
 * @apiSuccess {String} id_string The ID of the submitted post, in String format for clients that do not support 64-bit integers
 * @apiSuccess {String} post_url The location of the post
 * @apiSuccess {String} slug Short text summary to the end of the post URL
 * @apiSuccess {String} type The type of post. One of the following: text, photo, quote, link, video
 * @apiSuccess {String} date The GMT date and time of the post
 * @apiSuccess {Number} timestamp The time of the post, in seconds since the epoch
 * @apiSuccess {String} state Indicates the current state of the post (submission)
 * @apiSuccess {String} format Format type of post.
 * @apiSuccess {String} reblog_key The reblog key for the post
 * @apiSuccess {String[]} tags Tags applied to the post
 * @apiSuccess {String} short_url Short url for the post
 * @apiSuccess {String} post_author Author of post, only available when submission is not anonymous
 * @apiSuccess {Boolean} is_submission 	Indicates post is a submission (true)
 * @apiSuccess {String} anonymous_name Name on an anonymous submission
 * @apiSuccess {String} anonymous_email Email on an anonymous submission
*/
/**
 * @api {post} /post/delete Delete a Post
 * @apiName DeletePost
 * @apiSampleRequest api.tumblr.com/v2/blog/{blog-identifier}/post/delete
 * @apiGroup Blog
 *
 * @apiParam {String} id The ID of the post to delete
 */