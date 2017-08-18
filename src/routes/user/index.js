const router = require('express').Router();

// 获取用户
router.get('/', require('./get'));
// 获取自己的用户信息
router.get('/self', require('./self'));

module.exports = router;
