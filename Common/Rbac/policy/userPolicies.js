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
  userEndPoints.changeEmail,
  searchEndPt.getSearchDash,
  userEndPoints.followBlog,
  userEndPoints.unfollowBlog,
  userEndPoints.doesFollow,
  userEndPoints.createBlog,
  userEndPoints.deleteBlog,
  userEndPoints.deleteUser,
  userEndPoints.retrieveUser,
  userEndPoints.getInterests,
  userEndPoints.updateColor,
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
  postEndPoints.getBlogPosts,
  postEndPoints.reportPost,
  postEndPoints.activityFeed,
  postEndPoints.uploadeImg,
  postEndPoints.getLikedPosts,
];
/* =========== <--> End <--> =========== */

/* =================== <-- Export Admin Role Policies --> =================== */
module.exports = userAdminPolicies;
/* =========== <--> End <--> =========== */
