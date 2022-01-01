// ////////////////////////////////////////////////////////////////////////////////
// / <==> /// This File Contains User Sign Up With Google  For android /// <==> ///
// ////////////////////////////////////////////////////////////////////////////////

/* =============== /// <==> Variables Declaration <==> /// ================== */
const userServices = require('./services');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');
const schema = require('../../../Model/model');
const nanoid = require('nanoid').nanoid;
/* =========== /// <==> End <==> ===========*/

/* ----------- <---> Sign Up With Google For Android <---> ------- */ // *** <===> Done <===>  *** //
// Assumption: Account Must Be Not Deleted

/**
 * This Function Used To Register New User For Android.
 * @param {string} googleToken - Google Token
 *
 * @returns {object} - { Object }
 */

const androidSignUpWithGoogle = async (req, res) => {
  try {
    const { googleToken } = req.body;
    var email = '';
    const CLIENT_ID = '633147263244-84kumvs7scjqm6ps8im6b5lvhili7hur.apps.googleusercontent.com';
    // const CLIENT_ID = '633147263244-4vsiu15cslkogibbgih279fp98eq11d7.apps.googleusercontent.com';

    const { OAuth2Client } = require('google-auth-library');
    const client = new OAuth2Client(CLIENT_ID);

    async function verify() {
      const ticket = await client.verifyIdToken({
        idToken: googleToken,
        audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
        // Or, if multiple clients access the backend:
        //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
      });

    }
    verify().catch(console.error);
    console.log(ticket);
    email = ticket.email;
    const payload = ticket.getPayload();
    const userid = payload['sub'];
    // If request specified a G Suite domain:
    // const domain = payload['hd'];

    const isMailFound = await userServices.checkMail(email);

    if (isMailFound) {
      console.log('Email: ' + email)
      const oldUser = await schema.users.findOne({ email, isDeleted: false });
      const token = jwt.sign({
        email: oldUser.email,
        role: oldUser.role
      },
        process.env.KEY);

      res.status(StatusCodes.OK).json({
        'meta': {
          'status': 200,
          'msg': 'OK',
        },
        'res': {
          'message': 'User Log In With Google For Android Successfully (<:>)',
          'data': token,
        },
      });
    } else {

      let password = nanoid();

      userServices.createGoogleUser(email, password);

      const token = jwt.sign({
        email: email,
        role: 'user'
      },
        process.env.KEY);

      res.status(StatusCodes.OK).json({
        'meta': {
          'status': 200,
          'msg': 'OK',
        },

        'res': {
          'message': 'User Sign Up With Google For Android Successfully (<:>)',
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
        'error': 'Error In Sign Up With Google For Android Function (<:>)',
        'data': '',
      },
    });
  };
};


//=======================================================================================================


const newGoogle = async (req, res) => {
  // try {
  const { googleToken } = req.body;
  var email = '';
  var blogname = '';
  const CLIENT_ID = '633147263244-4vsiu15cslkogibbgih279fp98eq11d7.apps.googleusercontent.com';

  const { OAuth2Client } = require('google-auth-library');
  const client = new OAuth2Client(CLIENT_ID);

  async function verify() {
    const ticket = await client.verifyIdToken({
      idToken: googleToken,
      audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
      // Or, if multiple clients access the backend:
      //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
    });
    console.log(ticket);
    email = ticket.payload.email;
    console.log('Email: ' + email);
    blogname = ticket.payload.name;

    // const blogname = ticket.name;
    // const age = 21;
    const payload = ticket.getPayload();
    const userid = payload['sub'];
    // If request specified a G Suite domain:
    // const domain = payload['hd'];

    const oldUser = await schema.users.findOne({ email, isDeleted: false });
    console.log(oldUser)
    if (oldUser) {
      const token = jwt.sign({
        email: oldUser.email,
        role: oldUser.role
      },
        process.env.KEY);

      res.status(StatusCodes.OK).json({
        'meta': {
          'status': 200,
          'msg': 'OK',
        },
        'res': {
          'message': 'User Log In With Google For Android Successfully (<:>)',
          'data': token,
        },
      });
    } else {
      console.log('Email:================= ' + email);
      let password = nanoid();
      const age = 21;
      await userServices.createNewGoogleUser(email, password, blogname, age);
      userServices.createPrimaryBlog(email, blogname);

      const token = jwt.sign({
        email: email,
        role: 'user'
      },
        process.env.KEY);

      res.status(StatusCodes.OK).json({
        'meta': {
          'status': 200,
          'msg': 'OK',
        },

        'res': {
          'message': 'User Sign Up With Google For Android Successfully (<:>)',
          'data': token,
        },
      });
    }

    // } catch (error) {
    //   res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    //     'meta': {
    //       'status': 500,
    //       'msg': 'INTERNAL_SERVER_ERROR',
    //     },

    //     'res': {
    //       'error': 'Error In Sign Up With Google For Android Function (<:>)',
    //       'data': '',
    //     },
    //   });
    // };
  }
  verify().catch(console.error);


};

/* =============== /// <==> Export User signUp <==> /// =============== */
module.exports = {
  androidSignUpWithGoogle,
  newGoogle
}
/* =========== /// <==> End <==> ===========*/

