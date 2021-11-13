// ///////////////////////////////////////////////////////////
// /// <==> /// This File Creates blogs Collection /// <==> ///
// ///////////////////////////////////////////////////////////

// /* ====================== /// <==> Variables Declaration <==> /// ====================== */
const MONGOOSE = require('mongoose');
const SEARCH_SCHEMA = require('../Schema/schema');
// /* =========== /// <==> End <==> ===========*/

// /* ====================== /// <==> Create User Model <==> /// ====================== */
const BLOGS = MONGOOSE.model('Blogs', SEARCH_SCHEMA.BLOG);
const POSTS = MONGOOSE.model('Posts', SEARCH_SCHEMA.POST);
// /* =========== /// <==> End <==> ===========*/

// /* ====================== /// <==> Export User Model <==> /// ====================== */
module.exports = {BLOGS,POSTS};
// /* =========== /// <==> End <==> ===========*/