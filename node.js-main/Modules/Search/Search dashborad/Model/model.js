// ///////////////////////////////////////////////////////////
// /// <==> /// This File Creates blogs Collection /// <==> ///
// ///////////////////////////////////////////////////////////

// /* ====================== /// <==> Variables Declaration <==> /// ====================== */
const mongoose = require('mongoose');
const searchScema = require('../Schema/schema');
// /* =========== /// <==> End <==> ===========*/

// /* ====================== /// <==> Create User Model <==> /// ====================== */
const blogs = mongoose.model('Blogs', searchScema.blog);
const posts = mongoose.model('Posts', searchScema.post);
// /* =========== /// <==> End <==> ===========*/

// /* ====================== /// <==> Export User Model <==> /// ====================== */
module.exports = {blogs,posts};
// /* =========== /// <==> End <==> ===========*/