// ////////////////////////////////////////////////////////////////////////////////
// / <==> /// This File Contains User Sign Up With Google  For android /// <==> ///
// ////////////////////////////////////////////////////////////////////////////////

/* =============== /// <==> Variables Declaration <==> /// ================== */
const userServices = require('./services');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {StatusCodes} = require('http-status-codes');
const schema = require('../../../Model/model');
/* =========== /// <==> End <==> ===========*/

/* ----------- <---> Sign Up With Google For Android <---> ------- */ // *** <===> Done <===>  *** //
// Assumption: Account Must Be Not Deleted

/**
 * This Function Used To Register New User.
 *
 * @param {string} googleToken - Google Token
 * @param {string} blogName - blogName
 * @param {string} age - age
 *
 * @returns {object} - { Object }
 */

const androidSignUpWithGoogle = async (req, res) => {
  try {
    const {googleToken, blogName, age} = req.body;

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

/* =============== /// <==> Export User signUp <==> /// =============== */
module.exports = signUp;
/* =========== /// <==> End <==> ===========*/

