
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
    const blog = await blogs.findOne({'_id': blogId}, 'followers');
    const user= await users.findOne({'_id': userId}, 'following_blogs');
    console.log(blogId);
    if (blog) {
      if (user) {
        blog.followers.push(userId);
        blog.save();
        user.following_blogs.push(blogId);
        user.save();
        res.status(StatusCodes.OK).json({
          'meta': {
            'status': 200,
            'msg': 'OK',
          },

          'response': {
            'message': 'Blog Followed Successfully',
            'data': '',
          },
        });
      }
    } else {
      res.status(StatusCodes.NOT_FOUND).json({
        'meta': {
          'status': 404,
          'msg': 'BAD_REQUEST',
        },

        'response': {
          'error': 'Blog not found',
          'data': '',
        },
      });
    }
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      'meta': {
        'status': 500,
        'msg': 'INTERNAL_SERVER_ERROR',
      },
      'response': {
        'error': 'Error In followBlog Function',
        'data': '',
      },
    });
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
    const blog = await blogs.findOne({'_id': blogId}, 'followers');
    const user= await users.findOne({'_id': userId}, 'following_blogs');
    if (blog) {
      if (user) {
        blog.followers.pull(userId);
        blog.save();
        user.following_blogs.pull(blogId);
        user.save();
        res.status(StatusCodes.OK).json({
          'meta': {
            'status': 200,
            'msg': 'OK',
          },

          'response': {
            'message': 'Blog Unfollowed Successfully',
            'data': '',
          },
        });
      }
    } else {
      res.status(StatusCodes.NOT_FOUND).json({
        'meta': {
          'status': 404,
          'msg': 'BAD_REQUEST',
        },

        'response': {
          'error': 'Blog not found',
          'data': '',
        },
      });
    }
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      'meta': {
        'status': 500,
        'msg': 'INTERNAL_SERVER_ERROR',
      },
      'response': {
        'error': 'Error In unfollowBlog Function',
        'data': '',
      },
    });
  }
};

/* =========== /// <==> End <==> ===========*/

/* ================ /// <==> Export User Functions <==> /// ============== */

module.exports = {
  followBlog,
  unfollowBlog,

};
/* =========== /// <==> End <==> ===========*/
