
/* ================ /// <==> Variables Declaration <==> /// ================ */
const {StatusCodes} = require('http-status-codes');
const {blogs} = require('../Model/model');

/* =========== /// <==> End <==> ===========*/


/* ==================== /// <==> User Functions <==> /// ==================== */


/**
 *
 * @function
 * @name blockBlog
 * @description this function blocks the blog whose id
 *              sent in the body from the blog whose id in params
 * @param {string} req - Holds the blogId in
 *                       params and the blockedBlogId in body
 * @param {string} res - Holds the response
 *                       status and message based on the status.
 *
 * @returns response status and message or error massege in case of errors.
 */


const blockBlog = async (req, res) => {
  console.log(req.params);

  try {
    const blogId = req.params.blogId;
    const blockedBlogId = req.body.blockedBlogId;

    await blogs.findOne({'_id': blockedBlogId}, function(err, blockedBlog) {
      if (err) return handleError(err);
      if (blockedBlog) {
        blogs.findOne({'_id': blogId}, 'blockedBlogs', function(err, blog) {
          if (err) return handleError(err);
          blog.blockedBlogs.push(blockedBlogId);
          blog.save();
          res.status(StatusCodes.OK).json('Blog successfully blocked ');
        });
      } else {
        res.status(StatusCodes.BAD_REQUEST).json('Blog not found ');
      }
    }).clone().catch(function(err) {
      console.log(err);
    });
  } catch (error) {
    const ERROR='Error In blockBlog Function (<:>)';
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ERROR);
  }
};
/* -------- <---> Unfollow Blog <---> ------- */ // *** <===> Done <===>  *** //


/**
 *
 * @function
 * @name unblockBlog
 * @description this function remove the blog whose id sent in
 *              the body from blocked blogs of the blog whose id in params
 * @param {string} req - Holds the blogId in params
 *                       and the unblockedBlogId in body
 * @param {string} res - Holds the response status and
 *                       message based on the status.
 *
 * @returns response status and message or error massege in case of errors.
 */


const unblockBlog = async (req, res) => {
  try {
    const blogId = req.params.blogId;
    const unblockedBlogId = req.body.unblockedBlogId;

    await blogs.findOne({'_id': unblockedBlogId}, function(err, unblockedBlog) {
      if (err) return handleError(err);
      if (unblockedBlog) {
        blogs.findOne({'_id': blogId}, 'blockedBlogs', function(err, blog) {
          if (err) return handleError(err);
          blog.blockedBlogs.pull(unblockedBlogId);
          blog.save();
          res.status(StatusCodes.OK).json('Blog successfully unblocked ');
        });
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


/* =========== /// <==> End <==> ===========*/

/* ================= /// <==> Export User Functions <==> /// ================ */

module.exports = {
  blockBlog,
  unblockBlog,

};
/* =========== /// <==> End <==> ===========*/
