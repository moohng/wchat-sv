import { Router, static as expressStatic, Express, Request, Response, NextFunction, RequestHandler } from 'express';
import session from 'express-session';
import config from '../config';

import user from './user';
import checkLogin from './user/check';
import friend from './friend';
import topic from './topic';
import message from './message';
// import ws from './ws';

type Method = 'get' | 'post' | 'put' | 'delete';

export interface Route {
  path: string;
  method?: Method;
  controller?: RequestHandler | RequestHandler[];
  children?: Route[];
}

const routes: Route[] = [
  {
    path: '/user',
    children: user,
  },
  {
    path: '/friend',
    controller: checkLogin,
    children: friend,
  },
  {
    path: '/topic',
    controller: checkLogin,
    children: topic,
  },
  {
    path: '/message',
    controller: checkLogin,
    children: message,
  },
];

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

  function createRouter(routes: Route[]) {
    const router = Router();
    routes.forEach(route => {
      const method = (route.method || 'get').toLocaleLowerCase() as Method;
      router[method](route.path, route.controller || []);
    })
    return router;
  }

  function createModule(routes: Route[]) {
    routes.forEach(route => {
      if (route.children) {
        const router = createRouter(route.children);
        app.use(route.path, route.controller || [], router);
      }
    });
  }

  createModule(routes);

  // app.use('/ws', ws);
}
