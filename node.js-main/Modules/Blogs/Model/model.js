///////////////////////////////////////////////////////////
/// <==> /// This File Creates Blog Collection /// <==> ///
///////////////////////////////////////////////////////////

/* ====================== /// <==> Variables Declaration <==> /// ====================== */
const mongoose = require('mongoose');
const blogSchema = require('../Schema/schema');
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Create Post Model <==> /// ====================== */
const blogs = mongoose.model('blogs', blogSchema);
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Export Post Model <==> /// ====================== */
module.exports = blogs;
/* =========== /// <==> End <==> ===========*/