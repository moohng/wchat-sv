const WebSocket = require('ws');

const verifyClient = require('./verifyClient');
const connection = require('./connection');


module.exports = function (server) {
    // 创建WebSocket服务器
    const wss = new WebSocket.Server({
        port: 8080,
        server,
        verifyClient,
        path: '/ws',
        clientTracking: true
    });

    // 已连接
    wss.on('connection', connection);

    // 服务器出错
    wss.on('error', err => {
        console.log('服务器错误：', err);
    });
    // 响应头被写入之前触发
    wss.on('headers', (headers, req) => {
        console.log('响应头：', headers);
    });
    // WebSocket启动后触发
    wss.on('listening', () => {
        console.log('WebSocket启动成功！')
    })
}
