// //////////////////////////////////////////////////////////////////
// / <==> /// This File Contains Reset Password Function /// <==> ///
// //////////////////////////////////////////////////////////////////

/* =============== /// <==> Variables Declaration <==> /// ================== */
const userServices = require('./services');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');
const schema = require('../../../Model/model');
/* =========== /// <==> End <==> ===========*/

/* ----------- <---> Reset Password <---> --------- */ // *** <===> Done <===>  *** //
// Assumption: Acount Must Be Not ( Deleted )
/**
 * This Function Used To Reset Password.
 *
 * @param {string} email - email
 * @param {string} password - new password
 * @param {string} cpassword - confirm new password
 *
 * @returns {string} - { Password Updated }
 */

const resetPassword = async (req, res) => {
    try {
        const { email, password, cpassword } = req.body;

        const isMailFound = await userServices.checkMail(email);

        if (isMailFound) {

            if (password == cpassword) {

                let cryptPassword = await bcrypt.hash(password, 8);
                const data = await schema.users.updateOne({ email }, { password: cryptPassword });

                res.status(StatusCodes.OK).json({
                    'meta': {
                        'status': 200,
                        'msg': 'OK',
                    },

                    'res': {
                        'message': 'Password Udpated Successfully (<:>)',
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
                        'error': 'Password Not Equal Confirm Password (<:>)',
                        'data': '',
                    },
                });
            }
        }
        else {
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
                'error': 'Error In Reset Password Function (<:>)',
                'data': '',
            },
        });
    };
};

/* =============== /// <==> Export User login <==> /// =============== */
module.exports = resetPassword;
  /* =========== /// <==> End <==> ===========*/
