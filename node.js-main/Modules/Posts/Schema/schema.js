///////////////////////////////////////////////////////////////
/// <==> /// This File Contains Post Module Schema /// <==> ///
///////////////////////////////////////////////////////////////

/* ====================== /// <==> Variables Declaration <==> /// ====================== */
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Post Module Schema <==> /// ====================== */
const postSchema = mongoose.Schema(
  {
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
    tags: { type: [String] },
    //date: { type: Date }
    notesId: { type: String },
  },
  {
    Timestamps: true,
  }
);

const notesSchema = mongoose.Schema({
  likes: { type: [String] },
  comments: [
    {
      commentingBlogId: { type: String },
      commentingBlogTitle: { type: String },
      text: { type: String },
    },
  ],
  reblogs: [
    {
      rebloggingId: { type: String },
      text: { type: String },
    },
  ],
});

// const commentSchema = mongoose.Schema({
//   commentingBlogTitle: { type: String },
//   text: { type: String },
// });
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Export Post Module Schema <==> /// ====================== */
module.exports = {
  postSchema,
  notesSchema,
  //commentSchema,
};
/* =========== /// <==> End <==> ===========*/
