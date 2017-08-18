const express = require('express');
// Session
const session = require('express-session')({
  name: 'wchat.user',
  secret: 'wchat',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false
  }
});

// body parser
const bodyParser = require('body-parser');
const bodys = [
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true })
];

module.exports = function (app) {

  // 记录所有在线用户
  app.user = {};
  // 静态资源
  app.use('/', express.static('www'));

  // body parser / session / 检查授权信息 解决跨域问题
  app.use(bodys, session, require('./auth/check'));

  // authority
  app.use('/auth', require('./auth'));
  // 用户
  app.use('/user', require('./user'));
  // 好友
  app.use('/friend', require('./friend'));
  // 话题
  app.use('/topic', require('./topic'));
  // 消息管理
  app.use('/message', require('./message'));
}

