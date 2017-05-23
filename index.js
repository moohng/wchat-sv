const app = require('express')();
const routes = require('./routes');
const wss = require('./wss');

// 路由
routes(app);

// 开始监听
server = app.listen(3000, function() {
    console.log('Server is running on: ');
});

// WebSocket
wss(server);
