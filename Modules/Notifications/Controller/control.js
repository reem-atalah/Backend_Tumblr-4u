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
            if (type == 'like' || type == 'reblog' || type == 'note')
                content = `${blogName} ${type} your Post`
            else
                content = `${blogName} ${type} your Blog`

            const newNotification = new schema.notifications({
                type,
                userId,
                blogId,
                blogName,
                content
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
