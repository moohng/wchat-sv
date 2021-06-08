import { Router } from 'express';
import { json, urlencoded } from 'body-parser';
import checkLogin from './check';
import UserGet from './get';
import UserSelf from './self';
import UserRegister from './register';
import UserLogin from './login';
import UserLogout from './logout';

const router = Router();

// 解析body
const bodys = [
  json(),
  urlencoded({ extended: true }),
];

// 获取用户
router.get('/', checkLogin, UserGet);
// 获取自己的用户信息
router.get('/self', checkLogin, UserSelf);

// 注册
router.post('/register', bodys, UserRegister);
// 登录
router.post('/login', bodys, UserLogin);
// 检查登录
router.get('/login', checkLogin, function (req, res) {
  res.send({
    code: 0,
    status: 'logged in'
  })
});
// 注销
router.get('/logout', UserLogout);


export default router;
