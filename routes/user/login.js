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
        // 返回 成功代码、状态说明
        res.send({
            code: 10000,
            status: 'login success'
        });
    });
}
