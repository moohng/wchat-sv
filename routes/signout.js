const url = require('url');

module.exports = function (req, res) {

    const data = req.body;

    console.log(data)
    // 判断用户是否存在
    //
    // 创建用户
    //
    res.send(data);
}
