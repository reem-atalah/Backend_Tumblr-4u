// ///////////////////////////////////////////////////////////
// // <==> This File Contains All Admin Role Policies <==> ////
// ///////////////////////////////////////////////////////////

/* ==================== <-- Variables Declarations --> ==================== */
const searchEndPt=require('../../../Modules/Search/Search dashborad/endPoints');
const userEndPoints = require('../../../Modules/Users/endPoints');
const blogEndPoints = require('../../../Modules/Blogs/endPoints');
const postEndPoints = require('../../../Modules/Posts/endPoints');

/* =========== <--> End <--> =========== */

/* ==================== <-- Admin Role Policies --> ==================== */
const adminPolicies = [
  searchEndPt.getSearchDash,
  userEndPoints.googleInfo,
  userEndPoints.followBlog,
  userEndPoints.unfollowBlog,
  blogEndPoints.blockBlog,
  blogEndPoints.unblockBlog,
  postEndPoints.createPost,
  postEndPoints.editPost,
  postEndPoints.deletePost,
];
/* =========== <--> End <--> =========== */

/* ================== <-- Export Admin Role Policies --> ================== */
module.exports = adminPolicies;
/* =========== <--> End <--> =========== */
