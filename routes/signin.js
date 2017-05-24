const url = require('url');
const { User } = require('../model');

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

        console.log('用户存在', results);

        // res.cookie('token', 'abcdefg', {
        //     maxAge: 20 * 60 * 1000,
        //     httpOnly: true
        // });

        res.send({status: 'success'});
    });
}
