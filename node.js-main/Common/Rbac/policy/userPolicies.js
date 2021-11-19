// ///////////////////////////////////////////////////////////
// // <==> This File Contains All User Admin Role Policies <==> ////
// ///////////////////////////////////////////////////////////

/* =================== <-- Variables Declarations --> =================== */
// const userEndPoints = require('../../../Modules/Users/endPoints');
// const postEndPoints = require('../../../Modules/Posts/endPoints');
// const reportEndPoints = require('../../../Modules/Report/endPoints');
const searchEndPt=require('../../../Modules/Search/Search dashborad/endPoints');

/* =========== <--> End <--> =========== */

/* =================== <-- User Admin Role Policies --> =================== */
const userAdminPolicies = [searchEndPt.getSearchDash,

];
/* =========== <--> End <--> =========== */

/* =================== <-- Export Admin Role Policies --> =================== */
module.exports = userAdminPolicies;
/* =========== <--> End <--> =========== */
