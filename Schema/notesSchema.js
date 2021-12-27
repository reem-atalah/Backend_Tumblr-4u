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
  postId: {type: String},
  likes: [
    {
    noteType: {type: String, default: 'like'},
    blogId: {type: String},
    isDeleted: {type: Boolean, default: false},
    }
  ],
  comments: [
    {
      noteType: {type: String, default: 'comment'},
      blogId: {type: String},
      text: {type: String},
      isDeleted: {type: Boolean, default: false},
    },
  ],
  reblogs: [
    {
      noteType: {type: String, default: 'reblog'},
      blogId: {type: String},
      text: {type: String},
      isDeleted: {type: Boolean, default: false},
    },
  ],
  isDeleted: {type: Boolean, default: false},
});

/* =========== /// <==> End <==> ===========*/

/* ============== /// <==> Export Post Module Schema <==> /// ============== */
module.exports = {
  notesSchema,
};
/* =========== /// <==> End <==> ===========*/
