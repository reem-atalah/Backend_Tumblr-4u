/* eslint-disable linebreak-style */
// /////////////////////////////////////////////////////////
// / <==> /// This File Creates Collection /// <==> ///
// /////////////////////////////////////////////////////////

/* ================ /// <==> Variables Declaration <==> /// ================ */
const mongoose = require('mongoose');
const userSchema = require('../Schema/schema');
const postSchema = require('../Schema/schema');
const blogSchema = require('../Schema/schema');

/* =========== /// <==> End <==> ===========*/

/* ================ /// <==> Create  Model <==> /// ================ */
const users = mongoose.model('Users', userSchema);
const Posts = mongoose.model('Posts', postSchema);
const blogs = mongoose.model('blogs', blogSchema);

/* =========== /// <==> End <==> ===========*/

/* ================ /// <==> Export Model <==> /// ================ */
module.exports = {
  users,
  Posts,
  blogs,
};
/* =========== /// <==> End <==> ===========*/
