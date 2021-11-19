///////////////////////////////////////////////////////////////
/// <==> /// This File Contains Post Module Schema /// <==> ///
///////////////////////////////////////////////////////////////

/* ====================== /// <==> Variables Declaration <==> /// ====================== */
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Post Module Schema <==> /// ====================== */
const postSchema = mongoose.Schema({
    title: { type: String },
    description: { type: String },
    createdBy: { type: String, ref: 'Users' },
    isDeleted: { type: Boolean, default: false },
    isBlocked: { type: Boolean, default: false },

}, {
    Timestamps: true,
});
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Export Post Module Schema <==> /// ====================== */
module.exports = postSchema;
/* =========== /// <==> End <==> ===========*/