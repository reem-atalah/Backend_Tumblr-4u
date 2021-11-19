// ///////////////////////////////////////////////////////////
// // <==> This File Contains All Admin Role Policies <==> ////
// ///////////////////////////////////////////////////////////

/* ==================== <-- Variables Declarations --> ==================== */
const searchEndPt=require('../../../Modules/Search/Search dashborad/endPoints');

/* =========== <--> End <--> =========== */

/* ==================== <-- Admin Role Policies --> ==================== */
const adminPolicies = [searchEndPt.getSearchDash];
/* =========== <--> End <--> =========== */

/* ================== <-- Export Admin Role Policies --> ================== */
module.exports = adminPolicies;
/* =========== <--> End <--> =========== */
