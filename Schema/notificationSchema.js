/* eslint-disable linebreak-style */
/* eslint-disable new-cap */
// /////////////////////////////////////////////////////////////
// / <==> /// This File Contains notificaiton Module Schema /// <==> ///
// /////////////////////////////////////////////////////////////

/* ============== /// <==> Variables Declaration <==> /// ============== */
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { number } = require('joi');
/* =========== /// <==> End <==> ===========*/

/* ============== /// <==> notificaiton Module Schema <==> /// ============== */
const notificaitonSchema = mongoose.Schema({
  type: {
    type: String,
  },
  content: {
    type: String,
  },
  blogName: {
    type: String,
  },
  date: {
    type: String,
  },
  userId:{
    type: String,
  },
  blogId:{
    type: String,
  }
}, {
  Timestamps: true,
});

/* =========== /// <==> End <==> ===========*/

/* ============== /// <==> Export notification Module Schema <==> /// ============== */
module.exports = {
    notificaitonSchema,
};
/* =========== /// <==> End <==> ===========*/
