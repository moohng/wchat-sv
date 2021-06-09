import express from 'express';
// import ws from 'express-ws';
import { connect, connection } from 'mongoose';
import routes from './routes';
import config from './config';

// 创建express应用
const app = express();
app.set('trust proxy', 1);

// WebSocket
// ws(app);
// 路由
routes(app);

// 启动一个http服务器
app.listen(config.port, () => {
  console.log('Server is running on: ', config.port);
});

// 连接数据库
connect(config.mongo_host);
connection.on('error', () => {
  console.log('连接数据库失败');
});
connection.once('open', () => {
  console.log('连接数据库成功');
});
