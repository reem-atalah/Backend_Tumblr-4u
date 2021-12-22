//////////////////////////////////////////////////////////////////////
/// <==> /// This File Contains Advertising Module Schema /// <==> ///
//////////////////////////////////////////////////////////////////////

/* ====================== /// <==> Variables Declaration <==> /// ====================== */
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Advertising Module Schema <==> /// ====================== */
const advertisingSchema = mongoose.Schema({
    title: { type: String },
    description: { type: String },
    isDeleted: { type: Boolean, default: false },
    isBlocked: { type: Boolean, default: false },
}, {
    Timestamps: true,
});
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Export Advertising Module Schema <==> /// ====================== */
module.exports = advertisingSchema;
/* =========== /// <==> End <==> ===========*/