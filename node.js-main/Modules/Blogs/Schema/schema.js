///////////////////////////////////////////////////////////////
/// <==> /// This File Contains Blog Module Schema /// <==> ///
///////////////////////////////////////////////////////////////

/* ====================== /// <==> Variables Declaration <==> /// ====================== */
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Post Module Schema <==> /// ====================== */
const blogSchema = mongoose.Schema({
    postsIds: {
        type: [String]
    }
    
}, {
    Timestamps: true,
});
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Export Post Module Schema <==> /// ====================== */
module.exports = blogSchema;
/* =========== /// <==> End <==> ===========*/