// /////////////////////////////////////////////////////////
// / <==> /// This File Contains Post Functions /// <==> ///
// /////////////////////////////////////////////////////////

/* ====================== /// <==> Variables Declaration <==> /// ====================== */
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {
  StatusCodes,
} = require('http-status-codes');
const postsModel = require('../Model/model');

const {
  populate,
} = require('../Model/model');
const blogs = require('../../Blogs/Model/model');
const {
  findOne,
} = require('../../Blogs/Model/model');
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Post Functions <==> /// ====================== */

/* ----------- <---> Create Post <---> ----------- */ // *** <===> Done <===>  *** //

/**
 * @function
 * @name createPost
 * @description Creates a blog post and saves its content in the database.
 * @param {string} req - Holds the request body: postHtml, type, state, tags.
 * @param {string} res - Holds the response status and message.
 *
 * @returns {string} response status and message.
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
    //     let existingBlog = await blogs.findOne({_id: blogId});
    //     console.log("existing blog: ",existingBlog);
    //     return existingBlog;
    // };

    const existingBlog = await blogs.findOne({
      _id: blogId,
    });

    if (existingBlog) {
      console.log('blog id: ', blogId, 'blog: ', existingBlog);
      const newNotes = new postsModel.notes();
      newNotes.save();
      const notesId = newNotes._id;
      newPost = new postsModel.posts({
        blogId,
        postHtml,
        type,
        state,
        tags,
        notesId,
      });
      newPost = await newPost.save();
      console.log(newPost);

      res.status(StatusCodes.OK).json('Post Created Successfully (<:>)');
    } else {
      console.log('blog not found');
      res.status(StatusCodes.BAD_REQUEST).json('Blog Not Found (<:>)');
    }
  } catch (error) {
    console.log('catch errorrr');
    res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json('Error In Create Post Function (<:>)');
  }
};

/* ----------- <---> Show Post <---> ----------- */ // *** <===> Done <===>  *** //
// Assumption: Edit Post Function Just Updates ( postHtml )

/**
 * @function
 * @name showPost
 * @description Shows a blog post by its id.
 * @param {string} req - Holds the request body: post id.
 * @param {string} res - Holds the response status and the blog post content if OK.
 *
 * @returns {string} the blog post content in the form of html string.
 */

const showPost = async (req, res) => {
  try {
    const postId = req.params.postId;
    const existingPost = await postsModel.posts.findOne({
      _id: postId,
    });
    if (existingPost) {
      console.log('post html: ', existingPost.postHtml);
      res.status(StatusCodes.OK).jsonp(existingPost.postHtml);
    } else {
      res.status(StatusCodes.BAD_REQUEST).json('Post Not Found (<:>)');
    }
  } catch (error) {
    res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json('Error In Show Post Function (<:>)');
  }
};

/* ----------- <---> Make Comment <---> ----------- */ // *** <===> Done <===>  *** //
const makeComment = async (req, res) => {
  try {
    const blogId = req.params.blogId;
    const postId = req.params.postId;
    const text = req.body.text;
    const existingBlog = await blogs.findOne({_id: blogId});
    const existingPost = await postsModel.posts.findOne({_id: postId});
    const notesId = existingPost.notesId;
    // const notesId = req.params.notesId;
    const existingNotes = await postsModel.notes.findOne({_id: notesId});
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
          console.log(comment);
          // postsModel.notes.updateOne({_id: notesId}, {$push: {comments: comment}}); //leeeh msh zabtaaa???
          existingNotes.comments.push(comment);
          existingNotes.save();
          console.log(existingPost);
        } else {
          console.log('notes msh mwgoda');
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

        res.status(StatusCodes.OK).json('Comment Posted Successfully');
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
const loopObjAndCheck = (arr, element, pos) => {
  let exist = 0;
  //let pos = 0;
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
const likePress = async (req, res) => {
  try {
    const blogId = req.params.blogId;
    const postId = req.params.postId;
    const existingBlog = await blogs.findOne({_id: blogId});
    const existingPost = await postsModel.posts.findOne({_id: postId});
    const notesId = existingPost.notesId;
    const existingNotes = await postsModel.notes.findOne({ _id: notesId});
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
const reblogPost = async (req, res) => {
  try {
    const blogId = req.params.blogId;
    const postId = req.params.postId;
    const text = req.body.text;
    const existingBlog = await blogs.findOne({_id: blogId});
    const existingPost = await postsModel.posts.findOne({_id: postId});
    const notesId = existingPost.notesId;
    const existingNotes = await postsModel.notes.findOne({_id: notesId});
    if (existingBlog) {
      if (existingPost) {
        const rebloggingId = blogId;
        if (existingNotes) {
          const reblog = {
            rebloggingId,
            text,
          };
          existingNotes.reblogs.push(reblog);
          existingNotes.save();
        } else {
          console.log(existingPost);
          res.status(StatusCodes.BAD_REQUEST).json('Notes Not Found');
        }

        res.status(StatusCodes.OK).json('Post Reblogged Successfully');
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

/* ----------- <---> Remove Comment <---> ----------- */ // *** <===> not Done <===>  *** //
const removeComment = async (req, res) => {
  try {
    const postId = req.params.postId;
    const commentId = req.params.commentId;
    const existingPost = await postsModel.posts.findOne({_id: postId});
    if (existingPost) {
      const notesId = existingPost.notesId;
      const existingNotes = await postsModel.notes.findOne({_id: notesId});
      if (existingNotes) {
        const commentsArray = existingNotes.comments;
        console.log('comments array: ',commentsArray);
        let pos = 0;
        let exist = loopObjAndCheck(commentsArray, commentId, pos);
        if (exist) {
          existingNotes.comments.pull(commentsArray[pos]);
        } else {
          res.status(StatusCodes.BAD_REQUEST).json('Comment Not Found');
        };
        existingNotes.save(); //whole document in db is savedddddddd
        console.log('comments array after: ',commentsArray);
        res.status(StatusCodes.OK).json('Comment Removed Successfully');
      }
      else {
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

/* ----------- <---> Remove Reblog <---> ----------- */ // *** <===> not Done <===>  *** //
const removeReblog = async (req, res) => {
  try {
    const postId = req.params.postId;
    const reblogId = req.params.reblogId;
    const existingPost = await postsModel.posts.findOne({_id: postId});
    if (existingPost) {
      const notesId = existingPost.notesId;
      const existingNotes = await postsModel.notes.findOne({_id: notesId});
      if (existingNotes) {
        const reblogsArray = existingNotes.reblogs;
        console.log('reblogs array: ',reblogsArray);
        let pos = 0;
        let exist = loopObjAndCheck(reblogsArray, reblogId, pos);
        console.log('off', exist)
        if (exist) {
          existingNotes.reblogs.pull(reblogsArray[pos]);
        } else {
          res.status(StatusCodes.BAD_REQUEST).json('Reblog Not Found');
        };
        existingNotes.save(); 
        console.log('reblogs array after: ',reblogsArray);
        res.status(StatusCodes.OK).json('Reblog Removed Successfully');
      }
      else {
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

/* ----------- <---> Get Post Notes <---> ----------- */ // *** <===> not Done <===>  *** //
const getNotes = async (req, res) => {
  try {
    const postId = req.params.postId;
  } catch (error) {}
};

/* ----------- <---> Edit Post <---> ----------- */ // *** <===> not Done <===>  *** //
// Assumption: Edit Post Function Just Updates ( postHtml )
const editPost = async (request, response) => {};

/* ----------- <---> Delete Post <---> ----------- */ // *** <===> not Done <===>  *** //
const deletePost = async (request, response) => {};

/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Export Post Functions <==> /// ====================== */
const postFunctions = (module.exports = {
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
});
/* =========== /// <==> End <==> ===========*/
