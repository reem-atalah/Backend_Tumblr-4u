/////////////////////////////////////////////////////////////
/// <==> /// This File Contains Report Functions /// <==> ///
/////////////////////////////////////////////////////////////

/* ====================== /// <==> Variables Declaration <==> /// ====================== */
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');
const reports = require('../Model/model');
const users = require('../../Users/Model/model');
const posts = require('../../Posts/Model/model');

/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Report Functions <==> /// ====================== */

/* ----------- <---> Create Report <---> ----------- */ // *** <===> Done <===>  *** //
//Assumption: User Account Must Be ( Activated , Not Block , Not Deleted ) & Post Must Be ( Not Blocked , Not Deleted )
const Create_Report = async(request, response) => {
    try {
        let { postId, reportComment } = request.body;
        const userId = request.decoded.id;

        const oldUser = await users.findOne({ _id: userId, isBlocked: false, isActivated: true, isDeleted: false });
        if (oldUser) {
            const oldPost = await posts.findOne({ _id: postId, isBlocked: false, isDeleted: false });

            if (oldPost) {
                const oldReport = await reports.findOne({ userId, postId, isDeleted: false });
                if (!oldReport) {
                    const newReport = new reports({ userId, postId, reportComment });
                    const data = newReport.save();
                    response.status(StatusCodes.OK).json('Report Created Successfully (<:>)');
                } else
                    response.status(StatusCodes.BAD_REQUEST).json('Not Allowed To Comment More Than One Time Or Post Not Found(<:>)');
            } else
                response.status(StatusCodes.BAD_REQUEST).json('Post Not Found (<:>)');

        } else
            response.status(StatusCodes.BAD_REQUEST).json('User Not Found (<:>)');

    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json('Error In Create Report Function (<:>)');
    }
};

/* ----------- <---> Get Report <---> ----------- */ // *** <===> Done <===>  *** //
//Assumption: User Account Must Be ( Not Block , Not Deleted ) & Post Must Be ( Not Blocked , Not Deleted )
const Get_Report = async(request, response) => {
    try {
        const { postId } = request.body;
        const userId = request.decoded.id;

        const oldUser = await users.findOne({ _id: userId, isBlocked: false, isDeleted: false });
        if (oldUser) {
            const oldPost = await posts.findOne({ _id: postId, isBlocked: false, isDeleted: false });
            if (oldPost) {
                const data = await reports.find({ postId, isBlocked: false, isDeleted: false });
                if (data.length)
                    response.status(StatusCodes.OK).json(data);
                else
                    response.status(StatusCodes.BAD_REQUEST).json('Report Not Found (<:>)');

            } else
                response.status(StatusCodes.BAD_REQUEST).json('Post Not Found (<:>)');

        } else
            response.status(StatusCodes.BAD_REQUEST).json('User Not Found (<:>)');

    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json('Error In Get Report Function (<:>)');
    }
};

/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Export User Functions <==> /// ====================== */
module.exports = {
    Create_Report,
    Get_Report
};
/* =========== /// <==> End <==> ===========*/