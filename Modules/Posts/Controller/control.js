/* eslint-disable linebreak-style */
// /////////////////////////////////////////////////////////
// / <==> /// This File Contains Post Functions /// <==> ///
// /////////////////////////////////////////////////////////

/* =============== /// <==> Variables Declaration <==> /// =============== */
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
const {StatusCodes} = require('http-status-codes');
const schema = require('../../../Model/model');

/* =========== /// <==> End <==> ===========*/

/* =============== /// <==> Post Functions <==> /// =============== */
/* ----------- <---> Create Post <---> ------ */ // *** <===> Done <===>  *** //

/**
 * @function
 * @name createPost
 * @description Creates a blog post and saves its content in the database.
 * @param {String} blogId - Id of the blog to create the post.
 * @param {String} postHtml - Post Content.
 * @param {String} type - Post Type.
 * @param {String} state - Post State.
 * @param {Array} tags - Post Tags.
 *
 * @returns {String} Created Post Id.
 */

const createPost = async (blogId, postHtml, type, state, tags) => {
  try {
    var ret = ['',''];
    const existingBlog = await schema.blogs.findOne({_id: blogId});
    if (existingBlog) {
      const newNotes = new schema.notes();
      newNotes.save();
      const notesId = newNotes._id;
      newPost= new schema.Posts({blogId, postHtml, type, state, tags, notesId});
      newPost = await newPost.save();
      existingBlog.postsIds.push(newPost._id);
      // if the field is not in the database it will be created
      existingBlog.save();
      ret[0] = 'Post Created Successfully';
      ret[1] = newPost._id;
      return ret;
    } else {
      ret[0] = 'Blog Not Found';
      return ret;
    };
  } catch (error) {
    ret[0] = 'Error In Create Post Function';
    return ret;
  };
};

/**
 * @function
 * @name showPost
 * @description Shows a blog post by its id.
 * @param {string} postId - Id of the post to show.
 *
 * @returns {Object} the blog post content in the form of html string.
 */

/* ----------- <---> Show Post <---> ---- */ // *** <===> Done <===>  *** //
// Assumption: Edit Post Function Just Updates ( postHtml )
const showPost = async (postId) => {
  try {
    ret = ['',''];
    const existingPost = await schema.Posts.findOne({_id: postId});
    if (existingPost) {
      ret[0] = 'Post Returned Successfully';
      ret[1] = existingPost.postHtml;
      return ret;
    } else {
      ret[0] = 'Post Not Found';
      return ret;
    };
  } catch (error) {
    ret[0] = 'Error In Show Post Function';
    return ret;
  };
};

/* ----------- <---> Make Comment <---> -- */ // *** <===> Done <===>  *** //

/**
 * @function
 * @name makeComment
 * @description A blog makes a comment on a blog post.
 * @param {string} blogId - Id of the blog making the comment.
 * @param {string} postId - Id of the post to make the comment on.
 * @param {string} text - text of the comment.
 *
 * @returns {string} The id of the comment.
 */

// const makeComment = async (req, res) => {
const makeComment = async (blogId, postId, text) => {
  try {
    var ret = ['',''];
    const existingBlog = await schema.blogs.findOne({_id: blogId});
    const existingPost = await schema.Posts.findOne({_id: postId});
    if (existingBlog) {
      if (existingPost) {
        const notesId = existingPost.notesId;
        const existingNotes = await schema.notes.findOne({_id: notesId});
        const commentingBlogTitle = existingBlog.title;
        const commentingBlogId = blogId;
        if (existingNotes) {
          const comment = {
            commentingBlogId,
            commentingBlogTitle,
            text,
          };
          const lenBefore = existingNotes.comments.length;
          existingNotes.comments.push(comment);
          existingNotes.save();
          const commentsArrayAfter = existingNotes.comments;
          const commentObj = commentsArrayAfter[lenBefore];
          var commentId = commentObj._id;
        } else {
          ret[0] = 'Notes Not Found';
          return ret;
        }
        ret[0] = 'Comment Posted Successfully';
        ret[1] = commentId;
        return ret;
      } else {
        ret[0] = 'Post Not Found';
        return ret;
      }
    } else {
      ret[0] = 'Blog Not Found';
      return ret;
    }
  } catch (error) {
    ret[0] = 'Error in Make Comment Function';
    return ret;
  }
};

/* Loop on an array and check if an element exists*/ // <===> Done <===>  *** //

/**
 * @function
 * @name loopAndCheck
 * @description Loop on an array and check if an element exists.
 * @param {array} arr - Array to loop on.
 * @param {string} element - Element to look for.
 *
 * @returns {string} Boolean indicates whether the element exists or not.
 */

const loopAndCheck = (arr, element) => {
  let exist = 0;
  if (arr.length) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === element) {
        exist = 1;
      }
    }
  }
  return exist;
};

// Loop on Object in Array of Objects and check if Id exists*/ <===> Done <===>

/**
 * @function
 * @name loopObjAndCheck
 * @description Loop on Object in Array of Objects and check if Id exists.
 * @param {array} arr - Array to loop on.
 * @param {string} element - Element to look for.
 * @param {number} pos - Position of the found element if found.
 *
 * @returns {string} Boolean indicates whether the element exists or not.
 */

const loopObjAndCheck = (arr, element) => {
  let exist = 0;
  let pos = 0;
  if (arr.length) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]._id.toString() === element) {
        exist = 1;
        pos = i;
      }
    }
  }
  return [exist, pos];
};

// <---> Press Like of a Post (Like or Unlike) <--->*** <===> Done <===>  *** //
// Like should be done only one time by one blog

/**
 * @function
 * @name likePress
 * @description Like or Unlike a Post.
 * @param {string} blogId - Id of the blog pressing the like button.
 * @param {string} postId - Id of the post to like or unlike.
 *
 * @returns {string} .
 */

const likePress = async (blogId, postId) => {
  try {
    var ret = '';
    const existingBlog = await schema.blogs.findOne({_id: blogId});
    const existingPost = await schema.Posts.findOne({_id: postId});
    if (existingBlog) {
      if (existingPost) {
        const notesId = existingPost.notesId;
        const existingNotes = await schema.notes.findOne({_id: notesId});
        if (existingNotes) {
          const likesArray = existingNotes.likes;
          const exist = loopAndCheck(likesArray, blogId);
          if (exist) {
            existingNotes.likes.pull(blogId);
            existingNotes.save();
            ret = 'Post Unliked Successfully';
            return ret;
          } else {
            existingNotes.likes.push(blogId);
            existingNotes.save();
            ret = 'Post Liked Successfully';
            return ret;
          }
        } else {
          ret = 'Notes Not Found';
          return ret;
        }
      } else {
        ret = 'Post Not Found';
        return ret;
      }
    } else {
      ret = 'Blog Not Found';
      return ret;
    }
  } catch (error) {
    ret = 'Error in Press Like Function';
    return ret;
  }
};

/* ----------- <---> Reblog a Post <---> */ // *** <===> Done <===>  *** //

/**
 * @function
 * @name reblogPost
 * @description A blog reblogs a blog post.
 * @param {string} blogId - Id of the blog making the reblog.
 * @param {string} postId - Id of the post to reblog.
 * @param {string} text - text of the reblog.
 *
 * @returns {string} The id of the reblog.
 */

const reblogPost = async (blogId, postId, text) => {
  try {
    var ret = ['',''];
    const existingBlog = await schema.blogs.findOne({_id: blogId});
    const existingPost = await schema.Posts.findOne({_id: postId});
    if (existingBlog) {
      if (existingPost) {
        const notesId = existingPost.notesId;
        const existingNotes = await schema.notes.findOne({_id: notesId});
        const rebloggingId = blogId;
        if (existingNotes) {
          const reblog = {
            rebloggingId,
            text,
          };
          const lenBefore = existingNotes.reblogs.length;
          existingNotes.reblogs.push(reblog);
          existingNotes.save();
          const reblogsArrayAfter = existingNotes.reblogs;
          const reblogObj = reblogsArrayAfter[lenBefore];
          var reblogId = reblogObj._id;
        } else {
          ret[0] = 'Notes Not Found';
          return ret;
        }
        ret[0] = 'Post Reblogged Successfully';
        ret[1] = reblogId;
        return ret;
      } else {
        ret[0] = 'Post Not Found';
        return ret;
      }
    } else {
      ret[0] = 'Blog Not Found';
      return ret;
    }
  } catch (error) {
        ret[0] = 'Error in Reblog Post Function';
        return ret;
  }
};

/* ----------- <---> Remove Comment <---> */ // *** <===> Done <===>  *** //

/**
 * @function
 * @name removeComment
 * @description Remove a comment.
 * @param {string} postId - Id of the post to remove comment from.
 * @param {string} commentId - Id of the comment to remove.
 *
 * @returns {string} .
 */

const removeComment = async (postId, commentId) => {
  try {
    var ret = '';
    const existingPost = await schema.Posts.findOne({_id: postId});
    if (existingPost) {
      const notesId = existingPost.notesId;
      const existingNotes = await schema.notes.findOne({_id: notesId});
      if (existingNotes) {
        const commentsArray = existingNotes.comments;
        const exist = loopObjAndCheck(commentsArray, commentId)[0];
        const pos = loopObjAndCheck(commentsArray, commentId)[1];
        if (exist) {
          existingNotes.comments.pull(commentsArray[pos]);
        } else {
          ret = 'Comment Not Found';
          return ret;
        };
        existingNotes.save(); // whole document in db is saved
        ret = 'Comment Removed Successfully';
        return ret;
      } else {
        ret = 'Notes Not Found';
        return ret;
      };
    } else {
      ret = 'Post Not Found';
      return ret;
    };
  } catch (error) {
    ret = 'Error In Remove Comment Function';
    return ret;
  };
};

/* ----------- <---> Remove Reblog <---> */ // *** <===> Done <===>  *** //

/**
 * @function
 * @name removeReblog
 * @description Remove a reblog.
 * @param {string} postId - Id of the post to remove reblog from.
 * @param {string} reblogId - Id of the reblog to remove.
 *
 * @returns {string} .
 */

const removeReblog = async (postId, reblogId) => {
  try {
    const existingPost = await schema.Posts.findOne({_id: postId});
    if (existingPost) {
      const notesId = existingPost.notesId;
      const existingNotes = await schema.notes.findOne({_id: notesId});
      if (existingNotes) {
        const reblogsArray = existingNotes.reblogs;
        const exist = loopObjAndCheck(reblogsArray, reblogId)[0];
        const pos = loopObjAndCheck(reblogsArray, reblogId)[1];
        if (exist) {
          existingNotes.reblogs.pull(reblogsArray[pos]);
        } else {
          ret = 'Reblog Not Found';
          return ret;
        };
        existingNotes.save();
        ret = 'Reblog Removed Successfully';
        return ret;
      } else {
        ret = 'Notes Not Found';
        return ret;
      };
    } else {
      ret = 'Post Not Found';
      return ret;
    };
  } catch (error) {
    ret = 'Error In Remove Reblog Function';
    return ret;
  };
};

/* ----------- <---> Get Post Notes <---> */ // *** <===> Done <===>  *** //

/**
 * @function
 * @name getNotes
 * @description Get notes of a post.
 * @param {string} postId - Id of the post to get its notes.
 *
 * @returns {string} Array of arrays, contains 4 arrays: likesArray, commentsArray, reblogsArray, countsArray(likesCount, reblogsCount, notesCount)
 */

const getNotes = async (postId) => {
  try {
    var ret = ['',[]];
    const existingPost = await schema.Posts.findOne({_id: postId});
    if (existingPost) {
      const notesId = existingPost.notesId;
      const existingNotes = await schema.notes.findOne({_id: notesId});
      if (existingNotes) {
        const likesArray = existingNotes.likes;
        const commentsArray = existingNotes.comments;
        const reblogsArray = existingNotes.reblogs;
        const likesCount = likesArray.length;
        const reblogsCount = reblogsArray.length;
        const commentsCount = commentsArray.length;
        const notesCount = likesCount + commentsCount + reblogsCount;
        const countsArray = [likesCount, reblogsCount, notesCount];
        const notes = [likesArray,
          commentsArray, reblogsArray, countsArray]; // array of arrays
        ret[0] = 'Notes Got Successfully';
        ret[1] = notes;
        return ret;
      } else {
        ret[0] = 'Notes Not Found';
        return ret;
      };
    } else {
      ret[0] = 'Post Not Found';
      return ret;
    };
  } catch (error) {
    ret[0] ='Error in Get Notes Function';
    return ret;
  };
};

/* ----------- <---> Get User Dashboard <---> */ // *** <===> Done <===>  *** //

/**
 * @function
 * @name getDashboard
 * @description Get dashboard of a blog.
 * @param {string} userId - Id of the user to get its blogs' posts.
 * @param {string} blogId - Id of the blog to get its posts.
 *
 * @returns {string} Array of posts objects.
 */

const getDashboard = async (userId, blogId) => {
  try {
    var ret = ['', []];
    const data = [];
    const existingUser = await schema.users.findOne({_id: userId});
    if (existingUser) {
      const existingBlog = await schema.blogs.findOne({_id: blogId});
      if (existingBlog) {
        const postsArray = existingBlog.postsIds;
        for (let i=0; i<postsArray.length; i++) {
          const existingPost = await schema.Posts.findOne({_id: postsArray[i]});
          if (existingPost) {
            data.push(existingPost);
          }
        }
      } else {
          ret[0] = 'Blog Not Found';
          return ret;
      }
      // checking all follwed blogs to get their posts
      const followingBlogsArray = existingUser.following_blogs;
      for (let i=0; i<followingBlogsArray.length; i++) {
        const existingFoBlog = await schema.blogs
            .findOne({_id: followingBlogsArray[i]});
        if (existingFoBlog) {
          const foPostsArray = existingFoBlog.postsIds;
          for (let j=0; j<foPostsArray.length; j++) {
            const existingFoPost = await schema.Posts
                .findOne({_id: foPostsArray[j]});
            if (existingFoPost) {
              data.push(existingFoPost);
            }
          }
        } else {
          ret[0] = 'Following Blog Not Found';
          return ret;
        }
      }
      ret[0] = 'Dashboard Got Successfully';
      ret[1] = data;
      return ret;
    } else {
      ret[0] = 'User Not Found';
      return ret;
    }
  } catch (error) {
    ret[0] = 'Error In Get Dashboard Function';
    return ret;
  }
};

/* =========== /// <==> End <==> ===========*/

/* =============== /// <==> Export Post Functions <==> /// =============== */
module.exports = {
  createPost,
  showPost,
  makeComment,
  loopAndCheck,
  loopObjAndCheck,
  likePress,
  reblogPost,
  removeComment,
  removeReblog,
  // editPost,
  // deletePost,
  // shareWith,
  // blogValidation
  getNotes,
  getDashboard,
};
/* =========== /// <==> End <==> ===========*/

/* =============== /// <==> Export User Functions <==> /// =============== */
// module.exports = {
//   postFunctions,
// };
/* =========== /// <==> End <==> ===========*/
