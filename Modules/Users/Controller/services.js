// //////////////////////////////////////////////////////////////////
// / <==> /// This File Contains User Functions Services /// <==> ///
// //////////////////////////////////////////////////////////////////

/* =============== /// <==> Variables Declaration <==> /// ================== */
const nodemailer = require('nodemailer');
const {StatusCodes} = require('http-status-codes');
const bcrypt = require('bcrypt');
const schema = require('../../../Model/model');
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

const verifyMail = async (name,email,token)=>{

    let transporter = nodemailer.createTransport({
        service:'gmail',
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
        <p>To verify your mail click <a href=http://localhost:3000/user/verify/${token}>here</a></p>
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


const checkMail = async(email)=>{
  
    const oldUserEmail = await schema.users.findOne({email, isDeleted: false});
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
const checkBlogName = async(name)=>{
    const oldUserBlog = await schema.blogs.findOne({name: name});
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

const createUser = async(email, password, blogName, age)=>{

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
const createGoogleUser = async(email, password)=>{

  let blogName = '';
    let age = -1;

    const newUser = new schema.users({
      email,
      password,
      name: blogName,
      age,
      isDeleted:true,
      isVerified:true
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
const checkPassword = async(password,oldPassword)=>{
  const match = await bcrypt.compare(password, oldPassword);
  return match;
};

/* =============== /// <==> Export User Functions Services <==> /// =============== */
module.exports = {
    verifyMail,
    checkMail,
    checkBlogName,
    createUser,
    checkPassword,
    createGoogleUser
};
/* =========== /// <==> End <==> ===========*/