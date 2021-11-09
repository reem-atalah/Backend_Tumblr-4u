//////////////////////////////////////////////////////////////////
/// <==> /// This File Creates Advertising Collection /// <==> ///
//////////////////////////////////////////////////////////////////

/* ====================== /// <==> Variables Declaration <==> /// ====================== */
const mongoose = require('mongoose');
const advertisingSchema = require('../Schema/schema');
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Create Advertising Model <==> /// ====================== */
const advertising = mongoose.model('Advertising', advertisingSchema);
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Export Advertising Model <==> /// ====================== */
module.exports = advertising;
/* =========== /// <==> End <==> ===========*/