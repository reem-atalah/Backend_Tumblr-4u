// /////////////////////////////////////////////////////////////////
// / <==> /// This File Contains Notification services /// <==> ///
// ////////////////////////////////////////////////////////////////

/* =============== /// <==> Variables Declaration <==> /// ============= */
const { CLOSING } = require('ws');
const schema = require('../../Model/model');
const notificationFunction = require('../../Modules/Notifications/Controller/control');
const userServices = require('../../Modules/Users/Controller/services');
/* =========== /// <==> End <==> ===========*/

/* =============== /// <==> Open Connection <==> /// ============= */

const socket = async (app) => {
    const io = require('socket.io')(app, {
        cors: {
            origin: "*",
        }
    });

    io.on('connection', socket => { // Opened Chanel between user client and server.
        console.log('Client Socket ID : ' + socket.id);

        io.emit('Connection Is Done')

        socket.on('join-room', async (data) => {
            const userId = await userServices.getIdFromToken(data.token);

            console.log('User Id: ' + userId);

            socket.join(userId);
            socket.emit('joined-room', 'Join Room Success');
        });


        socket.on('like', async (input) => {
            console.log('Like');
            console.log(input.postId);
            await notificationFunction.addNotification(input.postId, 'like');
            const room = await userServices.getUserIdFromPostId(input.postId);
            console.log(room);

            const data = await notificationFunction.getNotification(input.postId);
            console.log(data);

            socket.to(room).emit('update-notification-list', data)
        });

        socket.on('note', async (input) => {
            console.log('Note');
            await notificationFunction.addNotification(input.postId, 'note');
            const room = await userServices.getUserIdFromPostId(input.postId);
            console.log(room);

            const data = await notificationFunction.getNotification(input.postId);
            console.log(data);

            socket.to(room).emit('update-notification-list', data)
        });

        socket.on('reblog', async (input) => {
            console.log('Reblog');
            await notificationFunction.addNotification(input.postId, 'reblog');
            const room = await userServices.getUserIdFromPostId(input.postId);
            console.log(room);

            const data = await notificationFunction.getNotification(input.postId);
            console.log(data);

            socket.to(room).emit('update-notification-list', data)
        });

        socket.on('follow', async (input) => {
            console.log('Follow');
            await notificationFunction.addNotification(input.postId, 'follow');
            const room = await userServices.getUserIdFromPostId(input.postId);
            console.log(room);

            const data = await notificationFunction.getNotification(input.postId);
            console.log(data);

            socket.to(room).emit('update-notification-list', data)
        });

        socket.on('unfollow', async (input) => {
            console.log('Unfollow');
            await notificationFunction.addNotification(input.postId, 'unfollow');
            const room = await userServices.getUserIdFromPostId(input.postId);
            console.log(room);

            const data = await notificationFunction.getNotification(input.postId);
            console.log(data);

            socket.to(room).emit('update-notification-list', data)
        });
    });
};
/* =========== /// <==> End <==> ===========*/

/* =============== /// <==> Exprot Socket Function <==> /// ============= */
module.exports = socket
/* =========== /// <==> End <==> ===========*/