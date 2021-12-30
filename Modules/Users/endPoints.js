// //////////////////////////////////////////////////////////////
// // <==> This File Contains All User Module EndPoints <==> ////
// //////////////////////////////////////////////////////////////

/* ================== <-- User Modul EndPoints --> ================== */
const followBlog = 'User:folloBlog';
const unfollowBlog = 'User:unfollowBlog';
const doesFollow = 'User:doesFollow';
const createBlog = 'User:createBlog';
const deleteBlog = 'User:deleteBlog';
const deleteUser = 'User:deleteUser';
const retrieveUser='User:retrieveUser';
const googleInfo = 'User:googleInfo';
const changeEmail = 'User:changeEmail';
const getInterests = 'User: getInterests';
const updateColor = 'User: updateColor';

const userEndPoints = {
  retrieveUser,
  followBlog,
  unfollowBlog,
  doesFollow,
  createBlog,
  deleteBlog,
  deleteUser,
  googleInfo,
  changeEmail,
  getInterests,
  updateColor,
};
/* =========== <--> End <--> =========== */

/* ================== <-- Export User EndPoints --> ================== */
module.exports = userEndPoints;
/* =========== <--> End <--> =========== */
