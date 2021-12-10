// ///////////////////////////////////////////////////////////
// // <==> This File Contains All Super Admin Role Policies <==> ////
// ///////////////////////////////////////////////////////////

/* =================== <-- Variables Declarations --> =================== */
const searchEndPt=require('../../../Modules/Search/Search dashborad/endPoints');
const userEndPoints = require('../../../Modules/Users/endPoints');
const blogEndPoints = require('../../../Modules/Blogs/endPoints');
const postEndPoints = require('../../../Modules/Posts/endPoints');

/* =========== <--> End <--> =========== */

/* =================== <-- Super Admin Role Policies --> =================== */
const superAdminPolicies = [
  searchEndPt.getSearchDash,
  userEndPoints.followBlog,
  userEndPoints.googleInfo,
  userEndPoints.unfollowBlog,
  blogEndPoints.blockBlog,
  blogEndPoints.unblockBlog,
  postEndPoints.createPost,
  postEndPoints.editPost,
  postEndPoints.deletePost,
];
/* =========== <--> End <--> =========== */

/* =================== <-- Export Admin Role Policies --> =================== */
module.exports = superAdminPolicies;
/* =========== <--> End <--> =========== */
