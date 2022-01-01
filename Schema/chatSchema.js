/* eslint-disable linebreak-style */
/* eslint-disable new-cap */
// /////////////////////////////////////////////////////////////
// / <==> /// This File Contains Chat Module Schema /// <==> ///
// /////////////////////////////////////////////////////////////

/* ============== /// <==> Variables Declaration <==> /// ============== */
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { number } = require('joi');
/* =========== /// <==> End <==> ===========*/

/* ============== /// <==> Chat Module Schema <==> /// ============== */
const chatSchema = mongoose.Schema({
  chat: {
    type: String,
  },
  receiverBlogName: {
    type: String,
  },
  sendBlogName: {
    type: String,
  },
  date: {
    type: String,
  },
  sendUserId:{
    type: String,
  },
  receiveUserId:{
    type: String,
  },
}, {
  Timestamps: true,
});

/* =========== /// <==> End <==> ===========*/

/* ============== /// <==> Export Chat Module Schema <==> /// ============== */
module.exports = {
    chatSchema,
};
/* =========== /// <==> End <==> ===========*/
