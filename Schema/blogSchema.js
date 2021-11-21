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

/* ============== /// <==> Export Blog Module Schema <==> /// ============== */
module.exports = {
  blogSchema,
};
/* =========== /// <==> End <==> ===========*/
