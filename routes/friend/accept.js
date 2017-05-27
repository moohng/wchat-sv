const user = require('../../model/user');

module.exports = function(req, res) {

    // 判断是否存在 这个动作
    user.find(req.query, {pre_friend: 1}, null)
        .then(docs => {
            if (docs.length === 0 || docs[0].pre_friend !== req.session.username) {
                // 该操作无效
                console.log('该操作无效');
                res.send({
                    code: 99999,
                    status: 'invalid operation'
                });
            }
            else {
                // 双方建立好友关系
                User.update(req.query, {friend: [req.session.username]});
                User.update({username: req.session.username}, {friend: [req.query.username]});

                console.log('已建立好友关系');
                res.send({
                    code: 10000,
                    status: 'add friend success'
                });
            }
        })
        .catch(err => {
            console.log('数据库错误');
            res.send({
                code: 99999,
                status: 'data base error'
            });
        });


}
