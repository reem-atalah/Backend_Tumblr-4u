// /////////////////////////////////////////////////////////
// / <==> /// This File Creates User Collection /// <==> ///
// /////////////////////////////////////////////////////////

/* ================ /// <==> Variables Declaration <==> /// ================= */
const mongoose = require('mongoose');
const {blogSchema} = require('../Schema/schema');
/* =========== /// <==> End <==> ===========*/

/* ==================== /// <==> Create User Model <==> /// ================ */

const blogs = mongoose.model('blogs', blogSchema);


/* =========== /// <==> End <==> ===========*/

/* ================== /// <==> Export User Model <==> /// ================ */
module.exports ={blogs};


/* =========== /// <==> End <==> ===========*/
