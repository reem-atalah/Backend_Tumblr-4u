// //////////////////////////////////////////////////////////////
// // <==> This File Contains All User Module EndPoints <==> ////
// //////////////////////////////////////////////////////////////

/* ================== <-- User Modul EndPoints --> ================== */
const followBlog = 'User:folloBlog';
const unfollowBlog = 'User:unfollowBlog';
const createBlog = 'User:createBlog';
const deleteBlog = 'User:deleteBlog';
const googleInfo = 'User:googleInfo';
const changeEmail = 'User:changeEmail';

const userEndPoints = {
  followBlog,
  unfollowBlog,
  createBlog,
  deleteBlog,
  googleInfo, 
  changeEmail
};
/* =========== <--> End <--> =========== */

/* ================== <-- Export User EndPoints --> ================== */
module.exports = userEndPoints;
/* =========== <--> End <--> =========== */
