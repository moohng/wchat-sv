
module.exports = function(req, res) {

    let users = [];
    for (user in req.app.user) {

        if (user === req.session.user) continue;
        users.push(user);
    }
    res.send({
        code: 10000,
        status: 'get online success',
        users
    });
}
