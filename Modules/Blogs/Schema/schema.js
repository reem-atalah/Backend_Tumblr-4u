// /////////////////////////////////////////////////////////////
// / <==> /// This File Contains User Module Schema /// <==> ///
// /////////////////////////////////////////////////////////////

/* ================= /// <==> Variables Declaration <==> /// ================ */
const mongoose = require('mongoose');
/* =========== /// <==> End <==> ===========*/

/* ================ /// <==> User Module Schema <==> /// =================== */

const blogSchema = new mongoose.Schema({
  id: {
    type: 'String',
    required: true,

  },
  title: {
    type: 'String',
    required: true,

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
  isDeleted: {
    type: 'Boolean',
  },
  themeId: String,

});

/* =========== /// <==> End <==> ===========*/

/* ======================== <-- User Hooks --> ======================== */


/* =========== <--> End <--> =========== */

/* =============== /// <==> Export User Module Schema <==> /// ============== */
module.exports = {blogSchema};


/* =========== /// <==> End <==> ===========*/
