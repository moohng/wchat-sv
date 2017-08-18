const router = require('express').Router();

// 注册
router.post('/register', require('./register'));
// 登录
router.post('/login', require('./login'));
// 注销
router.get('/logout', require('./logout'));

module.exports = router;
