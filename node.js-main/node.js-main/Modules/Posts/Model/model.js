///////////////////////////////////////////////////////////
/// <==> /// This File Creates Post Collection /// <==> ///
///////////////////////////////////////////////////////////

/* ====================== /// <==> Variables Declaration <==> /// ====================== */
const mongoose = require('mongoose');
const postSchema = require('../Schema/schema');
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Create Post Model <==> /// ====================== */
const posts = mongoose.model('Posts', postSchema);
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Export Post Model <==> /// ====================== */
module.exports = posts;
/* =========== /// <==> End <==> ===========*/