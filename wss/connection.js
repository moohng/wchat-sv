const share = require('../share');

const clients = {};

module.exports = function (ws, req) {

    console.log('一个用户已连接！');
    // 记录当前连接的用户
    clients[share.username] = ws;
    delete share.username;

    // 收到客户端的消息
    ws.on('message', data => {
        // 接收到消息后，解析消息来转发给对应的用户
    });

    // 连接关闭后触发
    ws.on('close', (code, reason) => {
        console.log('一个用户已断开！');
    });

    ws.on('error', err => {

    });
    ws.on('headers', (headers, res) => {

    });
}
