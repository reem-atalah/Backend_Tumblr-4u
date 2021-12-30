/////////////////////////////////////////////////////////////
//// <==> This File Contains All Admin Role Policies <==> ////
/////////////////////////////////////////////////////////////

/* ======================== <-- Variables Declarations --> ======================== */
const userEndPoints = require('../../../Modules/Users/endPoints');
const postEndPoints = require('../../../Modules/Posts/endPoints');
const reportEndPoints = require('../../../Modules/Report/endPoints');
const advertisingEndPoints = require('../../../Modules/Advertising/endPoints');

/* =========== <--> End <--> =========== */

/* ======================== <-- Admin Role Policies --> ======================== */
const adminPolicies = [userEndPoints.Update_Profile,
    userEndPoints.Update_Password,
    userEndPoints.Deactivate,
    userEndPoints.Activate,
    userEndPoints.Get_All_Users,
    userEndPoints.Block_User,
    postEndPoints.Create_Post,
    postEndPoints.Edit_Post,
    postEndPoints.Delete_Post,
    postEndPoints.Get_Posts,
    postEndPoints.Get_All_Posts,
    postEndPoints.Block_Post,
    reportEndPoints.Create_Report,
    reportEndPoints.Get_Report,
    advertisingEndPoints.Create_Advertising,
    advertisingEndPoints.Get_All_Advertisings,
    advertisingEndPoints.Update_Advertising,
    advertisingEndPoints.Delete_Advertising,

];
/* =========== <--> End <--> =========== */

/* ======================== <-- Export Admin Role Policies --> ======================== */
module.exports = adminPolicies;
/* =========== <--> End <--> =========== */