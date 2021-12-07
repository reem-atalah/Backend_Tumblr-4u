///////////////////////////////////////////////////////////////
/// <==> /// This File Contains Blog Module Schema /// <==> ///
///////////////////////////////////////////////////////////////

/* ====================== /// <==> Variables Declaration <==> /// ====================== */
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Post Module Schema <==> /// ====================== */
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

/* ====================== /// <==> Export Post Module Schema <==> /// ====================== */
module.exports = blogSchema;
/* =========== /// <==> End <==> ===========*/