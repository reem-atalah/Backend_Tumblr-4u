
/* ================= /// <==> Variables Declaration <==> /// ================ */

const {StatusCodes} = require('http-status-codes');
const {users} = require('../Model/model');
const {blogs}= require('../../Blogs/Model/model');
/* =========== /// <==> End <==> ===========*/

/* ================= /// <==> User Functions <==> /// ====================== */


/**
 *
 * @function
 * @name followBlog
 * @description this function makes the user whose id sent in
 *              params follow the blog whose id in the body
 * @param {string} req - Holds the blogId in params and the
 *                       blockedBlogId in body
 * @param {string} res - Holds the response status and
 *                      message based on the status.
 *
 * @returns response status and message or error massege in case of errors.
 */


const followBlog = async (req, res) => {
  try {
    const userId = req.params.userId;
    const blogId = req.body.blogId;
    console.log(userId);
    await blogs.findOne({'_id': blogId}, 'followers', function(err, blog) {
      if (err) return handleError(err);
      if (blog) {
        blog.followers.push(userId);
        blog.save();
        users.findOne({'_id': userId}, 'following_blogs', function(err, user) {
          if (err) return handleError(err);
          user.following_blogs.push(blogId);
          user.save();
        });
        res.status(StatusCodes.OK).json('Blog successfully followed (<:>)');
      } else {
        res.status(StatusCodes.BAD_REQUEST).json('Blog not found (<:>)');
      }
    }).clone().catch(function(err) {
      console.log(err);
    });
  } catch (error) {
    const ERROR='Error In blockBlog Function (<:>)';
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ERROR);
  }
};
/* ----------- <---> Unfollow Blog <---> ---- */ // *** <===> Done <===>  *** //


/**
 *
 * @function
 * @name unfollowBlog
 * @description this function removes the user whose id sent in
 *               params from followers of the blog whose id in the body
 * @param {string} req - Holds the blogId in params and
 *                       the blockedBlogId in body
 * @param {string} res - Holds the response status and message
 *                       based on the status.
 *
 * @returns response status and message or error massege in case of errors.
 */

const unfollowBlog = async (req, res) => {
  try {
    const userId = req.params.userId;
    const blogId = req.body.blogId;
    await blogs.findOne({'_id': blogId}, 'followers', function(err, blog) {
      if (err) return handleError(err);
      if (blog) {
        blog.followers.pull( userId );
        blog.save();
        users.findOne({'_id': userId}, 'following_blogs', function(err, user) {
          if (err) return handleError(err);
          user.following_blogs.pull(blogId);
          user.save();
        });
        res.status(StatusCodes.OK).json('Blog successfully unfollowed (<:>)');
      } else {
        res.status(StatusCodes.BAD_REQUEST).json('Blog not found (<:>)');
      }
    }).clone().catch(function(err) {
      console.log(err);
    }); ;
  } catch (error) {
    const ERROR='Error In blockBlog Function (<:>)';
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ERROR);
  }
};


/* =========== /// <==> End <==> ===========*/

/* ================ /// <==> Export User Functions <==> /// ============== */

module.exports = {
  followBlog,
  unfollowBlog,

};
/* =========== /// <==> End <==> ===========*/
