const config = require('../../../config');

module.exports = function (req, res, next) {
  if (req.path.startsWith('/auth/login') ||
      req.path.startsWith('/auth/register')) return next();

  if (req.session.username) {
    res.set({
      // 跨域cookie 不能为通配符 *
      'Access-Control-Allow-Origin': config.allow_origin,
      'Access-Control-Allow-Methods': 'GET,POST',
      // 跨域cookie必须为true
      'Access-Control-Allow-Credentials': true
    });
    next();
  } else {
    console.log('用户未登录', req.path);
    res.send({
      code: 10001,
      status: '用户未登录'
    });
  }
}
