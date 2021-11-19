// ///////////////////////////////////////////////////////////
// /// <==> /// This File Creates blogs Collection /// <==> ///
// ///////////////////////////////////////////////////////////

// /* =============== /// <==> Variables Declaration <==> /// =============== */
const mongoose = require('mongoose');
const searchScema = require('../Schema/schema');
// /* =========== /// <==> End <==> ===========*/

// /* ================= /// <==> Create User Model <==> /// ================= */
const Blogs = mongoose.model('Blogs', searchScema.blog);
const Posts = mongoose.model('Posts', searchScema.post);
// /* =========== /// <==> End <==> ===========*/

// /* ================= /// <==> Export User Model <==> /// ================= */
module.exports = {Blogs, Posts};
// /* =========== /// <==> End <==> ===========*/
