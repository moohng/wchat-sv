import { Router } from 'express';

const router = Router();

// 添加好友
router.get('/add', require('./add'));

// 接受添加好友请求
router.get('/accept', require('./accept'));

// 获取好友列表
router.get('/', require('./get'));

export default router;
