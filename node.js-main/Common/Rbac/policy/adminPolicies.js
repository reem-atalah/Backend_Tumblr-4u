// ///////////////////////////////////////////////////////////
// // <==> This File Contains All Admin Role Policies <==> ////
// ///////////////////////////////////////////////////////////

/* ================== <-- Variables Declarations --> ======================== */
const userEndPoints = require('../../../Modules/Users/endPoints');
const blogEndPoints = require('../../../Modules/Blogs/endPoints');


/* =========== <--> End <--> =========== */

/* ==================== <-- Admin Role Policies --> ======================== */
const adminPolicies = [userEndPoints.followBlog,
  userEndPoints.unfollowBlog,
  blogEndPoints.blockBlog,
  blogEndPoints.unblockBlog,


];
/* =========== <--> End <--> =========== */

/* =================== <-- Export Admin Role Policies --> =================== */
module.exports = adminPolicies;
/* =========== <--> End <--> =========== */
