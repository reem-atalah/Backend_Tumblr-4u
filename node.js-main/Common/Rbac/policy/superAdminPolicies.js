/////////////////////////////////////////////////////////////
//// <==> This File Contains All Super Admin Role Policies <==> ////
/////////////////////////////////////////////////////////////

/* ======================== <-- Variables Declarations --> ======================== */
const userEndPoints = require('../../../Modules/Users/endPoints');
const postEndPoints = require('../../../Modules/Posts/endPoints');
const reportEndPoints = require('../../../Modules/Report/endPoints');
const advertisingEndPoints = require('../../../Modules/Advertising/endPoints');

/* =========== <--> End <--> =========== */

/* ======================== <-- Super Admin Role Policies --> ======================== */
const superAdminPolicies = [userEndPoints.Update_Profile,
    userEndPoints.Update_Password,
    userEndPoints.Deactivate,
    userEndPoints.Activate,
    userEndPoints.Get_All_Users,
    userEndPoints.Add_Admin,
    userEndPoints.Get_All_Admins,
    userEndPoints.Delete_Admin,
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
module.exports = superAdminPolicies;
/* =========== <--> End <--> =========== */