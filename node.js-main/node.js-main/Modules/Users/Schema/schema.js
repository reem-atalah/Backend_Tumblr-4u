///////////////////////////////////////////////////////////////
/// <==> /// This File Contains User Module Schema /// <==> ///
///////////////////////////////////////////////////////////////

/* ====================== /// <==> Variables Declaration <==> /// ====================== */
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> User Module Schema <==> /// ====================== */
const userSchema = mongoose.Schema({
    username: { type: String },
    email: { type: String },
    password: { type: String },
    cpassword: { type: String },
    phone: { type: String },
    location: { type: String },
    role: { type: String },
    isDeleted: { type: Boolean, default: false },
    isVerified: { type: Boolean, default: false },
    isActivated: { type: Boolean, default: true },
    isBlocked: { type: Boolean, default: false },
}, {
    Timestamps: true,
});
/* =========== /// <==> End <==> ===========*/

/* ======================== <-- User Hooks --> ======================== */

/* ------------ Hashing Password In Sign Up ------------ */
userSchema.pre('save', async function() {
    this.password = await bcrypt.hash(this.password, 8);
    this.cpassword = await bcrypt.hash(this.cpassword, 8);
});

/* =========== <--> End <--> =========== */

/* ====================== /// <==> Export User Module Schema <==> /// ====================== */
module.exports = userSchema;
/* =========== /// <==> End <==> ===========*/