// 创建express应用
const app = require('express')();

// 路由
require('./routes')(app);

// 启动一个http服务器
server = app.listen(3000, function() {
    console.log('Server is running on: ');
});

// WebSocket
require('./wss')(server);

// 连接数据库
const mongoose = require('mongoose');
mongoose.connect('mongodb://123.207.33.107/wchat');

const db = mongoose.connection;
db.on('error', () => {
    console.log('连接数据库失败');
});
db.once('open', () => {
    console.log('连接数据库成功');
});
