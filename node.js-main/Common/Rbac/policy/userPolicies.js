/////////////////////////////////////////////////////////////
//// <==> This File Contains All User Role Policies <==> ////
/////////////////////////////////////////////////////////////

/* ======================== <-- Variables Declarations --> ======================== */
// const userEndPoints = require('../../../Modules/Users/endPoints');
// const postEndPoints = require('../../../Modules/Posts/endPoints');
// const reportEndPoints = require('../../../Modules/Report/endPoints');
// const advertisingEndPoints = require('../../../Modules/Advertising/endPoints');
const searchEndPoints = require('../../../Modules/Search/Search dashborad/endPoints');

/* =========== <--> End <--> =========== */

/* ======================== <-- Search Role Policies --> ======================== */

const searchPolicies = [searchEndPoints.getSearchDash];

/* ======================== <-- Export Search Role Policies --> ======================== */
module.exports = searchPolicies;
/* =========== <--> End <--> =========== */