// /////////////////////////////////////////////////////////
// / <==> /// This File Contains User login /// <==> ///
// /////////////////////////////////////////////////////////

/* =============== /// <==> Variables Declaration <==> /// ================== */
const userServices = require('./services');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');
const schema = require('../../../Model/model');
/* =========== /// <==> End <==> ===========*/

/* ----------- <---> Sign In <---> --------- */ // *** <===> Done <===>  *** //
// Assumption: Acount Must Be Not ( Deleted )
/**
 * This Function Used To LogIn To Tumblr4U.
 *
 * @param {string} email - email
 * @param {string} password - password
 *
 * @returns {object} - { Object }
 */

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const oldUser = await schema.users.findOne({ email, isDeleted: false });
    const isMailFound = await userServices.checkMail(email);

    if (isMailFound) {
      const match = await userServices.checkPassword(password, oldUser.password);

      if (match) {
        const token = jwt.sign({
          email: oldUser.email,
          role: oldUser.role
        },
          process.env.KEY);

        // Return More Data At Login
        const oldBlog = await schema.blogs.findOne({ userEmail:oldUser.email })

        res.status(StatusCodes.OK).json({
          'meta': {
            'status': 200,
            'msg': 'OK',
          },

          'res': {
            'message': 'LogIn Successfully (<:>)',
            'data': { token, 'user': oldUser, 'blog': oldBlog},
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
          'error': 'Email Is Not Found (<:>)',
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
        'error': 'Error In LogIn Function (<:>)',
        'data': '',
      },
    });
  };
};

/* =============== /// <==> Export User login <==> /// =============== */
module.exports = login;
  /* =========== /// <==> End <==> ===========*/
