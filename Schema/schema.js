/* eslint-disable linebreak-style */
/* eslint-disable new-cap */
// /////////////////////////////////////////////////////////////
// / <==> /// This File Contains User Module Schema /// <==> ///
// /////////////////////////////////////////////////////////////

/* ============== /// <==> Variables Declaration <==> /// ============== */
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
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
  city: {
    type: String,
  },
  country: {
    type: String,
  },

  blogsId: [{type: String}],

  favoriteBlogs: [{type: String}],

  bodyColor: {
    type: String,
    deafult: 'trurBlue',
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

}, {
  Timestamps: true,
});

/* ============== /// <==> Blog Module Schema <==> /// ============== */

const blogSchema = new mongoose.Schema({
  title: {
    type: 'String',
    required: false,
    default: 'Untitled',
  },
  reblog_parent_id: {
    type: 'String',
    required: false,

  },
  blockedBlogs: [String],
  followers: [String],
  group_blogs_id: {
    type: 'String',
    required: false,

  },
  name: {
    type: 'String',
    required: true,
  },
  updated: {
    type: 'Number',

  },
  description: {
    type: 'String',
  },
  password: {
    type: 'String',
    required: true,
  },
  isBlockedFromPrimary: {
    type: 'Boolean',

  },
  isPrimary: {
    type: 'Boolean',

  },
  blogVisitor: {
    type: 'Number',
  },
  followedTags: {
    type: [String],
  },
  postsIds: {
    type: [String],
  },
  isDeleted: {
    type: 'Boolean',
  },
  themeId: String,
}, {
  Timestamps: true,
});

/* =========== /// <==> End <==> ===========*/

/* ======================== <-- User Hooks --> ======================== */

/* ------------ Hashing Password In Sign Up ------------ */
userSchema.pre('save', async function() {
  this.password = await bcrypt.hash(this.password, 8);
  this.cpassword = await bcrypt.hash(this.cpassword, 8);
});

/* =========== <--> End <--> =========== */

/* ============== /// <==> Export User Module Schema <==> /// ============== */
module.exports = {
  userSchema,
  postSchema,
  blogSchema,
};
/* =========== /// <==> End <==> ===========*/
