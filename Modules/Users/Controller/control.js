// /////////////////////////////////////////////////////////
// / <==> /// This File Contains User Functions /// <==> ///
// /////////////////////////////////////////////////////////

/* =============== /// <==> Variables Declaration <==> /// ================== */
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {StatusCodes} = require('http-status-codes');
const schema = require('../../../Model/model');
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> User Functions <==> /// ================== */

/* ----------- <---> Sign Up <---> ------- */ // *** <===> Done <===>  *** //
// Assumption: Account Must Be Not Deleted

/**
 * This Function Used To Register New User.
 *
 * @param {string} email - email
 * @param {string} password - password
 * @param {string} blogName - blogName
 * @param {string} age - age
 * @param {number} city - city
 * @param {string} country - country
 *
 * @returns {object} - { Object }
 */

const signUp = async (request, response) => {
  try {
    const {email, password, blogName, age, city, country} = request.body;

    const oldUserEmail = await schema.users.findOne({email, isDeleted: false});
    // eslint-disable-next-line max-len
    const oldUserBlog=await schema.users.findOne({name: blogName, isDeleted: false});

    if (oldUserEmail) {
      response.status(StatusCodes.BAD_REQUEST).json({
        'meta': {
          'status': 400,
          'msg': 'BAD_REQUEST',
        },

        'response': {
          'error': 'Email is Already Exists (<:>)',
          'data': '',
        },
      });
    // eslint-disable-next-line brace-style
    }

    // --------------- Search On Blogs Name ----------------//
    else if (oldUserBlog) {
      response.status(StatusCodes.BAD_REQUEST).json({
        'meta': {
          'status': 400,
          'msg': 'BAD_REQUEST',
        },

        'response': {
          'error': 'Blog Name is Already Exists (<:>)',
          'data': '',
        },
      });
    } else {
      // eslint-disable-next-line new-cap
      const newUser = new schema.users({
        email,
        password,
        name: blogName,
        age,
        city,
        country,
      });
      // const data =  await newUser.save();
      await newUser.save();

      // --------------- Create Primary Blog ----------------//

      const token = jwt.sign({email, role: 'user'}, process.env.KEY);

      response.status(StatusCodes.CREATED).json({
        'meta': {
          'status': 201,
          'msg': 'CREATED',
        },

        'response': {
          'message': 'Sign Up Successfully (<:>)',
          'data': token,
        },
      });
    }
  } catch (error) {
    response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      'meta': {
        'status': 500,
        'msg': 'INTERNAL_SERVER_ERROR',
      },

      'response': {
        'error': 'Error In Sign Up Function (<:>)',
        'data': '',
      },
    });
  };
};

/* ----------- <---> Sign In <---> --------- */ // *** <===> Done <===>  *** //
// Assumption: Acount Must Be Not ( Deleted )

/**
 * This Function Used To LogIn To Tumblr4U.
 *
 * @param {string} email - username
 * @param {string} password - email
 *
 * @returns {object} - { Object }
 */

const login = async (request, response) => {
  try {
    const {email, password} = request.body;
    const oldUser = await schema.users.findOne({email, isDeleted: false});
    if (oldUser) {
      const match = await bcrypt.compare(password, oldUser.password);
      if (match) {
        const token = jwt.sign({
          email: oldUser.email,
          role: oldUser.role},
        process.env.KEY);
        response.status(StatusCodes.OK).json({
          'meta': {
            'status': 200,
            'msg': 'OK',
          },

          'response': {
            'message': 'LogIn Successfully (<:>)',
            'data': token,
          },
        });
      } else {
        response.status(StatusCodes.BAD_REQUEST).json({
          'meta': {
            'status': 400,
            'msg': 'BAD_REQUEST',
          },

          'response': {
            'error': 'InCorrect Password (<:>)',
            'data': '',
          },
        });
      }
    } else {
      response.status(StatusCodes.BAD_REQUEST).json({
        'meta': {
          'status': 400,
          'msg': 'BAD_REQUEST',
        },

        'response': {
          'error': 'Email Is Not Found (<:>)',
          'data': '',
        },
      });
    }
  } catch (error) {
    response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      'meta': {
        'status': 500,
        'msg': 'INTERNAL_SERVER_ERROR',
      },

      'response': {
        'error': 'Error In LogIn Function (<:>)',
        'data': '',
      },
    });
  };
};


/**
 *
 * @function
 * @name followBlog
 * @description this function makes the user whose id sent in
 *              params follow the blog whose id in the body
 * @param {Object} req - Holds the blogId in params and the
 *                       blockedBlogId in body
 * @param {Object} res - Holds the response status and
 *                      message based on the status.
 *
 * @returns response status and message or error massege in case of errors.
 */


const followBlog = async (req, res) => {
  try {
    const userId = req.params.userId;
    const blogId = req.body.blogId;
    const blog = await schema.blogs.findOne({'_id': blogId}, 'followers');
    const user= await schema.users.findOne({'_id': userId}, 'following_blogs');
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

/* ----------- <---> Unfollow Blog <--->  */ // *** <===> Done <===>  *** //


/**
   *
   * @function
   * @name unfollowBlog
   * @description this function removes the user whose id sent in
   *               params from followers of the blog whose id in the body
   * @param {Object} req - Holds the blogId in params and
   *                       the blockedBlogId in body
   * @param {Object} res - Holds the response status and message
   *                       based on the status.
   *
   * @returns response status and message or error massege in case of errors.
   */

const unfollowBlog = async (req, res) => {
  try {
    const userId = req.params.userId;
    const blogId = req.body.blogId;
    const blog = await schema.blogs.findOne({'_id': blogId}, 'followers');
    const user= await schema.users.findOne({'_id': userId}, 'following_blogs');
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

/* =============== /// <==> Export User Functions <==> /// =============== */
module.exports = {
  signUp,
  login,
  followBlog,
  unfollowBlog,
};
/* =========== /// <==> End <==> ===========*/
