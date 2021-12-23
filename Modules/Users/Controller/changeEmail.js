// ///////////////////////////////////////////////////////
// / <==> /// This File Contains Change Email /// <==> ///
// ///////////////////////////////////////////////////////

/* =============== /// <==> Variables Declaration <==> /// ================== */
const userServices = require('./services');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {StatusCodes} = require('http-status-codes');
const schema = require('../../../Model/model');
/* =========== /// <==> End <==> ===========*/

/* ----------- <---> Change Email <---> --------- */ // *** <===> Done <===>  *** //
// Assumption: Acount Must Be Not ( Deleted )
/**
 * This Function Used To Change User Email.
 *
 * @param {string} token - user token
 * @param {string} email - new email
 * @param {string} password - password
 *
 * @returns {object} - { Object }
 */

 const changeEmail = async (req, res) => {
    try {
      const {email, password} = req.body;

      const oldEmail = req.decoded.email;

      const oldUser = await schema.users.findOne({email:oldEmail, isDeleted: false});
      const isMailFound = await userServices.checkMail(email);

      if (!isMailFound && oldUser) {
        const match = await userServices.checkPassword(password,oldUser.password);

        if (match) {
          
         const data = await schema.users.updateOne({oldEmail, isDeleted: false},{email});
          res.status(StatusCodes.OK).json({
            'meta': {
              'status': 200,
              'msg': 'OK',
            },
  
            'res': {
              'message': 'Email Updated Successfully (<:>)',
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
            'error': 'Email Is Already Exist (<:>)',
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
          'error': 'Error In Change Account Function (<:>)',
          'data': '',
        },
      });
    };
  };

  /* =============== /// <==> Export User login <==> /// =============== */
module.exports = changeEmail;
  /* =========== /// <==> End <==> ===========*/
  