const url = require('url');
const { User } = require('../../model');

module.exports = function (req, res) {

    const data = req.body;
    // 检查用户是否存在
    User.find({username: data.username}, (err, results) => {

        if (err) {
            res.send(null);
            return;
        }

        console.log(results)
        if (results.length !== 0) {
            // 用户不存在
            console.log('用户已存在');
            res.send(null);
            return;
        }

        // 保存数据库
        const user = new User(data);
        user.save(err => {
            if (err) {
                console.log('保存数据库出错');
                res.send(null);
                return;
            }

            req.session.user = data.username;

            console.log('保存数据库成功');
            // 返回 成功代码、状态说明、连接ws的密钥ws_key
            const share = require('../../share');
            share.username = data.username;
            const ws_key = share.ws_key = Math.random().toString(36).substr(2);
            res.send({
                code: 10000,
                status: 'register success',
                ws_key
            });
        })
    })
}
