///////////////////////////////////////////////////////////
/// <==> /// This File Contains Post Functions /// <==> ///
///////////////////////////////////////////////////////////

/* ====================== /// <==> Variables Declaration <==> /// ====================== */
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');
const postsModel = require('../Model/model');

const { populate } = require('../Model/model');
const blogs = require('../../Blogs/Model/model');
const { findOne } = require('../../Blogs/Model/model');
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

const createPost = async(req, res) => {
  try {
    const blogId = req.params.blogId;
    const postHtml = req.body.postHtml;
    const type = req.body.type;
    const state = req.body.state;
    const tags = req.body.tags;
    //let date = Date.now;

    // const blogValidation = async(blogId) => {
    //     let existingBlog = await blogs.findOne({_id: blogId});
    //     console.log("existing blog: ",existingBlog);
    //     return existingBlog;
    // };

    const existingBlog = await blogs.findOne({_id: blogId});

    if(existingBlog) {
      console.log('blog id: ', blogId, 'blog: ', existingBlog);
      const newNotes = new postsModel.notes();
      newNotes.save();
      let notesId = newNotes._id;
      newPost = new postsModel.posts({blogId, postHtml, type, state, tags, notesId}); 
      newPost = await newPost.save();
      console.log(newPost);

      res.status(StatusCodes.OK).json('Post Created Successfully (<:>)');
    } else {
      console.log('blog not found');
      res.status(StatusCodes.BAD_REQUEST).json('Blog Not Found (<:>)');
    };

  } catch (error) {
    console.log('catch errorrr');
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json('Error In Create Post Function (<:>)');
  };
};


/**
 * @function
 * @name showPost
 * @description Shows a blog post by its id.
 * @param {string} req - Holds the request body: post id.
 * @param {string} res - Holds the response status and the blog post content if OK.
 * 
 * @returns {string} the blog post content in the form of html string.
 */

/* ----------- <---> Show Post <---> ----------- */ // *** <===> Done <===>  *** //
// Assumption: Edit Post Function Just Updates ( postHtml ) 
const showPost = async(req, res) => {
  try {
    const postId = req.params.postId;
    const existingPost = await postsModel.posts.findOne({_id: postId});
    if (existingPost) {
      console.log('post html: ', existingPost.postHtml);
      res.status(StatusCodes.OK).jsonp(existingPost.postHtml);
    } else {
      res.status(StatusCodes.BAD_REQUEST).json('Post Not Found (<:>)');
    };
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json('Error In Show Post Function (<:>)');
  };
};


/* ----------- <---> Make Comment <---> ----------- */ // *** <===> not Done <===>  *** //
const makeComment = async(req, res) => {
  try {
    const blogId = req.params.blogId;
    const postId = req.params.postId;
    var text = req.body.text;
    const existingBlog = await blogs.findOne({_id: blogId});
    const existingPost = await postsModel.posts.findOne({_id: postId});
    const notesId = existingPost.notesId;
    //const notesId = req.params.notesId;
    const existingNotes = await postsModel.notes.findOne({_id: notesId});
    if(existingBlog) {
      if(existingPost) {
        var commentingBlogTitle = existingBlog.title;
        var commentingBlogId = blogId;
        //const newComment = new postsModel.comment({commentingBlogTitle, text}).save();
        if(existingNotes) {
          let comment = {commentingBlogId, commentingBlogTitle, text};
          console.log(comment);
          //postsModel.notes.updateOne({_id: notesId}, {$push: {comments: comment}}); //leeeh msh zabtaaa???
          existingNotes.comments.push(comment);
          existingNotes.save();
          console.log(existingPost);
        }
        else {
          console.log('notes msh mwgoda');
          console.log(existingPost);
          res.status(StatusCodes.BAD_REQUEST).json('Notes Not Found');

          //const newNotes = new postsModel.notes();
          //newNotes.save();
          //let notesId = newNotes._id;
          //existingPost.notesId.aggregate(notesId);
          //postsModel.posts.aggregate({_id: postId}, {$addFields: {notesId: notesId}});
          //existingPost.save();
          //console.log(existingPost);


          //res.status(StatusCodes.BAD_REQUEST).json('Notes Not Found');
          // let comments = [{commentingBlogId, commentingBlogTitle, text}];
          // const newNotes = new postsModel.notes({comments}).save();
          // existingPost.notesId.set(notesId);
          // existingPost.save();
        };

        res.status(StatusCodes.OK).json('Comment Posted Successfully');
      }
      else {
        res.status(StatusCodes.BAD_REQUEST).json('Post Not Found');
      };
    }
    else {
      res.status(StatusCodes.BAD_REQUEST).json('Blog Not Found');
    };

  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json('Error in Make Comment Function');
  };
};


/* ----------- <---> Get Post Notes <---> ----------- */ // *** <===> not Done <===>  *** //
const getNotes = async(req, res) => {
  try {
    const postId = req.params.postId;
    
  } catch (error) {
    
  };
};

/* ----------- <---> Edit Post <---> ----------- */ // *** <===> not Done <===>  *** //
// Assumption: Edit Post Function Just Updates ( postHtml ) 
const editPost = async (request, response) => {
    
};

/* ----------- <---> Delete Post <---> ----------- */ // *** <===> not Done <===>  *** //
const deletePost = async(request, response) => {
    
};

/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Export Post Functions <==> /// ====================== */
const postFunctions = module.exports = {
  createPost,
  showPost,
  editPost,
  deletePost,
  //likePost,
  //commentPost,
  //shareWith,
  //reblogPost,
  //blogValidation
  makeComment,
  getNotes,
};
/* =========== /// <==> End <==> ===========*/