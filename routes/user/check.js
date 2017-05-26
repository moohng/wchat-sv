
module.exports = function (req, res, next) {

    if (req.session.user) {
        next();
    }
    else {
        console.log('未登录');
        res.send({
            code: 99999,
            status: 'not login'
        });
    }
}
