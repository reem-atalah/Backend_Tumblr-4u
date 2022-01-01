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
const androidSignUpWithGoogle = require('./androidSignWithGoogle').androidSignUpWithGoogle;
const newGoogle = require('./androidSignWithGoogle').newGoogle;

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


/* ------ <---> Does Follow <---> */ // *** <===> Done <===>  *** //
/**
 *
 * @function
 * @name doesFollow
 * @description this function checks if a user follows a blog
 * @param {String} email - The email of the user 
 * @param {String} blogId - The id of the blog 
 * @returns {Object}  - Returns the user if he/she follows the blog or null otherwise
 */

const doesFollow=async (email, blogId)=>{
  try{
  const user= await schema.users.findOne(
    {$and: [{email: email}, {following_blogs: blogId},
      {isVerified: true}, {isDeleted: false}]});
        return user;
      } catch (error) {
          console.log(error.message);
      }
};


/* ------ <---> Follow Blog <---> */ // *** <===> Done <===>  *** //
/**
 *
 * @function
 * @name followBlog
 * @description this function makes the user follow the blog whose id in the body
 * @param {String} userEmail - The email of the user who follows the blog
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
    if (user) {
      userServices.userUnblockBlog(email,blogId);
      if (blog) {
        blog.followers.push(user._id);
        blog.save();
        ids = user.following_blogs;
        ids.push(blogId);
        ids=Array.from(new Set(ids));
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
 * @param {String} userEmail - The email of the user who unfollows the blog
 * @param {String} blogId - The id of the blog to be unfollowed
 * @returns {Object}  - The unfollowed blog and null if not found
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
/* ----------- <---> Create Blog <--->  */ // *** <===> Done <===>  *** //

/**
 *
 * @function
 * @name createBlog
 * @description This function allows the user to create a new blog
 * @param {String} userEmail  -email of the user
 * @param {String} title  - Title of the blog
 * @param {String} name  - URL of the blog and it should be unique
 * @param {Boolean} privacy  - Indicates wether the blog has a password or not
 * @param {String} [password]  - The password of the blog if it's private
 * @returns {Object}  - The created blog
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
          {isDeleted: false}],
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
        const blog = new schema.blogs(
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
        blog.save();
        ids = user.blogsId;
        ids.push(blog._id);
        await schema.users.findOneAndUpdate({
          $and: [{email: email},
            {isDeleted: false}],
        }, {blogsId: ids});
        console.log(user);
        return blog;
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch (error) {
    console.log(error.message);
  }
};

/* ----------- <---> Delete Blog <--->  */ // *** <===> Done <===>  *** //
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
/* ----------- <---> Delete Blog <--->  */ // *** <===> Done <===>  *** //

/**
 *
 * @function
 * @name deleteBlog
 * @description This function allows the user to delete his blog
 * @param {String} userEmail  - id of the user
 * @param {String} blogId  - id of the blog to be deleted
 * @returns {Object}  - the deleted blog
 */

const deleteBlog = async (userEmail, blogId) => {
  try {
    const blog = await schema.blogs.findOne({
      $and: [{'_id': blogId},
        {isDeleted: false}],
    });
    console.log(userEmail);

    const user = await schema.users.findOne({$and: [{email: userEmail},
      {isDeleted: false}, {isVerified: true}]});
    console.log(user);
    if (!blog || !user) {
      return null;
    } else {
      const users = await schema.users.find({$and: [{following_blogs: blogId},
        {isDeleted: false},{isVerified: true}]});
      const blogs = await schema.blogs.find({$and: [{blockedBlogs: blogId},
        {isDeleted: false}]});

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
 * @name getInterests
 * @description This function get from the user his interest tags(followedTags)
 *                choosen while signing up
 * @param {String} userEmail  - email of the user
 * @param {String} interstArr  - interests tags array
 * @return {Object}    - The user with updated interests 
 * 

 */

const getInterests = async (userEmail, interstArr) => {
  console.log(userEmail);
  const user = await schema.users.findOneAndUpdate({$and: [{email: userEmail}]},
      {followedTags: interstArr});
      console.log(user);
      return user;

};

/* ----------- <---> Update color <--->  */ // *** <===> Done <===>  *** //

/**
 *
 * @function
 * @name updateColor
 * @description This function updates the color theme
 * @param {String} userEmail  - email of the user
 * @param {String} colorNumb  - the color number wants to be updated
 * 
 * 
 * @return {Object}    - The user with updated color
 */

const updateColor = async (userEmail, colorNumb) => {
  console.log('colorNumb: ', colorNumb);
  const result=await schema.users.findOneAndUpdate({$and: [{email: userEmail}]},
      {bodyColor: colorNumb});
  return result;
};
/* ----------- <---> Delete User <--->  */ // *** <===> Done <===>  *** //
/**
 *
 * @function
 * @name deleteUser
 * @description This Function deletes the user and its blogs(user.isDeleted=true)
 * @param {String} email  - email of the user
 * @returns {Object}    - The deleted user
 */
const deleteUser = async (email) => {
  try{
  const user = await schema.users.findOne({
    $and: [{ email: email },
    { isDeleted: false }, { isVerified: true }]
  });
  if (user) {
    const l = user.blogsId.length;
    for (var i = l - 1; i > 0; i--) {
      deleteBlog(email, user.blogsId[i]);
    }
    return deleteBlog(email, user.blogsId[0]);
  }
  return null;
}catch (error) {
  console.log(error.message);
}
}
/**
 *
 * @function
 * @name retrieveUser
 * @description This Function retrieves a user given its id
 * @param {String} userId - Id of the user
 * @returns {Object}    - The user 
 */
const retrieveUser=async(userId)=>{
  try{
 return await schema.users.findOne({$and: [{ _id: userId },
    { isDeleted: false }, { isVerified: true }]
  });
}catch (error) {
  console.log(error.message);
}
};
/* =========== /// <==> End <==> ===========*/

/* =============== /// <==> Export User Functions <==> /// =============== */
module.exports = {
  retrieveUser,
  signUp,
  login,
  followBlog,
  unfollowBlog,
  doesFollow,
  createBlog,
  deleteBlog,
  deleteUser,
  verfiyAccount,
  google,
  googleInfo,
  androidSignUpWithGoogle,
  changeEmail,
  forgetPassword,
  resetPassword,
  getInterests,
  updateColor,
  newGoogle
};
/* =========== /// <==> End <==> ===========*/
