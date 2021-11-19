// ///////////////////////////////////////////////////////////
// // <==> This File Contains All Super Admin Role Policies <==> ////
// ///////////////////////////////////////////////////////////

/* =================== <-- Variables Declarations --> =================== */
// const userEndPoints = require('../../../Modules/Users/endPoints');
// const postEndPoints = require('../../../Modules/Posts/endPoints');
// const reportEndPoints = require('../../../Modules/Report/endPoints');
const searchEndPt=require('../../../Modules/Search/Search dashborad/endPoints');

/* =========== <--> End <--> =========== */

/* =================== <-- Super Admin Role Policies --> =================== */
const superAdminPolicies = [searchEndPt.getSearchDash];
/* =========== <--> End <--> =========== */

/* =================== <-- Export Admin Role Policies --> =================== */
module.exports = superAdminPolicies;
/* =========== <--> End <--> =========== */
