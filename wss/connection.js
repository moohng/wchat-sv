

module.exports = function (ws, req) {

    console.log('一个用户已连接：');

    // 连接关闭后触发
    ws.on('close', (code, reason) => {

    });

    ws.on('error', err => {

    });

    ws.on('headers', (headers, res) => {

    });

    ws.on('message', data => {

    });

    // 连接建立
    ws.on('open', () => {

    });

    ws.on('ping', data => {

    });

    ws.on('pong', data => {

    });
}
