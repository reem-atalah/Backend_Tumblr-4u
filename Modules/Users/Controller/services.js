// //////////////////////////////////////////////////////////////////
// / <==> /// This File Contains User Functions Services /// <==> ///
// //////////////////////////////////////////////////////////////////

/* =============== /// <==> Variables Declaration <==> /// ================== */
const nodemailer = require('nodemailer');
const {StatusCodes} = require('http-status-codes');
const schema = require('../../../Model/model');
/* =========== /// <==> End <==> ===========*/

/* ----------- <---> verify Email <---> --------- */ // *** <===> Done <===>  *** //
// Assumption: Acount Must Be Not ( Deleted )
/**
 * This Function Used To Send Verification Mail To User.
 *
 * @param {string} email - username
 *
 * @returns Send Email To User.
 */

const verifyMail = async (name,email,token)=>{
  try {

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
    }catch(error){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            'meta': {
              'status': 500,
              'msg': 'INTERNAL_SERVER_ERROR',
            },
      
            'res': {
              'error': 'Error In LogIn Function Services (<:>)',
              'data': '',
            },
          });
    };    
};

/* ----------- <---> Check If Mail Found <---> --------- */ // *** <===> Done <===>  *** //
const checkMail = async(email)=>{
  
    const oldUserEmail = await schema.users.findOne({email, isDeleted: false});
    if (oldUserEmail)    
      return true;
    else
      return false;
};

/* ----------- <---> Check If Blog Name Found <---> --------- */ // *** <===> Done <===>  *** //
const checkBlogName = async(name)=>{
    const oldUserBlog = await schema.blogs.findOne({name: name});
    if (oldUserBlog) 
      return true;
    else
     return false; 
};

/* ----------- <---> Create New User <---> --------- */ // *** <===> Done <===>  *** //
const createUser = async(email, password, blogName, age)=>{
try {
  const newUser = new schema.users({
    email,
    password,
    name: blogName,
    age,
  });
  // const data = await newUser.save();
  await newUser.save();
  
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

/* =============== /// <==> Export User Functions Services <==> /// =============== */
module.exports = {
    verifyMail,
    checkMail,
    checkBlogName,
    createUser
};
/* =========== /// <==> End <==> ===========*/