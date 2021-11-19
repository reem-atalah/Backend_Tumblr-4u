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
 * Creates a blog post and saves its content in the database.
 * @function
 * @name createPost
 * @param {string} req - Holds the request body: postHtml, type, state, tags.
 * @param {string} res - Holds the response status and message.
 * 
 * @returns response status and message
 */
const createPost = async(req, res) => {
    try {
        let blogId = req.params.blogId;
        let postHtml = req.body.postHtml;
        let type = req.body.type;
        let state = req.body.state;
        let tags = req.body.tags;
        //let date = Date.now;

        // const blogValidation = async(blogId) => {
        //     let existingBlog = await blogs.findOne({_id: blogId});
        //     console.log("existing blog: ",existingBlog);
        //     return existingBlog;
        // };

        let existingBlog = await blogs.findOne({_id: blogId});

        if(existingBlog) {
            console.log("blog id: ",blogId, "blog: ", existingBlog);
            newPost = new posts({blogId, postHtml, type, state, tags}); 
            newPost = await newPost.save();
            res.status(StatusCodes.OK).json('Post Created Successfully (<:>)');
        } else {
            console.log("blog not found");
            res.status(StatusCodes.BAD_REQUEST).json('Blog Not Found (<:>)');
        };

    } catch (error) {
        console.log("catch errorrr");
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json('Error In Create Post Function (<:>)');
    };
};

/* ----------- <---> Edit Post <---> ----------- */ // *** <===> Done <===>  *** //
// Assumption: Edit Post Function Just Updates ( postHtml ) 
const editPost = async(request, response) => {
    
};

/* ----------- <---> Delete Post <---> ----------- */ // *** <===> Done <===>  *** //
const deletePost = async(request, response) => {
    
};

/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Export Post Functions <==> /// ====================== */
const postFunctions = module.exports = {
    createPost,
    editPost,
    deletePost,
    //likePost,
    //commentPost,
    //shareWith,
    //reblogPost,
    //blogValidation
};
/* =========== /// <==> End <==> ===========*/