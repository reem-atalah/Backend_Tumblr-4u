// /////////////////////////////////////////////////////////////////
// / <==> /// This File Contains Notification services /// <==> ///
// ////////////////////////////////////////////////////////////////

/* =============== /// <==> Variables Declaration <==> /// ============= */

/* =========== /// <==> End <==> ===========*/

/* =============== /// <==> Open Connection <==> /// ============= */

const socket = (app) => {
    const io = require('socket.io')(app)
    io.on('connection', socket => { // Opened Chanel between user client and server.
        console.log(socket.id);

        socket.on('join-room', (room,cb) => {
            socket.join(room)
            cb(`joined ${room}`)
          })

          socket.on('like', (room,cb) => {
          })

    });
};
/* =========== /// <==> End <==> ===========*/

/* =============== /// <==> Exprot Socket Function <==> /// ============= */
module.exports = socket
/* =========== /// <==> End <==> ===========*/