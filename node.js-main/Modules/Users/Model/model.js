///////////////////////////////////////////////////////////
/// <==> /// This File Creates User Collection /// <==> ///
///////////////////////////////////////////////////////////

/* ====================== /// <==> Variables Declaration <==> /// ====================== */
const mongoose = require('mongoose');
const userSchema = require('../Schema/schema');
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Create User Model <==> /// ====================== */
const users = mongoose.model('Users', userSchema);
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Export User Model <==> /// ====================== */
module.exports = users;
/* =========== /// <==> End <==> ===========*/