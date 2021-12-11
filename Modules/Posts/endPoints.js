/* eslint-disable linebreak-style */
// //////////////////////////////////////////////////////////////
// // <==> This File Contains All Post Module EndPoints <==> ////
// //////////////////////////////////////////////////////////////

/* =================== <-- Posts Module EndPoints --> =================== */
const createPost = 'Posts: createPost';
const showPost = 'Posts: showPost';
const editPost = 'Posts: editPost';
const deletePost = 'Posts: deletePost';
const shareWith = 'Posts: shareWith';
const reblogPost = 'Posts: reblogPost';
const getDashboard = 'Posts: getDashboard';
const getNotes = 'Posts: getNotes';
const likePress = 'Posts: likePress';
const makeComment = 'Posts: makeComment';
const removeComment = 'Posts: removeComment';
const removeReblog = 'Posts: removeReblog';

// const Get_Posts = 'Post:Get_Posts';
// const Get_All_Posts = 'Post:Get_All_Posts';
// const Block_Post = 'Post:Block_Post';

const postEndPoints = {
  createPost,
  showPost,
  editPost,
  deletePost,
  likePress,
  makeComment,
  reblogPost,
  removeComment,
  removeReblog,
  shareWith,
  getNotes,
  getDashboard,
};
/* =========== <--> End <--> =========== */

/* =================== <-- Export User EndPoints --> =================== */
module.exports = postEndPoints;
/* =========== <--> End <--> =========== */
