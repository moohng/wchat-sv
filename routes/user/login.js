const { User } = require('../../model');

module.exports = function (req, res) {

    const data = req.body;
    // 检查用户
    User.find(data, (err, results) => {
        if (err) {
            res.send(null);
            return;
        }

        if (results.length === 0) {
            console.log('用户不存在');
            res.send(null);
            return;
        }
        // 保存session
        req.session.user = data.username;

        console.log('用户%s已登录', req.session.user);
        // 返回 成功代码、状态说明、连接ws的密钥ws_key
        const share = require('../../share');
        share.username = data.username;
        const ws_key = share.ws_key = Math.random().toString(36).substr(2);
        res.send({
            code: 10000,
            status: 'login success',
            ws_key
        });
        /**
         * ws_key   用来连接WebSocket
         * ws_key   为一个 “随机” 的字符串，使用完成后失效
         * Math.random().toString(36)   0.m3vn55q3aqbf38xxzleyojemi
         */
    });
}
