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

        const ispostFound = await userServices.checkPost(postId);
        if (ispostFound) {
            const userId = await userServices.getUserIdFromPostId(postId)
            const blogId = await userServices.getBlogIdFromPostId(postId)

            const blogName = await schema.blogs.findOne({ id: blogId }).name;

            var content;
            if (type == 'like' || type == 'reblog' || type == 'note')
                content = `${blogName} ${type} your Post`
            else
                content = `${blogName} follow you`

            const newNotification = new schema.notifications({
                type,
                userId,
                blogId,
                blogName,
                content
            });
            const data = await newNotification.save();

            return {
                'meta': {
                    'status': 201,
                    'msg': 'CREATED',
                },

                'res': {
                    'mes': 'Notification Created (<:>)',
                    'data': '',
                },
            };

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
 * This Function Used To Add New Notification.
 *
 * @param {string} postId - postId of cliked post
 * @param {string} type - type of event
 *
 * @returns {object} - { Object }
 */

 const getNotification = async (postId) => {
    try {

        const userId = await userServices.getUserIdFromPostId(postId)
        const data = await schema.notifications.findOne({userId});
        return data;

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

/* =============== /// <==> Export Notification signUp <==> /// =============== */
module.exports = {
    addNotification,
    getNotification
};
  /* =========== /// <==> End <==> ===========*/
