// //////////////////////////////////////////////////////////
// / <==> /// This File Contains Forget Password /// <==> ///
// //////////////////////////////////////////////////////////

/* =============== /// <==> Variables Declaration <==> /// ================== */
const userServices = require('./services');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');
const schema = require('../../../Model/model');
/* =========== /// <==> End <==> ===========*/

/* ----------- <---> Forget Password <---> --------- */ // *** <===> Done <===>  *** //
// Assumption: Acount Must Be Not ( Deleted )
/**
 * This Function Used To Send Email To User.
 *
 * @param {string} email - email
 *
 * @returns {Message} - { Send Email To User }
 */

const forgetPassword = async (req, res) => {
    try {
        const { email } = req.body;

        const isMailFound = await userServices.checkMail(email);

        if (isMailFound) {

            const oldUser = await schema.users.findOne({email});
            const name = oldUser.name;
            userServices.forgetPasswordMail(name, email);

            res.status(StatusCodes.OK).json({
                'meta': {
                    'status': 200,
                    'msg': 'OK',
                },

                'res': {
                    'message': 'Mail Send To User Successfully (<:>)',
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
                'error': 'Error In Forget Password Function (<:>)',
                'data': '',
            },
        });
    };
};

/* =============== /// <==> Export User login <==> /// =============== */
module.exports = forgetPassword;
  /* =========== /// <==> End <==> ===========*/
