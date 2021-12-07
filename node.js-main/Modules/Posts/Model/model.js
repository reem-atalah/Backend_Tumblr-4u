///////////////////////////////////////////////////////////
/// <==> /// This File Creates Post Collection /// <==> ///
///////////////////////////////////////////////////////////

/* ====================== /// <==> Variables Declaration <==> /// ====================== */
const mongoose = require('mongoose');
const schemas = require('../Schema/schema');
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Create Post Model <==> /// ====================== */
const posts = mongoose.model('Posts', schemas.postSchema);
const notes = mongoose.model('notes', schemas.notesSchema);
//const comment = mongoose.model('comments', schemas.commentSchema);
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Export Post Model <==> /// ====================== */
module.exports = {
    posts,
    notes,
    //comment,
};
/* =========== /// <==> End <==> ===========*/