/* eslint-disable linebreak-style */
// ///////////////////////////////////////////////////////////
// // <==> This File Contains All User Admin Role Policies <==> ////
// ///////////////////////////////////////////////////////////

/* =================== <-- Variables Declarations --> =================== */
const searchEndPt=require('../../../Modules/Search/Search dashborad/endPoints');
const userEndPoints = require('../../../Modules/Users/endPoints');
const blogEndPoints = require('../../../Modules/Blogs/endPoints');
const postEndPoints = require('../../../Modules/Posts/endPoints');

/* =========== <--> End <--> =========== */

/* =================== <-- User Admin Role Policies --> =================== */
const userAdminPolicies = [
  searchEndPt.getSearchDash,
  userEndPoints.followBlog,
  userEndPoints.unfollowBlog,
  blogEndPoints.blockBlog,
  blogEndPoints.unblockBlog,
  postEndPoints.createPost,
  postEndPoints.editPost,
  postEndPoints.deletePost,
  postEndPoints.getDashboard,
  postEndPoints.getNotes,
  postEndPoints.likePress,
  postEndPoints.makeComment,
  postEndPoints.reblogPost,
  postEndPoints.removeComment,
  postEndPoints.removeReblog,
  postEndPoints.shareWith,
  postEndPoints.showPost,
];
/* =========== <--> End <--> =========== */

/* =================== <-- Export Admin Role Policies --> =================== */
module.exports = userAdminPolicies;
/* =========== <--> End <--> =========== */
