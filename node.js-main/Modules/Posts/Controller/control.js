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
 * @param {Object} req - Holds the request body: postHtml, type, state, tags.
 * @param {Object} res - Holds the res status and message.
 *
 * @returns {Object} res status and message.
 */

const createPost = async (req, res) => {
  try {
    const blogId = req.params.blogId;
    const postHtml = req.body.postHtml;
    const type = req.body.type;
    const state = req.body.state;
    const tags = req.body.tags;
    // let date = Date.now;

    // const blogValidation = async(blogId) => {
    //     let existingBlog = await schema.blogs.findOne({_id: blogId});
    //     console.log("existing blog: ",existingBlog);
    //     return existingBlog;
    // };

    const existingBlog = await schema.blogs.findOne({_id: blogId});

    if (existingBlog) {
      console.log('blog id: ', blogId, 'blog: ', existingBlog);
      newPost = new schema.Posts({blogId, postHtml, type, state, tags});
      newPost = await newPost.save();
      res.status(StatusCodes.OK).json('Post Created Successfully (<:>)');
    } else {
      console.log('blog not found');
      res.status(StatusCodes.BAD_REQUEST).json('Blog Not Found (<:>)');
    };
  } catch (error) {
    console.log('catch errorrr');
    res.status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json('Error In Create Post Function (<:>)');
  };
};

/**
 * @function
 * @name showPost
 * @description Shows a blog post by its id.
 * @param {Object} req - Holds the request body: post id.
 * @param {Object} res - Holds res status and the blog post content if OK.
 *
 * @returns {Object} the blog post content in the form of html string.
 */

/* ----------- <---> Show Post <---> ---- */ // *** <===> Done <===>  *** //
// Assumption: Edit Post Function Just Updates ( postHtml )
const showPost = async (req, res) => {
  try {
    const postId = req.params.postId;
    const existingPost = await schema.Posts.findOne({_id: postId});
    if (existingPost) {
      console.log('post html: ', existingPost.postHtml);
      res.status(StatusCodes.OK).jsonp(existingPost.postHtml);
    } else {
      res.status(StatusCodes.BAD_REQUEST).json('Post Not Found (<:>)');
    };
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json('Error In Show Post Function (<:>)');
  };
};

/* ----------- <---> Make Comment <---> ----------- */ // *** <===> Done <===>  *** //

/**
 * @function
 * @name makePost
 * @description A blog makes a comment on a blog post.
 * @param {string} blogId - Id of the blog making the comment.
 * @param {string} postId - Id of the post to make the comment on.
 * @param {string} text - text of the comment.
 *
 * @returns {string} The id of the comment.
 */

 const makeComment = async (req, res) => {
  try {
    const blogId = req.params.blogId;
    const postId = req.params.postId;
    const text = req.body.text;
    const existingBlog = await schema.blogs.findOne({_id: blogId});
    const existingPost = await schema.Posts.findOne({_id: postId});
    const notesId = existingPost.notesId;
    // const notesId = req.params.notesId;
    const existingNotes = await schema.notes.findOne({_id: notesId});
    if (existingBlog) {
      if (existingPost) {
        const commentingBlogTitle = existingBlog.title;
        const commentingBlogId = blogId;
        // const newComment = new postsModel.comment({commentingBlogTitle, text}).save();
        if (existingNotes) {
          const comment = {
            commentingBlogId,
            commentingBlogTitle,
            text,
          };
          // console.log(comment);
          // postsModel.notes.updateOne({_id: notesId}, {$push: {comments: comment}}); //leeeh msh zabtaaa???
          const lenBefore = existingNotes.comments.length;
          existingNotes.comments.push(comment);
          existingNotes.save();
          const commentsArrayAfter = existingNotes.comments;
          const commentObj = commentsArrayAfter[lenBefore];
          var commentId = commentObj._id;
          // console.log('comment id: ', commentId);
          // console.log(existingPost);
        } else {
          console.log(existingPost);
          res.status(StatusCodes.BAD_REQUEST).json('Notes Not Found');

          // const newNotes = new postsModel.notes();
          // newNotes.save();
          // let notesId = newNotes._id;
          // existingPost.notesId.aggregate(notesId);
          // postsModel.posts.aggregate({_id: postId}, {$addFields: {notesId: notesId}});
          // existingPost.save();
          // console.log(existingPost);

          // res.status(StatusCodes.BAD_REQUEST).json('Notes Not Found');
          // let comments = [{commentingBlogId, commentingBlogTitle, text}];
          // const newNotes = new postsModel.notes({comments}).save();
          // existingPost.notesId.set(notesId);
          // existingPost.save();
          // leh el push wl pull bynf3o m3 el arrays bs? lw 3yza tyb a set field 3ady!?
          // wlla 3shan mt3mlsh w2t el creation?
        }

        // res.status(StatusCodes.OK).json('Comment Posted Successfully');
        res.status(StatusCodes.OK).json(commentId);
      } else {
        res.status(StatusCodes.BAD_REQUEST).json('Post Not Found');
      }
    } else {
      res.status(StatusCodes.BAD_REQUEST).json('Blog Not Found');
    }
  } catch (error) {
    res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json('Error in Make Comment Function');
  }
};

/* ----------- <---> Loop on an array and check if an element exists <---> ----------- */ // *** <===> Done <===>  *** //

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

/* ----------- <---> Loop on Object in Array of Objects and check if Id exists <---> ----------- */ // *** <===> Done <===>  *** //

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

const loopObjAndCheck = (arr, element, pos) => {
  let exist = 0;
  // let pos = 0;
  if (arr.length) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]._id.toString() === element) {
        exist = 1;
        pos = i;
      }
    }
  }
  return exist;
};

/* ----------- <---> Press Like of a Post (Like or Unlike) <---> ----------- */ // *** <===> Done <===>  *** //
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

const likePress = async (req, res) => {
  try {
    const blogId = req.params.blogId;
    const postId = req.params.postId;
    const existingBlog = await schema.blogs.findOne({_id: blogId});
    const existingPost = await schema.Posts.findOne({_id: postId});
    const notesId = existingPost.notesId;
    const existingNotes = await schema.notes.findOne({_id: notesId});
    if (existingBlog) {
      if (existingPost) {
        if (existingNotes) {
          console.log('likes array: ', existingNotes.likes);
          const likesArray = existingNotes.likes;
          console.log(likesArray);
          const exist = loopAndCheck(likesArray, blogId);
          console.log('exist?= ', exist);
          if (exist) {
            existingNotes.likes.pull(blogId);
          } else {
            existingNotes.likes.push(blogId);
          }
          existingNotes.save();
          console.log(existingNotes.likes);
        } else {
          console.log(existingPost);
          res.status(StatusCodes.BAD_REQUEST).json('Notes Not Found');
        }
        res.status(StatusCodes.OK).json('Post Liked Successfully');
      } else {
        res.status(StatusCodes.BAD_REQUEST).json('Post Not Found');
      }
    } else {
      res.status(StatusCodes.BAD_REQUEST).json('Blog Not Found');
    }
  } catch (error) {
    res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json('Error in Make Comment Function');
  }
};

/* ----------- <---> Reblog a Post <---> ----------- */ // *** <===> Done <===>  *** //

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

const reblogPost = async (req, res) => {
  try {
    const blogId = req.params.blogId;
    const postId = req.params.postId;
    const text = req.body.text;
    const existingBlog = await schema.blogs.findOne({_id: blogId});
    const existingPost = await schema.Posts.findOne({_id: postId});
    const notesId = existingPost.notesId;
    const existingNotes = await schema.notes.findOne({_id: notesId});
    if (existingBlog) {
      if (existingPost) {
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
          console.log(existingPost);
          res.status(StatusCodes.BAD_REQUEST).json('Notes Not Found');
        }
        res.status(StatusCodes.OK).json(reblogId);
        // res.status(StatusCodes.OK).json('Post Reblogged Successfully');
      } else {
        res.status(StatusCodes.BAD_REQUEST).json('Post Not Found');
      }
    } else {
      res.status(StatusCodes.BAD_REQUEST).json('Blog Not Found');
    }
  } catch (error) {
    res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json('Error in Make Comment Function');
  }
};

/* ----------- <---> Remove Comment <---> ----------- */ // *** <===> Done <===>  *** //

/**
 * @function
 * @name removeComment
 * @description Remove a comment.
 * @param {string} postId - Id of the post to remove comment from.
 * @param {string} commentId - Id of the comment to remove.
 *
 * @returns {string} .
 */

const removeComment = async (req, res) => {
  try {
    const postId = req.params.postId;
    const commentId = req.params.commentId;
    const existingPost = await schema.Posts.findOne({_id: postId});
    if (existingPost) {
      const notesId = existingPost.notesId;
      const existingNotes = await schema.notes.findOne({_id: notesId});
      if (existingNotes) {
        const commentsArray = existingNotes.comments;
        console.log('comments array: ', commentsArray);
        const pos = 0;
        const exist = loopObjAndCheck(commentsArray, commentId, pos);
        if (exist) {
          existingNotes.comments.pull(commentsArray[pos]);
        } else {
          res.status(StatusCodes.BAD_REQUEST).json('Comment Not Found');
        };
        existingNotes.save(); // whole document in db is savedddddddd
        console.log('comments array after: ', commentsArray);
        res.status(StatusCodes.OK).json('Comment Removed Successfully');
      } else {
        res.status(StatusCodes.BAD_REQUEST).json('Notes Not Found');
      };
    } else {
      res.status(StatusCodes.BAD_REQUEST).json('Post Not Found');
    };
  } catch (error) {
    res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json('Error in Remove Comment Function');
  };
};

/* ----------- <---> Remove Reblog <---> ----------- */ // *** <===> Done <===>  *** //

/**
 * @function
 * @name removeReblog
 * @description Remove a reblog.
 * @param {string} postId - Id of the post to remove reblog from.
 * @param {string} reblogId - Id of the reblog to remove.
 *
 * @returns {string} .
 */

const removeReblog = async (req, res) => {
  try {
    const postId = req.params.postId;
    const reblogId = req.params.reblogId;
    const existingPost = await schema.Posts.findOne({_id: postId});
    if (existingPost) {
      const notesId = existingPost.notesId;
      const existingNotes = await schema.notes.findOne({_id: notesId});
      if (existingNotes) {
        const reblogsArray = existingNotes.reblogs;
        console.log('reblogs array: ', reblogsArray);
        const pos = 0;
        const exist = loopObjAndCheck(reblogsArray, reblogId, pos);
        console.log('off', exist);
        if (exist) {
          existingNotes.reblogs.pull(reblogsArray[pos]);
        } else {
          res.status(StatusCodes.BAD_REQUEST).json('Reblog Not Found');
        };
        existingNotes.save();
        console.log('reblogs array after: ', reblogsArray);
        res.status(StatusCodes.OK).json('Reblog Removed Successfully');
      } else {
        res.status(StatusCodes.BAD_REQUEST).json('Notes Not Found');
      };
    } else {
      res.status(StatusCodes.BAD_REQUEST).json('Post Not Found');
    };
  } catch (error) {
    res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json('Error in Remove Reblog Function');
  };
};

/* ----------- <---> Get Post Notes <---> ----------- */ // *** <===> Done <===>  *** //

/**
 * @function
 * @name getNotes
 * @description Get notes of a post.
 * @param {string} postId - Id of the post to get its notes.
 *
 * @returns {string} Array of arrays, contains 4 arrays: likesArray, commentsArray, reblogsArray, countsArray(likesCount, reblogsCount, notesCount)
 */

const getNotes = async (req, res) => {
  try {
    const postId = req.params.postId;
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
        const notes = [likesArray, commentsArray, reblogsArray, countsArray]; // array of arrays
        console.log('notes array: ', notes);
        res.status(StatusCodes.OK).json(notes);
      } else {
        res.status(StatusCodes.BAD_REQUEST).json('Notes Not Found');
      };
    } else {
      res.status(StatusCodes.BAD_REQUEST).json('Post Not Found');
    };
  } catch (error) {
    res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json('Error in Get Notes Function');
  };
};

/* ----------- <---> Get User Dashboard <---> ----------- */ // *** <===> Done <===>  *** //

/**
 * @function
 * @name getDashboard
 * @description Get dashboard of a blog.
 * @param {string} userId - Id of the user to get its blogs' posts.
 * @param {string} blogId - Id of the blog to get its posts.
 *
 * @returns {string} Array of posts objects.
 */

const getDashboard = async (req, res) => {
  try {
    const userId = req.params.userId;
    const blogId = req.params.blogId;
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
        res
            .status(StatusCodes.BAD_REQUEST)
            .json('Blog Not Found');
      }
      // checking all follwed blogs to get their posts
      const followingBlogsArray = existingUser.following_blogs;
      for (let i=0; i<followingBlogsArray.length; i++) {
        const existingFoBlog = await schema.blogs.findOne({_id: followingBlogsArray[i]});
        if (existingFoBlog) {
          const foPostsArray = existingFoBlog.postsIds;
          for (let j=0; j<foPostsArray.length; j++) {
            const existingFoPost = await schema.Posts.findOne({_id: foPostsArray[j]});
            if (existingFoPost) {
              data.push(existingFoPost);
            }
          }
        } else {
          res
              .status(StatusCodes.BAD_REQUEST)
              .json('Following Blog Not Found');
        }
      }
      console.log('data:', data);
      // res
      //     .status(StatusCodes.OK)
      //     .json('Dashboard Got Successfully');
      res
      .status(StatusCodes.OK)
      .json(data);
    } else {
      res
          .status(StatusCodes.BAD_REQUEST)
          .json('User Not Found');
    }
  } catch (error) {
    res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json('Error In Get Dashboard Function');
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
