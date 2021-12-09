/* eslint-disable linebreak-style */
/* eslint-disable new-cap */
// /////////////////////////////////////////////////////////////
// / <==> /// This File Contains User Module Schema /// <==> ///
// /////////////////////////////////////////////////////////////

/* ============== /// <==> Variables Declaration <==> /// ============== */
const mongoose = require('mongoose');

/* =========== /// <==> End <==> ===========*/

/* ============== /// <==> Blog Module Schema <==> /// ============== */

const blogSchema = new mongoose.Schema({
  title: {
    type: 'String',
    required: false,
    default: 'Untitled',
  },
  avatar: String,
  accent:String,
  headerImage:String,
  background:String,
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
  privacy: Boolean,
  name: {
    type: 'String',
  },
  updated: {
    type: 'Number',

  },
  description: {
    type: 'String',
  },
  password: {
    type: 'String',
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
  Timestamps: Boolean,
});

/* =========== /// <==> End <==> ===========*/

/* ============== /// <==> Export Blog Module Schema <==> /// ============== */
module.exports = {
  blogSchema,
};
/* =========== /// <==> End <==> ===========*/
