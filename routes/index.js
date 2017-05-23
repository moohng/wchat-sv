const express = require('express');

// 解析body
const bodyParser = require('body-parser');
const bodys = [
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true })
];

// 解析cookie
const cookieParser = require('cookie-parser');
const cookie = cookieParser();

module.exports = function (app) {

    // 静态资源
    app.use('/', express.static('www'));

    // 注册
    app.post('/signup', bodys, cookie, require('./signup'));

    // 登录
    app.post('/signin', bodys, cookie, () => {});

    // 注销
    app.get('/signout', () => {});
}

