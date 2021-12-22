/* eslint-disable linebreak-style */
/* eslint-disable new-cap */
// /////////////////////////////////////////////////////////////
// / <==> /// This File Contains User Module Schema /// <==> ///
// /////////////////////////////////////////////////////////////

/* ============== /// <==> Variables Declaration <==> /// ============== */
const { boolean } = require('joi');
const mongoose = require('mongoose');
/* =========== /// <==> End <==> ===========*/


/* ============== /// <==> Post Module Schema <==> /// ============== */

const postSchema = mongoose.Schema({
  blogId: {
    type: String,
    required: true,
  },
  postHtml: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  tags: {type: [String]},
  // date: { type: Date }
  notesId: {type: String},
  isDeleted: {type: Boolean},

}, {
  Timestamps: true,
});

/* =========== /// <==> End <==> ===========*/

/* ============== /// <==> Export Post Module Schema <==> /// ============== */
module.exports = {
  postSchema,
};
/* =========== /// <==> End <==> ===========*/
