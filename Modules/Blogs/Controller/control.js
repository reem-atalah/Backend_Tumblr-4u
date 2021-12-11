/* eslint-disable linebreak-style */

/* ================ /// <==> Variables Declaration <==> /// ================ */
const {StatusCodes} = require('http-status-codes');
const schema = require('../../../Model/model');

/* =========== /// <==> End <==> ===========*/


/* ==================== /// <==> Blog Functions <==> /// ==================== */

/**
 *
 * @function
 * @name blockBlog
 * @description this function blocks the blog whose id
 *              sent in the body from the blog whose id in params
 * @param {Object} req - Holds the blogId in
 *                       params and the blockedBlogId in body
 * @param {Object} res - Holds the res
 *                       status and message based on the status.
 *
 * @returns res status and message or error massege in case of errors.
 */


const blockBlog = async (req, res) => {
  console.log(req.params);

  try {
    const blogId = req.params.blogId;
    const blockedBlogId = req.body.blockedBlogId;

    await schema.blogs.findOne({'_id': blockedBlogId},
        function(err, blockedBlog) {
          // if (err) return handleError(err);
          if (blockedBlog) {
            schema.blogs.findOne({'_id': blogId},
                'blockedBlogs',
                function(err, blog) {
                  if (err) return handleError(err);
                  blog.blockedBlogs.push(blockedBlogId);
                  blog.save();
                  res.status(StatusCodes.OK).json({
                    'meta': {
                      'status': 200,
                      'msg': 'OK',
                    },

                    'res': {
                      'message': 'Blog blocked Successfully',
                      'data': '',
                    },
                  });
                });
          } else {
            res.status(StatusCodes.NOT_FOUND).json({
              'meta': {
                'status': 404,
                'msg': 'BAD_REQUEST',
              },

              'res': {
                'error': 'Blog NOT FOUND',
                'data': '',
              },
            });
          }
        }).clone().catch(function(err) {
      console.log(err);
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      'meta': {
        'status': 500,
        'msg': 'INTERNAL_SERVER_ERROR',
      },

      'res': {
        'error': 'Error In blockBlog Function',
        'data': '',
      },
    });
  }
};
/* -------- <---> Unfollow Blog <---> ------- */ // *** <===> Done <===>  *** //


/**
 *
 * @function
 * @name unblockBlog
 * @description this function remove the blog whose id sent in
 *              the body from blocked blogs of the blog whose id in params
 * @param {Object} req - Holds the blogId in params
 *                       and the unblockedBlogId in body
 * @param {Object} res - Holds the res status and
 *                       message based on the status.
 *
 * @returns res status and message or error massege in case of errors.
 */


const unblockBlog = async (req, res) => {
  try {
    const blogId = req.params.blogId;
    const unblockedBlogId = req.body.unblockedBlogId;

    await schema.blogs.findOne({'_id': unblockedBlogId},
        function(err, unblockedBlog) {
          // if (err) return handleError(err);
          if (unblockedBlog) {
            schema.blogs.findOne({'_id': blogId},
                'blockedBlogs',
                function(err, blog) {
                  if (err) return handleError(err);
                  blog.blockedBlogs.pull(unblockedBlogId);
                  blog.save();
                  res.status(StatusCodes.OK).json({
                    'meta': {
                      'status': 200,
                      'msg': 'OK',
                    },

                    'res': {
                      'message': 'Blog unblocked Successfully',
                      'data': '',
                    },
                  });
                });
          } else {
            res.status(StatusCodes.NOT_FOUND).json({
              'meta': {
                'status': 404,
                'msg': 'BAD_REQUEST',
              },

              'res': {
                'error': 'Blog NOT FOUND',
                'data': '',
              },
            });
          }
        }).clone().catch(function(err) {
      console.log(err);
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      'meta': {
        'status': 500,
        'msg': 'INTERNAL_SERVER_ERROR',
      },

      'res': {
        'error': 'Error In unblockBlog Function',
        'data': '',
      },
    });
  }
};


/**
 *
 * @function
 * @name editBlog
 * @description    -  It retrieves a blog given its id
 * @param {String} blogId  - id of the blog
 * @return {Object} - A blog object
 */


const editBlog=async (req, res)=>{
  try {
    const blogId = req.params.blogId;
    const accent = req.body.accent;
    const name = req.body.name;
    const headerImage = req.body.headerImage;
    const avatar = req.body.avatar;
    const title = req.body.title;
    const background = req.body.background;

    const password=req.body.password;
    const theme=req.body.theme;
    const description=req.body.description;

    let message='OK';

    const blog= await schema.blogs.findOne({'_id': blogId});
    if (blog) {
      if (password) {
        blog.password=password;
      }
      if (theme) {
        blog.theme=theme;
      }
      if (theme) {
        blog.description=description;
      }
      if (accent) {
        blog.accent=accent;
      }


      if (headerImage) {
        blog.headerImage= headerImage;
      }
      if (background) {
        blog.background= background;
      }
      if (avatar) {
        blog.avatar= avatar;
      }
      if (title) {
        blog.title=title;
      }
      if (name) {
        const anotherBlog= await schema.blogs.findOne({'name': name});

        if (!anotherBlog || anotherBlog._id==blogId) {
          if (blog.isPrimary) {
<<<<<<< HEAD
            const user=await schema.users.findOneAndUpdate({'name': blog.name});
            user.name=name;
            user.save();
          }
=======
            const user= await schema.users
                .findOneAndUpdate({'name': blog.name});
            user.name=name;
                      }
>>>>>>> 90e9feb83386f7302313990c3b2b08267b71dce9
          blog.name=name;
        } else {
          message='URL is not available';
        }
      }
      blog.save();
      if (message==='OK') {
        console.log(blog);
<<<<<<< HEAD
        res.status(StatusCodes.OK).jsonp(blog);
=======
        res.status(StatusCodes.OK).json({
          'meta': {
            'status': 200,
            'msg': 'OK',
          },

          'res': {
            'message': message,
            'data': blog,
          },
        });
>>>>>>> 90e9feb83386f7302313990c3b2b08267b71dce9
      } else {
        res.status(StatusCodes.BAD_REQUEST).json({
          'meta': {
            'status': 400,
            'msg': 'BAD REQUEST',
          },

          'res': {
            'message': message,
            'data': '',
          },
        });
      }
    } else {
      res.status(StatusCodes.NOT_FOUND).json({
        'meta': {
          'status': 404,
          'msg': 'NOT FOUND',
        },

        'res': {
          'message': 'Blog Not FOUND',
          'data': '',
        },
      });
    }
  } catch (error) {
    console.log(error.message);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      'meta': {
        'status': 500,
        'msg': 'INTERNAL_SERVER_ERROR',
      },

      'res': {
        'error': 'Error In editBlogAccent Function',
        'data': '',
      },
    });
  }
};

/**
 *
 * @function
 * @name retrieveBlog
 * @description    -  It retrieves a blog given its id
 * @param {String} blogName  - name of the blog
 * @return {Object} - A blog object
 */

const retrieveBlog=async (req, res)=>{
  try {
    const blogName = req.params.blogName;
    const blog= await schema.blogs.findOne({'name': blogName});
    if (blog) {
      res.status(StatusCodes.OK).json({
        'meta': {
          'status': 200,
          'msg': 'OK',
        },

        'res': {
          'message': 'Blog Retrieved Successfuly',
          'data': blog,
        },
      });
    } else {
      res.status(StatusCodes.NOT_FOUND).json({
        'meta': {
          'status': 404,
          'msg': 'NOT FOUND',
        },

        'res': {
          'message': 'Blog Not FOUND',
          'data': '',
        },
      });
    }
  } catch (error) {
    console.log(error.message);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      'meta': {
        'status': 500,
        'msg': 'INTERNAL_SERVER_ERROR',
      },

      'res': {
        'error': 'Error In retrieveBlog Function',
        'data': '',
      },
    });
  }
};

/* =========== /// <==> End <==> ===========*/

/* ================= /// <==> Export User Functions <==> /// ================ */

module.exports = {
  blockBlog,
  unblockBlog,
  editBlog,
  retrieveBlog,
};
/* =========== /// <==> End <==> ===========*/
