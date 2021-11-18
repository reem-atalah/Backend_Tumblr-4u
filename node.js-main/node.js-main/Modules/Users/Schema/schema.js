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
    name: { type: String },
    email: { type: String },
    password: { type: String },
    age: { type: Number },
    city: { type: String },
    country: { type: String },

    favoriteBlogs: [{ type: String }],
    bodyColor: { type: String, deafult: 'trurBlue' },

    role: { type: String, default: 'user' },
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
});

/* =========== <--> End <--> =========== */

/* ====================== /// <==> Export User Module Schema <==> /// ====================== */
module.exports = userSchema;
/* =========== /// <==> End <==> ===========*/