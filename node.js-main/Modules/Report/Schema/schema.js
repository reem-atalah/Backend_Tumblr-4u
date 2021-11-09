///////////////////////////////////////////////////////////////
/// <==> /// This File Contains Report Module Schema /// <==> ///
///////////////////////////////////////////////////////////////

/* ====================== /// <==> Variables Declaration <==> /// ====================== */
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Report Module Schema <==> /// ====================== */
const reportSchema = mongoose.Schema({
    userId: { type: String },
    postId: { type: String },
    reportComment: { type: String },
    isDeleted: { type: Boolean, default: false },
}, {
    Timestamps: true,
});
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Export Report Module Schema <==> /// ====================== */
module.exports = reportSchema;
/* =========== /// <==> End <==> ===========*/