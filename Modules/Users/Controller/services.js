// //////////////////////////////////////////////////////////////////
// / <==> /// This File Contains User Functions Services /// <==> ///
// //////////////////////////////////////////////////////////////////

/* =============== /// <==> Variables Declaration <==> /// ================== */
const nodemailer = require('nodemailer');
const { StatusCodes } = require('http-status-codes');
const bcrypt = require('bcrypt');
const schema = require('../../../Model/model');
const jwt = require('jsonwebtoken');
const { CLOSING } = require('ws');
/* =========== /// <==> End <==> ===========*/

/* ----------- <---> verify Email <---> --------- */ // *** <===> Done <===>  *** //
// Assumption: Acount Must Be Not ( Deleted )
/**
 * This Function Used To Send Verification Mail To User.
 *
 * @param {string} email - email
 *
 * @returns Send Email To User.
 */

const verifyMail = async (name, email, token) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.TRANSUSER, // generated ethereal user
      pass: process.env.TRANSPASS, // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: '" 👻" <Tumblr4YouCMP2023@gmail.com>', // sender address
    to: email, // list of receivers
    subject: "Hello ✔", // Subject line
    html: `
        <h3> Hi ${name}</h3>
        <p>To verify your mail click <a href=http://tumblr4u.eastus.cloudapp.azure.com:5000/user/verify/${token}>here</a></p>
        `, // html body
  });

  return 'verification mail sent'
};

/* ----------- <---> Check If Mail Found <---> --------- */ // *** <===> Done <===>  *** //
/**
 * This Function Used To Check If Given Mail Is Found or Not.
 *
 * @param {string} email - email
 * @returns {boolean} [Ture , False].
 */


const checkMail = async (email) => {

  const oldUserEmail = await schema.users.findOne({ email, isDeleted: false });
  if (oldUserEmail)
    return true;
  else
    return false;
};

/* ----------- <---> Check If Blog Name Found <---> --------- */ // *** <===> Done <===>  *** //
/**
 * This Function Used To Check If Given Blog Name Is Found or Not.
 *
 * @param {string} blogName - blogName
 * @returns {boolean} [Ture , False].
 */
const checkBlogName = async (name) => {
  const oldUserBlog = await schema.blogs.findOne({ name: name });
  if (oldUserBlog)
    return true;
  else
    return false;
};

/* ----------- <---> Create New User <---> --------- */ // *** <===> Done <===>  *** //
/**
 * This Function Used To Create New User.
 *
 * @param {string} email - email
 * @param {string} password - password
 * @param {string} blogName - blogName
 * @param {string} age - age
 * 
 * @returns {String} Created.
 */

const createUser = async (email, password, blogName, age) => {

  const newUser = new schema.users({
    email,
    password,
    name: blogName,
    age,
  });
  // const data = await newUser.save();
  await newUser.save();
  return 'Created';
};

/* ----------- <---> Create New Google User <---> --------- */ // *** <===> Done <===>  *** //
/**
 * This Function Used To Create New Google User.
 *
 * @param {string} email - email
 * @param {string} password - password
 * 
 * @returns {String} Created.
 */
const createGoogleUser = async (email, password) => {

  let blogName = '';
  let age = -1;

  const newUser = new schema.users({
    email,
    password,
    name: blogName,
    age,
    isDeleted: true,
    isVerified: true
  });
  // const data = await newUser.save();
  await newUser.save();
  return 'Created';

};


/* ----------- <---> Check Password <---> --------- */ // *** <===> Done <===>  *** //
/**
 * This Function Compare Between Two Passwords.
 *
 * @param {string} password - password
 * @param {string} oldPassword - oldPassword
 * 
 * @returns {boolean} [Ture , False].
 */
const checkPassword = async (password, oldPassword) => {
  const match = await bcrypt.compare(password, oldPassword);
  return match;
};


/* ----------- <---> Create Blog <---> --------- */ // *** <===> Done <===>  *** //
/**
 * This Function Creates Primary Blog.
 *
 * @param {string} email - user's email
 * @param {string} blogName - blog name
 * 
 * @returns {string}.
 */
const createPrimaryBlog = async (email, name) => {
  try {
    const user = await schema.users.findOne({ email });
    const userId = user._id;
    let isPrimary = true;

    const newBlog = new schema.blogs(
      {
        title: 'Untitled',
        titleColor: 'default',
        name: name,
        userEmail: email,
        titleColor: 'default',
        privacy: false,
        password: 'password',
        updated: 0,
        description: '',
        isBlockedFromPrimary: false,
        isPrimary: true,
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
    const data = await newBlog.save();

    const blog = await schema.blogs.findOne({ name });
    let ids = user.blogsId;
    ids.push(blog.id);
    const userData = await schema.users.updateOne({ email }, { blogsId: ids });

    const Data = await schema.users.findOne({ email });

    return 'Blog Created';
  } catch (error) {
    console.log(error.message);
    // return false;
  }
};

/* ----------- <---> Forget Password <---> --------- */ // *** <===> Done <===>  *** //
// Assumption: Acount Must Be Not ( Deleted )
/**
 * This Function Used To Send Verification Mail To User.
 *
 * @param {string} email - email
 * @param {string} name - user name
 *
 * @returns Send Email To User.
 */

const forgetPasswordMail = async (name, email) => {

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.TRANSUSER, // generated ethereal user
      pass: process.env.TRANSPASS, // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: '" 👻" <Tumblr4YouCMP2023@gmail.com>', // sender address
    to: email, // list of receivers
    subject: "Hello ✔", // Subject line
    html: `
        <h3> Hi ${name}</h3>
        <p>Forgot your password? Reset it below: </p>
        <p><a href=http://tumblr4u.eastus.cloudapp.azure.com/resetpassword>Reset Password</a></p>
        `, // html body
  });

  return 'forget password mail sent'
};

/* ----------- <---> Check If User Id Found <---> --------- */ // *** <===> Done <===>  *** //
/**
 * This Function Used To Check If Given User Id Is Found or Not.
 *
 * @param {string} id - user id
 * @returns {boolean} [Ture , False].
 */


const checkUserId = async (id) => {

  const oldUserId = await schema.users.findOne({ id, isDeleted: false });
  if (oldUserId)
    return true;
  else
    return false;
};

/* ----------- <---> Check If post Id Found <---> --------- */ // *** <===> Done <===>  *** //
/**
 * This Function Used To Check If Given post Id Is Found or Not.
 *
 * @param {string} id - post id
 * @returns {boolean} [Ture , False].
 */


const checkPostId = async (id) => {

  const oldPost = await schema.Posts.find({ _id: id, isDeleted: false });
  if (oldPost.length)
    return true;
  else
    return false;
};

/* ----------- <---> get UserId From PostId <---> --------- */ // *** <===> Done <===>  *** //
/**
 * This Function Used To get UserId From PostId.
 *
 * @param {string} id - post id
 * @returns {string} User Id.
 */


const getUserIdFromPostId = async (id) => {

  const oldPost = await schema.Posts.findOne({ _id: id, isDeleted: false });
  const blogId = oldPost.blogId;

  const oldBlog = await schema.blogs.findOne({ _id: blogId, isDeleted: false });

  const userEmail = oldBlog.userEmail;

  const oldUser = await schema.users.findOne({ email: userEmail, isDeleted: false });
  return oldUser.id;
};


/* ----------- <---> get BlogId From PostId <---> --------- */ // *** <===> Done <===>  *** //
/**
 * This Function Used To get BlogId From PostId.
 *
 * @param {string} id - post id
 * @returns {string} Blog Id.
 */


const getBlogIdFromPostId = async (id) => {
  const oldPostId = await schema.Posts.findOne({ _id: id, isDeleted: false });
  return oldPostId.blogId;
};

/* ----------- <---> get Userid From Token <---> --------- */ // *** <===> Done <===>  *** //
/**
 * This Function Used To get User Id From Email.
 *
 * @param {string} token - user token
 * @returns {string} user Id.
 */


const getIdFromToken = async (token) => {

  const decoded = jwt.verify(token, process.env.KEY);
  const oldUser = await schema.users.findOne({ email: decoded.email });
  return oldUser.id;
};



/* ----------- <---> get Userid From Blog Name <---> --------- */ // *** <===> Done <===>  *** //
/**
 * This Function Used To get User Id From Blog Name.
 *
 * @param {string} blogName - blog name
 * @returns {string} user Id.
 */


const getUserIdFromBlogName = async (name) => {
  const oldBlog = await schema.blogs.findOne({ name, isDeleted: false });

  const email = oldBlog.userEmail;
  const oldUser = await schema.users.findOne({ email });
  return oldUser.id;
};

/* =============== /// <==> Export User Functions Services <==> /// =============== */
module.exports = {
  verifyMail,
  checkMail,
  checkBlogName,
  createUser,
  checkPassword,
  createGoogleUser,
  createPrimaryBlog,
  forgetPasswordMail,
  checkUserId,
  checkPostId,
  getUserIdFromPostId,
  getBlogIdFromPostId,
  getIdFromToken,
  getUserIdFromBlogName
};
/* =========== /// <==> End <==> ===========*/