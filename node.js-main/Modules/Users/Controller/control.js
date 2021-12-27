/* eslint-disable no-var */
// /////////////////////////////////////////////////////////
// / <==> /// This File Contains User Functions /// <==> ///
// /////////////////////////////////////////////////////////

/* =============== /// <==> Variables Declaration <==> /// ================== */
const userServices = require('./services');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {StatusCodes} = require('http-status-codes');
const schema = require('../../../Model/model');
const {unblockBlog} = require('../../Blogs/Controller/control');
const {unfollowBlog}=require('./unfollowBlog');

/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> User Functions <==> /// ================== */

/* ----------- <---> Sign Up <---> ------- */ // *** <===> Done <===>  *** //
// Assumption: Account Must Be Not Deleted
// const signUp = require('./signup');

/* ----------- <---> Sign In <---> --------- */ // *** <===> Done <===>  *** //
// Assumption: Acount Must Be Not ( Deleted )
const login = require('./login');

/* ----------- <---> Verify Account <---> --- */ // *** <===> Done <===>  *** //
// Assumption: Acount Must Be Not ( Deleted )
const verfiyAccount = require('./verifyAccount');

/* ------ <---> Sign Up With Google <---> */ // *** <===> Done <===>  *** //
// Assumption: Acount Must Be Not ( Deleted )
const google = require('./signupGoogle').google;
const googleInfo = require('./signupGoogle').googleInfo;

/* ------ <---> Sign Up With Google For Android <---> */ // *** <===> Done <===>  *** //
// Assumption: Acount Must Be Not ( Deleted )
const androidSignUpWithGoogle = require('./androidSignWithGoogle');

// =================== End ===================//
// const bcrypt = require('bcrypt');

// const schema = require('../../../Model/model');
/* =========== /// <==> End <==> ===========*/

/* ----------- <---> Sign Up <---> ------- */ // *** <===> Done <===>  *** //
// Assumption: Account Must Be Not Deleted
const isBlocked = async (userEmail, blogId) => {
  const blogs = schema.blogs.find({
    $and: [{userEmail: userEmail},
      {isDeleted: false}, {blockedBlogs: blogId}],
  });
  if ((await blogs).length>0) {
    return true;
  }
};
const userUnblockBlog = async (userEmail, blogId) => {
  const blogs = schema.blogs.find({
    $and: [{userEmail: userEmail},
      {isDeleted: false}, {blockedBlogs: blogId}],
  });
  (await blogs).forEach((blog)=>{
    if (blog) {
      console.log(blog);
      unblockBlog(blog._id, blogId);
      console.log(blog);
    }
  });
};
/**
 * This Function Used To Register New User.
 *
 * @param {string} email - email
 * @param {string} password - password
 * @param {string} blogName - blogName
 * @param {string} age - age
 *
 * @returns {object} - { Object }
 */

const signUp = async (req, res) => {
  try {
    const {email, password, blogName, age} = req.body;

    const isMailFound = await userServices.checkMail(email);
    const isBlogFound = await userServices.checkBlogName(blogName);

    if (isMailFound) {
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
    } else if (isBlogFound) {
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
      userServices.createUser(email, password, blogName, age);

      // =================================================================
      // =================================================================
      // ==========================Create Primary Blog========================//
      // =================================================================
      // =================================================================
      const userBlog = {
        decoded: {
          email: email,
        },
        body:
        {
          name: blogName,

        },
      };
      createBlog(userBlog);
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
/* ------ <---> Follow Blog <---> */ // *** <===> Done <===>  *** //

/**
 *
 * @function
 * @name followBlog
 * @description this function makes the user whose id sent in
 *              params follow the blog whose id in the body
 * @param {String} email - The email of the user who follows the blog
 * @param {String} blogId - The id of the blog to be followed
 * @returns {Object}  - The followed blog and null if not found
 */

const createBlogs=async ()=>{
  for (let i=0; i<200; i++) {
    const name='blog1'+i;
    const blog={
      decoded: {
        email: 'reem.atala555@gmail.com',
      },
      body:
      {
        name: name,
        privacy: false,
      },
    };
    createBlog(blog);
    console.log(name);
  }
};
const followBlog = async (email, blogId) => {
  // createBlogs();
   try {
    const blog = await schema.blogs.findOne({
      $and: [{_id: blogId},
        {isDeleted: false}],
    });
    const user = await schema.users.findOne({
      $and: [{email: email},
        {isDeleted: false}, {isVerified: true}],
    },
    'following_blogs blogsId');
    if (user) {
      userUnblockBlog(email, blogId);
      if (blog) {
        blog.followers.push(user._id);
        blog.save();
        ids = user.following_blogs;
        ids.push(blogId);
        await schema.users.findOneAndUpdate({email: email},
            {following_blogs: ids});
        return blog;
      }
      return null;
    }
  } catch (error) {
    console.log(error.message);
  }
};


/* ----------- <---> Create Blog <--->  */ // *** <===> Done <===>  *** //

/**
 *
 * @function
 * @name createBlog
 * @description This function allows the user whose id sent in
 *              params create a new blog
 * @param {String} email  - email of the user
 * @param {String} title  - Title of the blog
 * @param {String} name  - URL of the blog and it should be unique
 * @param {Boolean} privacy  - Indicates wether the blog has a password or not
 * @param {String} password  - The password of the blog if it's private
 * @returns res status and message or error massege in case of errors.
 */

const createBlog = async (req) => {
  try {
    const email = req.decoded.email;
    const name = req.body.name;
    let title = req.body.title;
    let privacy = req.body.privacy;
    let password = 'password';
    let isPrimary = false;
    const anotherBlog = await schema.blogs.findOne({'name': name});
    console.log(anotherBlog);
    if (anotherBlog === null) {
      const user = await schema.users.findOne({
        $and: [{email: email},
          {isDeleted: false}, {isVerified: true}],
      });
      if (user) {
        if (user.blogsId.length === 0) {
          isPrimary = true;
          title = 'Untitled';
          privacy = false;
        }
        if (privacy) {
          password = req.body.password;
        }
        const blog = await schema.blogs.create(
            {
              title: title,
              titleColor: 'default',
              name: name,
              userEmail: email,
              titleColor: 'default',
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
              accent: 'default',
              background: 'default',
              headerImage: 'default',
              avatar: 'default',
            },
        );
        console.log(blog._id);
        ids = user.blogsId;
        ids.push(blog._id);
        await schema.users.findOneAndUpdate({
          $and: [{email: email},
            {isDeleted: false}, {isVerified: true}],
        }, {blogsId: ids});
        console.log(user);
        return blog;
      } else {
        return 'User is deleted';
      }
    } else {
      return null;
    }
  } catch (error) {
    console.log(error.message);
  }
};

/* ----------- <---> Delete Blog <--->  */ // *** <===> Done <===>  *** //

/**
 *
 * @function
 * @name deleteBlog
 * @description This function allows the user whose id sent in
 *              params delete his blog
 * @param {String} userEmail  - email of the user
 * @param {String} blogId  - id of the blog to be deleted
 * @return {Object}  - the created deleted blog
 */
/*const deleteBlogs=async ()=>{
  userEmail='reem.atala555@gmail.com';
  const user = await schema.users.findOne({
    $and: [{email: userEmail},
      {isDeleted: true}, {isVerified: true}],
  });
  // ids=user.blogsId;
  // ids.forEach((id)=>{
  //  deleteBlog(userEmail, id);
  // });
  for (let i=0; i<50; i++) {
    const name='blog'+i;
    schema.blogs.deleteMany({name: name});
    
  }
};
*/
const deleteBlog = async (userEmail, blogId) => {
  console.log('Delete Blog');

  try {
    const blog = await schema.blogs.findOne({
      $and: [{'_id': blogId},
        {isDeleted: false}],
    });
    console.log(userEmail);

    const user = await schema.users.findOne({
      $and: [{email: userEmail},
        // {isDeleted: true},
        {isVerified: true}],
    });
    console.log(user);
    if (!blog || !user) {
      return null;
    } else {
      const users = await schema.users.find({isDeleted: false});
      const blogs = await schema.blogs.find({isDeleted: false});

      for (var i = 0; i < users.length; i++) {
        ids = users[i].following_blogs;
        ids.pull(blogId);
        await schema.users.findOneAndUpdate({'_id': users[i]._id},
            {'following_blogs': ids});
      }
      for (var i = 0; i < blogs.length; i++) {
        if (blogs[i]._id != blogId) {
          blogs[i].blockedBlogs.pull(blogId);
          blogs[i].save();
        }
      }
      if (blog.isPrimary === true) {
        await schema.users.findOneAndUpdate({email: userEmail},
            {isDeleted: true});
      }
      await schema.users.findOneAndUpdate({email: userEmail},
          {isVerified: true});
      await schema.blogs.updateOne({'_id': blogId}, {'isDeleted': true});
      blog.isDeleted = true;
      return blog;
    }
  } catch (error) {
    console.log(error.message);
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
  createBlogs,
  deleteBlog,
  isBlocked,
  userUnblockBlog,
  verfiyAccount,
  google,
  googleInfo,
  androidSignUpWithGoogle,
};
/* =========== /// <==> End <==> ===========*/
