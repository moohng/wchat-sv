
const router = require('express').Router();


// 获取所有用户
router.get('/', require('./check'), require('./get'));
// 获取用户信息
// router.get('/:username', () => {});

// 注册
router.post('/register', require('./register'));
// 登录
router.post('/login', require('./login'));
// 检查登录
router.get('/login', require('./check'), function(req, res) {
    res.send({
        code: 10000,
        status: 'logged in'
    })
});
// 注销
router.get('/logout', require('./logout'));


module.exports = router;
