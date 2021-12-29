// /////////////////////////////////////////////////////////////////
// / <==> /// This File Contains Notification services /// <==> ///
// ////////////////////////////////////////////////////////////////

/* =============== /// <==> Variables Declaration <==> /// ============= */
const notificationFunction = require('../../Modules/Notifications/Controller/control');
const userServices = require('../../Modules/Users/Controller/services');
/* =========== /// <==> End <==> ===========*/

/* =============== /// <==> Open Connection <==> /// ============= */

const socket = (app) => {
    const io = require('socket.io')(app)
    io.on('connection', socket => { // Opened Chanel between user client and server.
        console.log(socket.id);

        socket.emit('test','Connnection Is Done');

        socket.on('join-room', (room, cb) => {
            socket.join(room)
            cb(`joined ${room}`)
        });

        socket.on('like', (postId) => {
            notificationFunction.addNotification(postId, 'like');
            const room = userServices.getUserIdFromPostId(postId);
            const data = notificationFunction.getNotification(postId);
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