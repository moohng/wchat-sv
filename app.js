const config = require('./config');

// 创建express应用
const app = require('express')();
app.set('trust proxy', 1);

// WebSocket
require('express-ws')(app);
// 路由
require('./routes')(app);

// 启动一个http服务器
app.listen(config.port, function() {
    console.log('Server is running on: ', this.address().port);
});

// 连接数据库
const mongoose = require('mongoose');
mongoose.connect(config.mongo_host);
const db = mongoose.connection;
db.once('error', () => {
    console.log('连接数据库失败');
});
db.once('open', () => {
    console.log('连接数据库成功');
});
