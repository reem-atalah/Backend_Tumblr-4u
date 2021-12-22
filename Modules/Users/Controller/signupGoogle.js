// ////////////////////////////////////////////////////////////////////////////////
// / <==> /// This File Contains User Signup with Google & Google Info /// <==> ///
// ///////////////////////////////////////////////////////////////////////////////

/* =============== /// <==> Variables Declaration <==> /// ================== */
const userServices = require('./services');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {StatusCodes} = require('http-status-codes');
const schema = require('../../../Model/model');
const nanoid = require('nanoid').nanoid;
// const createBlog = require('./control').createBlog;
/* =========== /// <==> End <==> ===========*/


/* ------ <---> Sign Up With Google <---> */ // *** <===> Done <===>  *** //
// Assumption: Acount Must Be Not ( Deleted )

/**
 * This Function Used To LogIn To Tumblr4U.
 *
 * @returns {object} - { Object }
 */

 const google = async (req, res)=>{
    try {
      let email = req.user.email;
      const isMailFound = await userServices.checkMail(email);
      
      if (isMailFound) {
      const oldUser = await schema.users.findOne({email, isDeleted: false});
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
            'message': 'User Log In With Google Successfully (<:>)',
            'data': token,
          },
        });
      } else {
        
        let email = req.user.email;
        let password = nanoid();
        

        userServices.createGoogleUser(email,password);

        const token = jwt.sign({
            email: email,
            role: 'user'},
            process.env.KEY);

        res.status(StatusCodes.OK).json({
          'meta': {
            'status': 200,
            'msg': 'OK',
          },
  
          'res': {
            'message': 'User Sign Up With Google Successfully (<:>)',
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
          'error': 'Error In Sign Up With Google Function (<:>)',
          'data': '',
        },
      });
    };
  };
  
/* ------ <---> Google Info <---> */ // *** <===> Done <===>  *** //
// Assumption: Acount Must Be ( Deleted )

/**
 * This Function Used To LogIn To Tumblr4U.
 *
 * @param {string} blogName - blogName
 * @param {string} age - age
 *
 * @returns {object} - { Object }
 */
const googleInfo = async(req,res)=>{
    try {
        const { blogName , age } = req.body;
        const email = req.decoded.email;

        const oldUser = await schema.users.updateOne({email, isDeleted: true},{name:blogName,age,isDeleted:false});
        if(oldUser.matchedCount){
          const token = jwt.sign({
            email: email,
            role: 'user'},
            process.env.KEY);

        //===========================================================================
        userServices.createPrimaryBlog(email, blogName);
        //=================================== Create Primary Blog  ========================================
        //===========================================================================

        res.status(StatusCodes.OK).json({
            'meta': {
              'status': 200,
              'msg': 'OK',
            },
            'res': {
              'message': 'User Log In With Google Successfully (<:>)',
              'data': token,
            },
          });
        }else
          res.status(StatusCodes.BAD_REQUEST).json({
            'meta': {
              'status': 400,
              'msg': 'BAD_REQUEST',
            },
            'res': {
              'message': 'This API Not Usable (<:>)',
              'data': '',
            },
          });
      
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            'meta': {
              'status': 500,
              'msg': 'INTERNAL_SERVER_ERROR',
            },
      
            'res': {
              'error': 'Error In Google Info Function (<:>)',
              'data': '',
            },
          });
        }; 
};

/* =============== /// <==> Export User verfiyAccount <==> /// =============== */
module.exports = {google,googleInfo};
/* =========== /// <==> End <==> ===========*/
