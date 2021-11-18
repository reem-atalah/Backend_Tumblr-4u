/////////////////////////////////////////////////////////////
//// <==> This File Contains All Admin Role Policies <==> ////
/////////////////////////////////////////////////////////////

/* ======================== <-- Variables Declarations --> ======================== */
const userEndPoints = require('../../../Modules/Users/endPoints');
// const postEndPoints = require('../../../Modules/Posts/endPoints');
// const reportEndPoints = require('../../../Modules/Report/endPoints');
// const advertisingEndPoints = require('../../../Modules/Advertising/endPoints');

/* =========== <--> End <--> =========== */

/* ======================== <-- Admin Role Policies --> ======================== */
const adminPolicies = [
    // userEndPoints.Update_Profile,
];
/* =========== <--> End <--> =========== */

/* ======================== <-- Export Admin Role Policies --> ======================== */
module.exports = adminPolicies;
/* =========== <--> End <--> =========== */