////////// /////////////////////////////////////////////////////////
// / <==> /// This File Contains Notification Functions /// <==> ///
// /////////////////////////////////////////////////////////////cons////

/* =============== /// <==> Variables Declaration <==> /// =============== */
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');
const schema = require('../../../Model/model');
const userServices = require('../../Users/Controller/services');
/* =========== /// <==> End <==> ===========*/

/* ====================== /// <==> Notification Functions <==> /// ================== */
/* ----------- <---> add Notification <---> ------- */ // *** <===> Done <===>  *** //
// Assumption: Account Must Be Not Deleted

/**
 * This Function Used To Add New Notification.
 *
 * @param {string} postId - postId of cliked post
 * @param {string} type - type of event
 *
 * @returns {object} - { Object }
 */

const addNotification = async (postId, type) => {
    try {

        const ispostFound = await userServices.checkPostId(postId);
        if (ispostFound) {
            const userId = await userServices.getUserIdFromPostId(postId)
            const blogId = await userServices.getBlogIdFromPostId(postId)

            const blog = await schema.blogs.findOne({ id: blogId });
            const blogName = blog.name;


            var content;
            if (type == 'like' || type == 'reblog' || type == 'note') {
                content = `${blogName} ${type} your Post`;
            }
            else {
                content = `${blogName} ${type} your Blog`
            }

            const d = new Date();
            const newNotification = new schema.notifications({
                type,
                userId,
                blogId,
                blogName,
                content,
                date: d
            });
            const data = await newNotification.save();

            return 'Created';

        } else {
            return {
                'meta': {
                    'status': 400,
                    'error': 'BAD_REQUEST',
                },

                'res': {
                    'error': 'Post Id Not Found (<:>)',
                    'data': '',
                },
            };
        }

    } catch (error) {
        return {
            'meta': {
                'status': 500,
                'msg': 'INTERNAL_SERVER_ERROR',
            },

            'res': {
                'error': 'Error In Add Notification Function (<:>)',
                'data': '',
            },
        };
    };
};


/* ----------- <---> get Notification <---> ------- */ // *** <===> Done <===>  *** //
// Assumption: Account Must Be Not Deleted
// Assumption: Account Must Be Not Deleted

/**
 * This Function Used To Get Notification.
 *
 * @param {string} postId - postId of cliked post
 * @param {string} type - type of event
 *
 * @returns {object} - { Object }
 */

const getNotification = async (postId) => {
    try {

        const userId = await userServices.getUserIdFromPostId(postId)
        const data = await schema.notifications.find({ userId });
        return data;

    } catch (error) {
        return {
            'meta': {
                'status': 500,
                'msg': 'INTERNAL_SERVER_ERROR',
            },

            'res': {
                'error': 'Error In Get Notification Function (<:>)',
                'data': '',
            },
        };
    };
};


/* ====================== /// <==> Chat Functions <==> /// ================== */
/* ----------- <---> add Chat <---> ------- */ // *** <===> Done <===>  *** //
// Assumption: Account Must Be Not Deleted

/**
 * This Function Used To Add New Chat.
 *
 * @param {string} message - postId of cliked post
 * @param {string} sendUserId - postId of cliked post
 * @param {string} receiveUserId - postId of cliked post
 * @param {string} sendBlogName - type of event
 * @param {string} recieveBlogName - postId of cliked post
 *
 * @returns {object} - { Object }
 */

const addchat = async (message, sendUserId, receiveUserId, sendBlogName, recieveBlogName) => {
    try {

        const isSendUserFound = await userServices.checkUserId(sendUserId);
        const isReceiveUserFound = await userServices.checkUserId(receiveUserId);
        if (isSendUserFound && isReceiveUserFound) {

            const d = new Date();
            const newChat = new schema.chat({
                chat: message,
                receiverBlogName: recieveBlogName,
                sendBlogName: sendBlogName,
                sendUserId,
                receiveUserId,
                date: d
            });
            const data = await newChat.save();

            return 'Created';

        } else {
            return {
                'meta': {
                    'status': 400,
                    'error': 'BAD_REQUEST',
                },

                'res': {
                    'error': 'User Id Not Found (<:>)',
                    'data': '',
                },
            };
        }

    } catch (error) {
        return {
            'meta': {
                'status': 500,
                'msg': 'INTERNAL_SERVER_ERROR',
            },

            'res': {
                'error': 'Error In Add Chat Function (<:>)',
                'data': '',
            },
        };
    };
};



/* ----------- <---> get Chat <---> ------- */ // *** <===> Done <===>  *** //
// Assumption: Account Must Be Not Deleted
// Assumption: Account Must Be Not Deleted

/**
 * This Function Used To Get Chat.
 *
 * @param {string} sendBlogName - type of event
 * @param {string} recieveBlogName - postId of cliked post
 *
 * @returns {object} - { Object }
 */

const getChat = async (sendBlogName,receiverBlogName) => {
    try {

        const data = await schema.chat.find({ sendBlogName,receiverBlogName });
        return data;

    } catch (error) {
        return {
            'meta': {
                'status': 500,
                'msg': 'INTERNAL_SERVER_ERROR',
            },

            'res': {
                'error': 'Error In Get Chat Function (<:>)',
                'data': '',
            },
        };
    };
};

/* =============== /// <==> Export Notification signUp <==> /// =============== */
module.exports = {
    addNotification,
    getNotification,
    addchat,
    getChat
};
  /* =========== /// <==> End <==> ===========*/
