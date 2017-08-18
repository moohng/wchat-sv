const url = require('url');
const user = require('../../model/user');

module.exports = function (req, res) {

  const data = req.body;

  // 校验用户名和密码
  if (data.username.length < 6 || data.password.length < 6) {
    return res.send({
      code: 99999,
      status: '用户名或密码不合法'
    });
  }

  // 检查用户是否存在
  user.find({username: data.username})
      .then(docs => {
        if (docs.length > 0) {
          // 用户已存在
          console.log('用户%s已存在', data.username);
          return res.send({
            code: 99999,
            status: '用户已存在'
          });
        }

        // 保存数据库
        user.save(data)
            .then(user => {
              console.log('保存数据库成功');
              // 创建会话
              req.session.username = user.username;
              // 返回 成功代码、状态说明
              res.send({
                code: 0,
                status: '注册成功'
              });
              console.log('用户%s注册成功并登陆', user.username);
            })
            .catch(err => {
              console.log('保存数据库出错');
              res.send({
                code: 99999,
                status: '数据库错误'
              });
            });
      })
      .catch(err => {
        res.send({
          code: 99999,
          status: '数据库错误'
        });
      });
}
