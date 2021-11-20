// ///////////////////////////////////////////////////////////
// // <==> This File Contains All User Role Policies <==> ////
// ///////////////////////////////////////////////////////////

/* ================== <-- Variables Declarations --> =================== */
const userEndPoints = require('../../../Modules/Users/endPoints');
const blogEndPoints = require('../../../Modules/Blogs/endPoints');

/* =========== <--> End <--> =========== */

/* ================== <-- User Role Policies --> ==================== */
const userPolicies = [userEndPoints.followBlog,
  userEndPoints.unfollowBlog,
  blogEndPoints.blockBlog,
  blogEndPoints.unblockBlog,

];
/* =========== <--> End <--> =========== */

/* ================== <-- Export User Role Policies --> ================ */
module.exports = userPolicies;
/* =========== <--> End <--> =========== */
