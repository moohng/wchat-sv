const url = require('url');
const { User } = require('../model');

module.exports = function (req, res) {

    const data = req.body;
    // 检查用户
    User.find(data, (err, result) => {
        if (err) {
            res.send(null);
            return;
        }

        if (result.length === 0) {
            console.log('用户不存在');
            res.send(null);
            return;
        }

        console.log('用户存在', result);

        res.cookie('token', 'abcdefg', {
            maxAge: 20 * 60 * 1000,
            httpOnly: true
        });

        res.send({status: 'success'});
    });

    // const user = new User(data);
    // user.save(err => {
    //     if (err) {
    //         console.log('保存数据库失败');
    //     }
    //     else {
    //         console.log('保存数据库成功');
    //     }
    // })

    console.log(req.cookies)

}
