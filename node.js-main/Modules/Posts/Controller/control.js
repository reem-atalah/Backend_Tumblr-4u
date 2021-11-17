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
// Assumption: Account Must Be Not ( Blocked Or Deleted Or Deactivated )
const createPost = async(req, res, ) => {
    try {
        let blogId = req.params.blogId;
        let postHtml = req.body.postHtml;
        let type = req.body.type;
        let state = req.body.state;
        let tags = req.body.tags;
        //let date = Date.now;

        const existingBlog = await blogs.findOne({_id: blogId});
        if(existingBlog){
            newPost = new posts({blogId, postHtml, type, state, tags, date}); 
            newPost = await newPost.save();
            res.status(StatusCodes.OK).json('Post Created Successfully (<:>)');
        } else{
            res.status(StatusCodes.BAD_REQUEST).json('Blog Not Found (<:>)');
        }

    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json('Error In Create Post Function (<:>)');
    }
};

/* ----------- <---> Edit Post <---> ----------- */ // *** <===> Done <===>  *** //
// Assumption: Edit Post Function Just Updates ( Title , Content ) 
// Assumption: Account Must Be Not ( Blocked Or Deleted Or Deactivated ) , Post Must Not Be ( Blocked Or Deleted )
const editPost = async(request, response) => {
    
};

/* ----------- <---> Delete Post <---> ----------- */ // *** <===> Done <===>  *** //
// Assumption: Account Must Be Not ( Blocked Or Deleted Or Deactivated ) , Post Must Not Be ( Blocked Or Deleted )
const deletePost = async(request, response) => {
    
};


/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Export Post Functions <==> /// ====================== */
module.exports = {
    createPost,
    editPost,
    deletePost,
    likePost,
    commentPost,
    shareWith,
    reblogPost
};
/* =========== /// <==> End <==> ===========*/