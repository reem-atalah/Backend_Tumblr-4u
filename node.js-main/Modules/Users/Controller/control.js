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
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> User Functions <==> /// ================== */

/* ----------- <---> Sign Up <---> ------- */ // *** <===> Done <===>  *** //
// Assumption: Account Must Be Not Deleted
const signUp = require('./signup');

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

/* ------ <---> Follow Blog <---> */ // *** <===> Done <===>  *** //

/**
 *
 * @function
 * @name followBlog
 * @description this function makes the user whose id sent in
 *              params follow the blog whose id in the body
 * @param {String} userId - The id of the user who follows the blog
 * @param {String} blogId - The id of the blog to be followed
 * @returns {Object}  - The followed blog and null if not found
 */


const followBlog = async (req, res) => {
  try {
    const userId = req.params.userId;
    const blogId = req.body.blogId;
    const blog = await schema.blogs.findOne({'_id': blogId});
    const user= await schema.users.findOne({'_id': userId}, 'following_blogs');
    if (blog) {
      if (user) {
        blog.followers.push(userId);
        blog.save();
        user.following_blogs.push(blogId);
        user.save();
        return blog;
      }
    } else {
      return null;
    }
  } catch (error) {
    console.log(error.message);
  }
};

/* ----------- <---> Unfollow Blog <--->  */ // *** <===> Done <===>  *** //


/**
 *
 * @function
 * @name unfollowBlog
 * @description this function removes the user whose id sent in
 *               params from followers of the blog whose id in the body
 * @param {String} userId - The id of the user who unfollows the blog
 * @param {String} blogId - The id of the blog to be unfollowed
 * @returns {Object}  - The unfollowed blog
 */


const unfollowBlog = async (req) => {
  try {
    const userId = req.params.userId;
    const blogId = req.body.blogId;
    const blog = await schema.blogs.findOne({'_id': blogId});
    const user= await schema.users.findOne({'_id': userId}, 'following_blogs');
    if (blog) {
      if (user) {
        blog.followers.pull(userId);
        blog.save();
        user.following_blogs.pull(blogId);
        user.save();
        return blog;
      }
    } else {
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
 * @param {String} userId  -id of the user
 * @param {String} title  - Title of the blog
 * @param {String} name  - URL of the blog and it should be unique
 * @param {Boolean} privacy  - Indicates wether the blog has a password or not
 * @param {String} password  - The password of the blog if it's private
 * @returns res status and message or error massege in case of errors.
 */

const createBlog = async (req) => {
  try {
    const userId=req.params.userId;
    const name=req.body.name;
    const title=req.body.title;
    const privacy=req.body.privacy;
    const password='password';
    if(!title)
      title='Untitled';
    let isPrimary=false;

    const anotherBlog= await schema.blogs.findOne({'name': name});
    console.log(anotherBlog);
    if (anotherBlog===null) {
      console.log(anotherBlog);
      const user= await schema.users.findOne({'_id': userId}, 'blogsId name');
      if (user.blogsId.length===0) {
        isPrimary=true;
        privacy=false;
      }
      if(privacy)
      password=req.body.password;
      const blog=await schema.blogs.create(
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
            accent: 'default',
            background: 'default',
            headerImage: 'default',
            avatar: 'default',
          },
      );
      console.log(blog._id);
      user.blogsId.push(blog._id);
      user.save();
      console.log(user);
      return blog;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error.message);
    // return false;
  }
};

/* ----------- <---> Delete Blog <--->  */ // *** <===> Done <===>  *** //

/**
 *
 * @function
 * @name deleteBlog
 * @description This function allows the user whose id sent in
 *              params delete his blog
 * @param {String} userId  - id of the user
 * @param {String} blogId  - id of the blog to be deleted
 * @returns {Object}  - the created deleted blog
 */

const deleteBlog = async (userId, blogId) => {
  console.log('Delete Blog');

  try {
    const blog= await schema.blogs.findOne({'_id': blogId});
    console.log(blog);
    if (blog===null) {
      return null;
    } else {
      const users= await schema.users.find();
      const blogs= await schema.blogs.find();

      for (var i=0; i<users.length; i++) {
        users[i].following_blogs.pull(blogId);
        users[i].save();
      }
      for (var i=0; i<blogs.length; i++) {
        if (blogs[i]._id!=blogId) {
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
        console.log(user.blogsId);
      }
      return blog;
    }
  } catch (error) {
    console.log(error.message);
    return null;
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
  googleInfo,
  androidSignUpWithGoogle
};
/* =========== /// <==> End <==> ===========*/
