// /////////////////////////////////////////////////////////
// / <==> /// This File Contains User Verify Account /// <==> ///
// /////////////////////////////////////////////////////////

/* =============== /// <==> Variables Declaration <==> /// ================== */
const userServices = require('./services');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {StatusCodes} = require('http-status-codes');
const schema = require('../../../Model/model');
/* =========== /// <==> End <==> ===========*/

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
/* =============== /// <==> Export User verfiyAccount <==> /// =============== */
module.exports = verfiyAccount;
  /* =========== /// <==> End <==> ===========*/
    