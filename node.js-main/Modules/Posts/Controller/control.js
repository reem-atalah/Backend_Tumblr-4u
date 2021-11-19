///////////////////////////////////////////////////////////
/// <==> /// This File Contains Post Functions /// <==> ///
///////////////////////////////////////////////////////////

/* ====================== /// <==> Variables Declaration <==> /// ====================== */
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');
const posts = require('../Model/model');

const { populate } = require('../Model/model');
const users = require('../../Users/Model/model');
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Post Functions <==> /// ====================== */

/* ----------- <---> Create Post <---> ----------- */ // *** <===> Done <===>  *** //
// Assumption: Account Must Be Not ( Blocked Or Deleted Or Deactivated )
const Create_Post = async(request, response, ) => {
    try {
        let { title, description } = request.body;
        let userId = request.decoded.id;
        const oldUser = await users.findOne({ _id: userId, isBlocked: false, isActivated: true, isDeleted: false })
        if (oldUser) {
            const newPost = new posts({ title, description, createdBy: userId });
            const data = newPost.save();
            response.status(StatusCodes.OK).json('Post Created Successfully (<:>)');
        } else
            response.status(StatusCodes.BAD_REQUEST).json('Account Not Found (<:>)');

    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json('Error In Create Post Function (<:>)');
    }
};

/* ----------- <---> Edit Post <---> ----------- */ // *** <===> Done <===>  *** //
// Assumption: Edit Post Function Just Updates ( Title , Content ) 
// Assumption: Account Must Be Not ( Blocked Or Deleted Or Deactivated ) , Post Must Not Be ( Blocked Or Deleted )
const Edit_Post = async(request, response) => {
    try {
        let { postId, title, description } = request.body;
        const userId = request.decoded.id;

        const oldUser = await users.findOne({ _id: userId, isBlocked: false, isActivated: true, isDeleted: false })
        if (oldUser) {

            const oldPost = await posts.findOne({ _id: postId, isDeleted: false, isBlocked: false });
            if (oldPost) {
                if (oldPost.createdBy == request.decoded.id) {
                    const data = await posts.updateOne({ _id: postId }, { title, description });
                    response.status(StatusCodes.OK).json('Post Updated Successfully (<:>)');
                } else
                    response.status(StatusCodes.BAD_REQUEST).json('Post Not Related To You (<:>)');
            } else
                response.status(StatusCodes.BAD_REQUEST).json('Post Not Found (<:>)');
        } else
            response.status(StatusCodes.BAD_REQUEST).json('Account Not Found (<:>)');

    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json('Error In Edit Post Function (<:>)');
    }
};

/* ----------- <---> Delete Post <---> ----------- */ // *** <===> Done <===>  *** //
// Assumption: Account Must Be Not ( Blocked Or Deleted Or Deactivated ) , Post Must Not Be ( Blocked Or Deleted )
const Delete_Post = async(request, response) => {
    try {
        let { postId } = request.body;
        const userId = request.decoded.id;

        const oldUser = await users.findOne({ _id: userId, isBlocked: false, isActivated: true, isDeleted: false })
        if (oldUser) {
            const oldPost = await posts.findOne({ _id: postId, isDeleted: false, isBlocked: false });

            if (oldPost) {
                if (oldPost.createdBy == userId) {
                    const data = await posts.updateOne({ _id: postId }, { isDeleted: true });
                    response.status(StatusCodes.OK).json('Post Deleted Successfully (<:>)');
                } else
                    response.status(StatusCodes.BAD_REQUEST).json('Post Not Related To You (<:>)');
            } else
                response.status(StatusCodes.BAD_REQUEST).json('Post Not Found (<:>)');
        } else
            response.status(StatusCodes.BAD_REQUEST).json('Account Not Found (<:>)');

    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json('Error In Delete Post Function (<:>)');
    }
};

/* ----------- <---> Get My Posts <---> ----------- */ // *** <===> Done <===>  *** //
// Assumption: Account Must Be Not ( Blocked Or Deleted Or Deactivated ) , Post Must Not Be ( Blocked Or Deleted )

const Get_Posts = async(request, response) => {
    try {
        const userId = request.decoded.id;
        const oldUser = await users.findOne({ _id: userId, isBlocked: false, isActivated: true, isDeleted: false })
        if (oldUser) {
            const data = await posts.find({ createdBy: userId, isBlocked: false, isDeleted: false }).populate('createdBy', 'username').select('title description');

            if (data.length)
                response.status(StatusCodes.OK).json(data);
            else
                response.status(StatusCodes.BAD_REQUEST).json('No Posts Found (<:>)');
        } else
            response.status(StatusCodes.BAD_REQUEST).json('Account Not Found (<:>)');

    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json('Error In Get My Posts Function (<:>)');
    }
};

/* ----------- <---> Get All Posts <---> ----------- */ // *** <===> Done <===>  *** //
//Assumption: Get Posts Which ( Not Blocked Or Deleted ) & Posts OF Accounts Which ( Not Blocked  & isActivated )
const Get_All_Posts = async(request, response) => {
    try {
        const data = [];
        const allUsers = await users.find({ isDeleted: false, isActivated: true, isBlocked: false });

        if (allUsers.length) {
            for (var i = 0; i < allUsers.length; i++) {
                let userPosts = await posts.find({ createdBy: allUsers[i].id, isDeleted: false, isBlocked: false }).select('title description');
                for (var j = 0; j < userPosts.length; j++)
                    data.push(userPosts[j]);
            }
            response.status(StatusCodes.OK).json(data);
        } else
            response.status(StatusCodes.BAD_REQUEST).json('No Posts Found (<:>)');
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json('Error In Get All Posts Function (<:>)');
    }
};

/* ----------- <---> Block Posts <---> ----------- */ // *** <===> Done <===>  *** //
//Assumption: Account Must Not Be ( Blocked Or Deleted)
const Block_Post = async(request, response) => {
    try {
        const { postId } = request.body;
        const userId = request.decoded.id;
        const oldUser = await users.findOne({ _id: userId, isBlocked: false, isDeleted: false });
        if (oldUser) {
            const data = await posts.updateOne({ _id: postId, isBlocked: false, isDeleted: false }, { isDeleted: true });
            if (data.modifiedCount)
                response.status(StatusCodes.OK).json('Post Blocked Successfully (<:>)');
            else
                response.status(StatusCodes.BAD_REQUEST).json('Post Not Found Or Blocked (<:>)');

        } else
            response.status(StatusCodes.BAD_REQUEST).json('Account Not Found (<:>)');

    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json('Error In Block Post Function (<:>)');
    }

};
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Export Post Functions <==> /// ====================== */
module.exports = {
    Create_Post,
    Edit_Post,
    Delete_Post,
    Get_Posts,
    Get_All_Posts,
    Block_Post
};
/* =========== /// <==> End <==> ===========*/