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

/* ----------- <---> Edit Post <---> ---- */ // *** <===> not Done <===>  *** //
// Assumption: Edit Post Function Just Updates ( postHtml )
// const editPost = async (request, res) => {

// };

/* ----------- <---> Delete Post <--->  */ // *** <===> not Done <===>  *** //
// const deletePost = async (request, res) => {

// };

/* =========== /// <==> End <==> ===========*/

/* =============== /// <==> Export Post Functions <==> /// =============== */
const postFunctions = module.exports = {
  createPost,
  showPost,
  // editPost,
  // deletePost,
  // likePost,
  // commentPost,
  // shareWith,
  // reblogPost,
  // blogValidation
};
/* =========== /// <==> End <==> ===========*/

/* =============== /// <==> Export User Functions <==> /// =============== */
module.exports = {
  postFunctions,
};
/* =========== /// <==> End <==> ===========*/
