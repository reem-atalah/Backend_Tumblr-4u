/////////////////////////////////////////////////////////////
//// <==> This File Contains All User Role Policies <==> ////
/////////////////////////////////////////////////////////////

/* ======================== <-- Variables Declarations --> ======================== */
const userEndPoints = require('../../../Modules/Users/endPoints');
const postEndPoints = require('../../../Modules/Posts/endPoints');
const reportEndPoints = require('../../../Modules/Report/endPoints');
const advertisingEndPoints = require('../../../Modules/Advertising/endPoints');

/* =========== <--> End <--> =========== */

/* ======================== <-- User Role Policies --> ======================== */
const userPolicies = [userEndPoints.Update_Profile,
    userEndPoints.Update_Password,
    userEndPoints.Deactivate,
    userEndPoints.Activate,
    postEndPoints.Create_Post,
    postEndPoints.Edit_Post,
    postEndPoints.Delete_Post,
    postEndPoints.Get_Posts,
    postEndPoints.Get_All_Posts,
    reportEndPoints.Create_Report,
    advertisingEndPoints.Get_All_Advertisings,
];
/* =========== <--> End <--> =========== */

/* ======================== <-- Export User Role Policies --> ======================== */
module.exports = userPolicies;
/* =========== <--> End <--> =========== */