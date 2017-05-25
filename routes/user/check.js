
module.exports = function (req, res) {

    if (req.session.user) {
        console.log(req.session.user);
        res.send({status: 'success'});
    }
    else {
        console.log('未登录');
        res.send(null);
    }
}
