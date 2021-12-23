/* eslint-disable linebreak-style */
/* eslint-disable new-cap */
// /////////////////////////////////////////////////////////////
// / <==> /// This File Contains User Module Schema /// <==> ///
// /////////////////////////////////////////////////////////////

/* ============== /// <==> Variables Declaration <==> /// ============== */
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { number } = require('joi');
/* =========== /// <==> End <==> ===========*/

/* ============== /// <==> User Module Schema <==> /// ============== */
const userSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  age: {
    type: Number,
  },

  blogsId: [{type: String}],

  favoriteBlogs: [{type: String}],

  bodyColor: {
    type: Number,
    deafult: 0,
  },

  followedTags: {
    type: [String],
  },

  following_blogs: [{type: String}],

  likes_posts_id: [{type: String}],

  role: {
    type: String,
    default: 'user',
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isActivated: {
    type: Boolean,
    default: true,
  },
  isBlocked: {
    type: Boolean,
    default: false,
  },
  themeId: {
    type: String,
  },
}, {
  Timestamps: true,
});

/* =========== /// <==> End <==> ===========*/

/* ======================== <-- User Hooks --> ======================== */

/* ------------ Hashing Password In Sign Up ------------ */
  userSchema.pre('save', async function() {
  this.password = await bcrypt.hash(this.password, 8);
});

/* =========== <--> End <--> =========== */

/* ============== /// <==> Export User Module Schema <==> /// ============== */
module.exports = {
  userSchema,
};
/* =========== /// <==> End <==> ===========*/
