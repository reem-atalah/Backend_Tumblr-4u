/////////////////////////////////////////////////////////////
/// <==> /// This File Creates Report Collection /// <==> ///
/////////////////////////////////////////////////////////////

/* ====================== /// <==> Variables Declaration <==> /// ====================== */
const mongoose = require('mongoose');
const reportSchema = require('../Schema/schema');
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Create Report Model <==> /// ====================== */
const reports = mongoose.model('Reports', reportSchema);
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Export Report Model <==> /// ====================== */
module.exports = reports;
/* =========== /// <==> End <==> ===========*/