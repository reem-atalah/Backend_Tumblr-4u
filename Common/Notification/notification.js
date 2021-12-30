// /////////////////////////////////////////////////////////////////
// / <==> /// This File Contains Notification services /// <==> ///
// ////////////////////////////////////////////////////////////////

/* =============== /// <==> Variables Declaration <==> /// ============= */
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

        io.emit('test', 'Connnection Is Done');

        socket.on('join-room', (room) => {
            socket.emit('joined-room', 'Join Room Success');
            console.log('Before User Id');
            const userId = userServices.getIdFromToken(room);
            console.log(userId);
            socket.join(userId);
        });


        socket.on('like', (postId) => {
            socket.emit('test1', postId);
            console.log(postId);
            notificationFunction.addNotification(postId, 'like');
            const room = userServices.getUserIdFromPostId(postId);
            console.log(room);
            socket.emit('test2', room);
            const data = notificationFunction.getNotification(postId);
            socket.emit('test2', data);
            socket.to(room).emit('update-notification-list', data)
        });

        socket.on('note', (postId) => {
            notificationFunction.addNotification(postId, 'note');
            const room = userServices.getUserIdFromPostId(postId);
            const data = notificationFunction.getNotification(postId);
            socket.to(room).emit('update-notification-list', data)
        });

        socket.on('reblog', (postId) => {
            notificationFunction.addNotification(postId, 'reblog');
            const room = userServices.getUserIdFromPostId(postId);
            const data = notificationFunction.getNotification(postId);
            socket.to(room).emit('update-notification-list', data)
        });

        socket.on('follow', (postId) => {
            notificationFunction.addNotification(postId, 'follow');
            const room = userServices.getUserIdFromPostId(postId);
            const data = notificationFunction.getNotification(postId);
            socket.to(room).emit('update-notification-list', data)
        });

        socket.on('unfollow', (postId) => {
            notificationFunction.addNotification(postId, 'unfollow');
            const room = userServices.getUserIdFromPostId(postId);
            const data = notificationFunction.getNotification(postId);
            socket.to(room).emit('update-notification-list', data)
        });
    });
};
/* =========== /// <==> End <==> ===========*/

/* =============== /// <==> Exprot Socket Function <==> /// ============= */
module.exports = socket
/* =========== /// <==> End <==> ===========*/