///////////////////////////////////////////////////////////
/// <==> /// This File Contains Post Functions /// <==> ///
///////////////////////////////////////////////////////////

/* ====================== /// <==> Variables Declaration <==> /// ====================== */
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');
const posts = require('../Model/model');

const { populate } = require('../Model/model');
const blogs = require('../../Blogs/Model/model');
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
      newPost = new posts({blogId, postHtml, type, state, tags}); 
      newPost = await newPost.save();
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
    const existingPost = await posts.findOne({_id: postId});
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
};
/* =========== /// <==> End <==> ===========*/