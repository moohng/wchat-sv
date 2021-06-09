import { Request, Response } from 'express';
import { json, urlencoded } from 'body-parser';
import checkLogin from './check';
import UserGet from './get';
import UserSelf from './self';
import UserRegister from './register';
import UserLogin from './login';
import UserLogout from './logout';
import { Route } from '../index';

// 解析body
const bodys = [
  json(),
  urlencoded({ extended: true }),
];

const routes: Route[] = [
  {
    path: '/',
    controller: [checkLogin, UserGet],
  },
  {
    path: '/self',
    controller: [checkLogin, UserSelf],
  },
  {
    path: '/register',
    method: 'post',
    controller: [...bodys, UserRegister],
  },
  {
    path: '/login',
    method: 'post',
    controller: [...bodys, UserLogin],
  },
  {
    path: '/login',
    controller: [checkLogin, (req: Request, res: Response) => {
      res.send({
        code: 0,
        status: 'logged in'
      })
    }],
  },
  {
    path: '/logout',
    controller: [checkLogin, UserLogout],
  },
];

export default routes;
