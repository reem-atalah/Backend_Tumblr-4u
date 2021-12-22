// ///////////////////////////////////////////////////////////
// // <==> This File Contains All User Admin Role Policies <==> ////
// ///////////////////////////////////////////////////////////

/* =================== <-- Variables Declarations --> =================== */
const searchEndPt=require('../../../Modules/Search/Search dashborad/endPoints');
const userEndPoints = require('../../../Modules/Users/endPoints');
const blogEndPoints = require('../../../Modules/Blogs/endPoints');
const postEndPoints = require('../../../Modules/Posts/endPoints');

/* =========== <--> End <--> =========== */

/* =================== <-- User Role Policies --> =================== */
const userAdminPolicies = [
  userEndPoints.googleInfo,
  searchEndPt.getSearchDash,
  userEndPoints.followBlog,
  userEndPoints.unfollowBlog,
  userEndPoints.createBlog,
  userEndPoints.deleteBlog,
  blogEndPoints.blockBlog,
  blogEndPoints.unblockBlog,
  blogEndPoints.editBlog,
  blogEndPoints.retrieveBlog,
  postEndPoints.createPost,
  postEndPoints.showPost,
  postEndPoints.editPost,
  postEndPoints.deletePost,
  postEndPoints.likePress,
  postEndPoints.makeComment,
  postEndPoints.reblogPost,
  postEndPoints.removeComment,
  postEndPoints.removeReblog,
  postEndPoints.getNotes,
  postEndPoints.getDashboard,
  
];
/* =========== <--> End <--> =========== */

/* =================== <-- Export Admin Role Policies --> =================== */
module.exports = userAdminPolicies;
/* =========== <--> End <--> =========== */
