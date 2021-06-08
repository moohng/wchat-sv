import { static as expressStatic, Express, Request, Response, NextFunction } from 'express';
import session from 'express-session';
import config from '../config';

import user from './user';
// import checkLogin from './user/check';
// import friend from './friend';
// import topic from './topic';
// import message from './message';
// import ws from './ws';

export default (app: Express) => {

  // 记录所有在线用户
  app.user = {};
  // 静态资源
  app.use('/', expressStatic('www'));

  // 解决跨域问题
  app.use((req: Request, res: Response, next: NextFunction) => {
    res.set({
      // 跨域cookie 不能为通配符 *
      'Access-Control-Allow-Origin': config.allow_origin,
      'Access-Control-Allow-Methods': 'GET,POST',
      // 跨域cookie必须为true
      'Access-Control-Allow-Credentials': true
    });
    next();
  });
  // session
  app.use(session({
    name: 'wchat.user',
    secret: 'wchat',
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false
    }
  }));

  // 用户
  app.use('/user', user);

  // 好友
  // app.use('/friend', checkLogin, friend);

  // 话题
  // app.use('/topic', checkLogin, topic);

  // 消息管理
  // app.use('/message', checkLogin, message);

  // app.use('/ws', ws);
}
