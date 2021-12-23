/* eslint-disable linebreak-style */
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

/* ----------- <---> Change Email <---> ----------- */
// Assumption: Acount Must Be Not ( Deleted )
const changeEmail = require('./changeEmail');


/* ----------- <---> Forget Password <---> ----------- */
// Assumption: Acount Must Be Not ( Deleted )
const forgetPassword = require('./forgetPassword');


/* ----------- <---> Reset Password <---> ----------- */
// Assumption: Acount Must Be Not ( Deleted )
const resetPassword = require('./resetPassword');


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


const followBlog = async (req) => {
  try {
    const email = req.decoded.email;
    const blogId = req.body.blogId;
    const blog = await schema.blogs.findOne({
      $and: [{_id: blogId},
        {isDeleted: false}]});
    const user = await schema.users.findOne({
      $and: [{email: email},
        {isDeleted: false}, {isVerified: true}]}, 'following_blogs');
    console.log(user);
    if (user) {
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
    const email = req.decoded.email;
    const blogId = req.body.blogId;
    const blog = await schema.blogs.findOne({
      $and: [{_id: blogId},
        {isDeleted: false}]});
    const user = await schema.users.findOne({
      $and: [{email: email},
        {isDeleted: false}, {isVerified: true}]}, 'following_blogs');
    console.log(user);
    if (user) {
      if (blog) {
        blog.followers.pull(user._id);
        blog.save();
        ids = user.following_blogs;
        ids.pull(blogId);
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
 * @param {String} userEmail  -email of the user
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
          {isDeleted: false}, {isVerified: true}]});
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
        ids = user.blogsId;
        ids.push(blog._id);
        await schema.users.findOneAndUpdate({$and: [{email: email},
          {isDeleted: false}, {isVerified: true}]}, {blogsId: ids});
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
 * @param {String} userEmail  - id of the user
 * @param {String} blogId  - id of the blog to be deleted
 * @returns {Object}  - the created deleted blog
 */

const deleteBlog = async (userEmail, blogId) => {
  console.log('Delete Blog');

  try {
    const blog = await schema.blogs.findOne({
      $and: [{'_id': blogId},
        {isDeleted: false}],
    });
    console.log(userEmail);

    const user = await schema.users.findOne({$and: [{email: userEmail},
      {isDeleted: true}, {isVerified: true}]});
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


/* ----------- <---> Get Interests <--->  */ // *** <===> Done <===>  *** //

/**
 *
 * @function
 * @name getInterestsFromUser
 * @description This function get from the user his interest tags(followedTags)
 *                choosen while signing up
 * @param {String} userEmail  - id of the user
 * @param {String} interstArr  - interests tags array
 */

const getInterests = async (userEmail, interstArr) => {
  await schema.users.findOneAndUpdate({$and: [{email: userEmail}]},
      {followedTags: interstArr});
};

/* ----------- <---> Update color <--->  */ // *** <===> Done <===>  *** //

/**
 *
 * @function
 * @name updateColor
 * @description This function get from the user his interest tags(followedTags)
 *                choosen while signing up
 * @param {String} userEmail  - id of the user
 * @param {String} colorNumb  - id of the user
 */

const updateColor = async (userEmail, colorNumb) => {
  await schema.users.findOneAndUpdate({$and: [{email: userEmail}]},
      {bodyColor: colorNumb});
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
  androidSignUpWithGoogle,
  changeEmail,
  forgetPassword,
  resetPassword,
  getInterests,
  updateColor,
};
/* =========== /// <==> End <==> ===========*/
