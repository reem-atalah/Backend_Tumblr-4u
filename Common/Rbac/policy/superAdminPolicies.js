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
  postEndPoints.editPost,
  postEndPoints.deletePost,
  postEndPoints.uploadeImg,

];
/* =========== <--> End <--> =========== */

/* =================== <-- Export Admin Role Policies --> =================== */
module.exports = superAdminPolicies;
/* =========== <--> End <--> =========== */
