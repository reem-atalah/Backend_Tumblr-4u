// ///////////////////////////////////////////////////////////
// // <==> This File Contains All Super Admin Role Policies <==> ////
// ///////////////////////////////////////////////////////////

/* =================== <-- Variables Declarations --> =================== */
const userEndPoints = require('../../../Modules/Users/endPoints');
const blogEndPoints = require('../../../Modules/Blogs/endPoints');


/* =========== <--> End <--> =========== */

/* ==================== <-- Super Admin Role Policies --> ================== */
const superAdminPolicies = [userEndPoints.followBlog,
  userEndPoints.unfollowBlog,
  blogEndPoints.blockBlog,
  blogEndPoints.unblockBlog,

];
/* =========== <--> End <--> =========== */

/* ================== <-- Export Admin Role Policies --> =================== */
module.exports = superAdminPolicies;
/* =========== <--> End <--> =========== */
