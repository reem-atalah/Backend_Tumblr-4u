// /////////////////////////////////////////////////////////
// / <==> /// This File Contains User Functions /// <==> ///
// /////////////////////////////////////////////////////////

/* =============== /// <==> Variables Declaration <==> /// ================== */
const userServices = require('./services');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {StatusCodes} = require('http-status-codes');
const schema = require('../../../Model/model');
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> User Functions <==> /// ================== */

/* ----------- <---> Sign Up <---> ------- */ // *** <===> Done <===>  *** //
// Assumption: Account Must Be Not Deleted
<<<<<<< HEAD
const signUp = require('./signup');
=======

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

const signUp = async (req, res) => {
  try {
    const {email, password, blogName, age, city, country} = req.body;

    const oldUserEmail = await schema.users.findOne({email, isDeleted: false});
    // eslint-disable-next-line max-len
    const oldUserBlog=await schema.users.findOne({name: blogName, isDeleted: false});

    if (oldUserEmail) {
      res.status(StatusCodes.BAD_REQUEST).json({
        'meta': {
          'status': 400,
          'msg': 'BAD_REQUEST',
        },

        'res': {
          'error': 'Email is Already Exists (<:>)',
          'data': '',
        },
      });
    // eslint-disable-next-line brace-style
    }

    // --------------- Search On Blogs Name ----------------//
    else if (oldUserBlog) {
      res.status(StatusCodes.BAD_REQUEST).json({
        'meta': {
          'status': 400,
          'msg': 'BAD_REQUEST',
        },

        'res': {
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
      // const data = await newUser.save();
      await newUser.save();

      // --------------- Create Primary Blog ----------------//

      // createBlog();

      const token = jwt.sign({email, role: 'user'}, process.env.KEY);

      userServices.verifyMail(blogName, email, token);

      res.status(StatusCodes.CREATED).json({
        'meta': {
          'status': 201,
          'msg': 'CREATED',
        },

        'res': {
          'message': 'Sign Up Successfully (<:>)',
          'data': token,
        },
      });
    }
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      'meta': {
        'status': 500,
        'msg': 'INTERNAL_SERVER_ERROR',
      },

      'res': {
        'error': 'Error In Sign Up Function (<:>)',
        'data': '',
      },
    });
  };
};
>>>>>>> 7cb23a58577cce9ca0d4b043966f9c8ea44514cd

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

const login = async (req, res) => {
  try {
    const {email, password} = req.body;
    const oldUser = await schema.users.findOne({email, isDeleted: false});
    if (oldUser) {
      const match = await bcrypt.compare(password, oldUser.password);
      if (match) {
        const token = jwt.sign({
          email: oldUser.email,
          role: oldUser.role},
        process.env.KEY);
        res.status(StatusCodes.OK).json({
          'meta': {
            'status': 200,
            'msg': 'OK',
          },

          'res': {
            'message': 'LogIn Successfully (<:>)',
            'data': token,
          },
        });
      } else {
        res.status(StatusCodes.BAD_REQUEST).json({
          'meta': {
            'status': 400,
            'msg': 'BAD_REQUEST',
          },

          'res': {
            'error': 'InCorrect Password (<:>)',
            'data': '',
          },
        });
      }
    } else {
      res.status(StatusCodes.BAD_REQUEST).json({
        'meta': {
          'status': 400,
          'msg': 'BAD_REQUEST',
        },

        'res': {
          'error': 'Email Is Not Found (<:>)',
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

      'res': {
        'error': 'Error In LogIn Function (<:>)',
        'data': '',
      },
    });
  };
};

/* ----------- <---> Verify Account <---> --- */ // *** <===> Done <===>  *** //
// Assumption: Acount Must Be Not ( Deleted )

/**
 * This Function Used To LogIn To Tumblr4U.
 *
 * @param {string} token - user secret token
 *
 * @returns {object} - { Object }
 */

const verfiyAccount = async (req, res)=>{
  try {
    const token = req.params.token;
    const decoded = jwt.verify(token, process.env.KEY);

    const data = await schema.users
        .updateOne({email: decoded.email}, {isVerified: true});
    if (data.modifiedCount != 0) {
      res.status(StatusCodes.OK).json({
        'meta': {
          'status': 200,
          'msg': 'OK',
        },

        'res': {
          'message': 'Account Verified Successfully (<:>)',
          'data': '',
        },
      });
    } else {
      res.status(StatusCodes.BAD_REQUEST).json({
        'meta': {
          'status': 400,
          'msg': 'BAD_REQUEST',
        },

        'res': {
          'error': 'Account Is Not Found or Already Verified (<:>)',
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

      'res': {
        'error': 'Error In Verfiy Account Function (<:>)',
        'data': '',
      },
    });
  };
};

/* ------ <---> Sign Up With Google <---> */ // *** <===> Done <===>  *** //
// Assumption: Acount Must Be Not ( Deleted )

/**
 * This Function Used To LogIn To Tumblr4U.
 *
 * @param {string} email - username
 * @param {string} password - email
 *
 * @returns {object} - { Object }
 */

const google = async (req, res)=>{
  try {
    const oldUser = await schema.users.findOne({email: req.user.email});
    console.log(oldUser);
    if (oldUser) {
      res.status(StatusCodes.OK).json({
        'meta': {
          'status': 200,
          'msg': 'OK',
        },

        'res': {
          'message': 'User Log In With Google Successfully (<:>)',
          'data': req.user,
        },
      });
    } else {
      res.status(StatusCodes.OK).json({
        'meta': {
          'status': 200,
          'msg': 'OK',
        },

        'res': {
          'message': 'User Sign Up With Google Successfully (<:>)',
          'data': req.user,
        },
      });
    }
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      'meta': {
        'status': 500,
        'msg': 'INTERNAL_SERVER_ERROR',
      },

      'res': {
        'error': 'Error In Sign Up With Google Function (<:>)',
        'data': '',
      },
    });
  };
};
// =================== End ===================//

/* ------ <---> Follow Blog <---> */ // *** <===> Done <===>  *** //

/**
 *
 * @function
 * @name followBlog
 * @description this function makes the user whose id sent in
 *              params follow the blog whose id in the body
 * @param {Object} req - Holds the blogId in params and the
 *                       blockedBlogId in body
 * @param {Object} res - Holds the res status and
 *                      message based on the status.
 *
 * @returns res status and message or error massege in case of errors.
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

          'res': {
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

        'res': {
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
      'res': {
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
   * @param {Object} res - Holds the res status and message
   *                       based on the status.
   *
   * @returns res status and message or error massege in case of errors.
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

          'res': {
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

        'res': {
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
      'res': {
        'error': 'Error In unfollowBlog Function',
        'data': '',
      },
    });
  }
};

/* ----------- <---> Create Blog <--->  */ // *** <===> Done <===>  *** //

/**
 *
 * @function
 * @name createBlog
 * @description This function allows the user whose id sent in
 *              params create a new blog
 * @param {String} title  - Title of the blog
 * @param {String} name  - URL of the blog and it should be unique
 * @param {Boolean} privacy  - Indicates wether the blog has a password or not
 * @param {String} password  - The password of the blog if it's private
 * @returns res status and message or error massege in case of errors.
 */

 const createBlog = async (req, res) => {
  try {
    const userId=req.params.userId;
    const title= req.body.title;
    const privacy=req.body.privacy;
    let password='password';
    let isPrimary=false;
    let name=req.body.name;
    if (privacy) {
      password=req.body.password;
    }
    const anotherBlog= await schema.blogs.findOne({'name': name});
    if (!anotherBlog) {
      const user= await schema.users.findOne({'_id': userId}, 'blogsId name');

      if (user.blogsId.length===0) {
        isPrimary=true;
        name=user.name;
      }
      await schema.blogs.create(
          {
            title: title,
            name: name,
            privacy: privacy,
            password: password,
            updated: 0,
            description: '',
            isBlockedFromPrimary: false,
            isPrimary: isPrimary,
            blogVisitor: 0,
            followedTags: [],
            postsIds: [],
            isDeleted: false,
            theme: 'default',
            Timestamps: true,
            blockedBlogs: [],
            followers: [],
          },
      );

      const blog= await schema.blogs.findOne({'name': name});

      console.log(blog._id);
      user.blogsId.push(blog._id);
      user.save();
      res.status(StatusCodes.CREATED).json({
        'meta': {
          'status': 201,
          'msg': 'CREATED',
        },

        'res': {
          'message': 'Blog Created Successfully',
          'data': '',
        },
      });
    } else {
      res.status(StatusCodes.BAD_REQUEST).json({
        'meta': {
          'status': 400,
          'msg': 'BAD REQUEST',
        },

        'res': {
          'message': 'URL is not available',
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
        'error': 'Error In createBlog Function',
        'data': '',
      },
    });
  }
};

/* ----------- <---> Delete Blog <--->  */ // *** <===> Done <===>  *** //

// not finished yet
const deleteBlog = async (req, res) => {
  try {
    const userId = req.params.userId;
    const blogId = req.body.blogId;
    const blog= await schema.blogs.findOne({'_id': blogId});
    if (blog) {
      const users= await schema.users.find();
      const blogs= await schema.blogs.find();

      for(var i=0;i<users.length;i++)
      {
        users[i].following_blogs.pull(blogId);
        users[i].save();
      }
      for(var i=0;i<blogs.length;i++)
      {
        if(blogs[i]._id!=blogId)
       {
        blogs[i].blockedBlogs.pull(blogId);
        blogs[i].save();
       }
      }
      if (blog.isPrimary===true) {
      await schema.users.deleteOne({'_id': userId});
      await schema.blogs.deleteOne({'_id': blogId});

      } else {
        await schema.blogs.deleteOne({'_id': blogId});
        const user= await schema.users.findOne({'_id': userId}, 'blogsId');
        user.blogsId.pull(blogId);
        user.save();
        console.log(user.blogsId)
      }
       res.status(StatusCodes.OK).json({
          'meta': {
            'status': 200,
            'msg': 'OK',
          },
          'res': {
            'message': 'Blog Deleted Successfully',
            'data': '',
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
        'error': 'Error In deleteBlog Function',
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
  createBlog,
  deleteBlog,
  verfiyAccount,
  google,
};
/* =========== /// <==> End <==> ===========*/
