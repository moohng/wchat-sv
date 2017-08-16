module.exports = function (server, app) {
    const io = require('socket.io')(server, {
        path: '/ws',
        serveClient: false
    });
    io.on('connection', function (socket) {
        console.log('用户%s已连接！', user, socket);
    })
}