const url = require('url');

module.exports = function (req, res) {

    console.log('jjjjjjjjjjjjj')

    req.session.destroy(err => {
        if (err) {
            console.log('注销失败')
            res.send(null);
            return;
        }

        // 清除cookie
        res.clearCookie();
        res.send({status: 'success'});
    })
}
