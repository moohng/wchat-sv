const url = require('url');
const { User } = require('../model');

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

            console.log('保存数据库成功');

            res.send({status: 'success'});
        })
    })
}
