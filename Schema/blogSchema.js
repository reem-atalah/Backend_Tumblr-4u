/* eslint-disable linebreak-style */
/* eslint-disable new-cap */
// /////////////////////////////////////////////////////////////
// / <==> /// This File Contains User Module Schema /// <==> ///
// /////////////////////////////////////////////////////////////

/* ============== /// <==> Variables Declaration <==> /// ============== */
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

/* =========== /// <==> End <==> ===========*/

/* ============== /// <==> Blog Module Schema <==> /// ============== */

const blogSchema = new mongoose.Schema({
  title: {
    type: 'String',
    required: false,
    default: 'Untitled',
  },
  avatar: String,
  accent: String,
  headerImage: String,
  background: String,
  titleColor: String,
  showDescription:Boolean,
  showAvatar:Boolean,
  showHeaderImage:Boolean,
  stretchHeaderImage:Boolean,
  showTitle:Boolean,
  reblog_parent_id: { // not assigned in db
    type: 'String',
    required: false,

  },
  blockedBlogs: [String],
  followers: [String],
  group_blogs_id: { // not assigned in db
    type: 'String',
    required: false,

  },
  userEmail: String,
  privacy: Boolean,
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
  postsIds: {
    type: [String],
  },
  isDeleted: {
    type: 'Boolean',
  },
  themeId: String, // not assigned in db
}, {
  Timestamps: true,
});

/* =========== /// <==> End <==> ===========*/
blogSchema.pre('save', async function() {
  this.password = await bcrypt.hash(this.password, 8);
});

/* ============== /// <==> Export Blog Module Schema <==> /// ============== */
module.exports = {
  blogSchema,
};
/* =========== /// <==> End <==> ===========*/
