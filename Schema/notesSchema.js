/* eslint-disable linebreak-style */
/* eslint-disable new-cap */
// /////////////////////////////////////////////////////////////
// / <==> /// This File Contains User Module Schema /// <==> ///
// /////////////////////////////////////////////////////////////

/* ============== /// <==> Variables Declaration <==> /// ============== */
const mongoose = require('mongoose');
/* =========== /// <==> End <==> ===========*/


/* ============== /// <==> Notes Schema <==> /// ============== */

const notesSchema = mongoose.Schema({
  likes: {type: [String]},
  comments: [
    {
      commentingBlogId: {type: String},
      commentingBlogTitle: {type: String},
      text: {type: String},
    },
  ],
  reblogs: [
    {
      rebloggingId: {type: String},
      text: {type: String},
    },
  ],
});

/* =========== /// <==> End <==> ===========*/

/* ============== /// <==> Export Post Module Schema <==> /// ============== */
module.exports = {
  notesSchema,
};
/* =========== /// <==> End <==> ===========*/
