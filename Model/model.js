/* eslint-disable linebreak-style */
// /////////////////////////////////////////////////////////
// / <==> /// This File Creates Collection /// <==> ///
// /////////////////////////////////////////////////////////

/* ================ /// <==> Variables Declaration <==> /// ================ */
const mongoose = require('mongoose');
const schema = require('../Schema/schema');

/* =========== /// <==> End <==> ===========*/

/* ================ /// <==> Create  Model <==> /// ================ */
const users = mongoose.model('Users', schema.userSchema);
const Posts = mongoose.model('Posts', schema.postSchema);
const blogs = mongoose.model('blogs', schema.blogSchema);

/* =========== /// <==> End <==> ===========*/

/* ================ /// <==> Export Model <==> /// ================ */
module.exports = {
  users,
  Posts,
  blogs,
};
/* =========== /// <==> End <==> ===========*/
