
module.exports = function (req, res) {

    if (req.session.user) {
        const share = require('../../share');
        share.username = req.session.user;
        const ws_key = share.ws_key = Math.random().toString(36).substr(2);
        res.send({
            code: 10000,
            status: 'login success',
            ws_key
        });
    }
    else {
        console.log('未登录');
        res.send(null);
    }
}
