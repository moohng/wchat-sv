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

    // 解决跨域问题
    app.use((req, res, next) => {
        res.set({
            // 跨域cookie 不能为通配符 *
            'Access-Control-Allow-Origin': 'http://localhost:8808',
            'Access-Control-Allow-Methods': 'GET,POST',
            // 跨域cookie必须为true
            'Access-Control-Allow-Credentials': true
        });
        next();
    });
    // cookie
    app.use(cookie)

    // 注册
    app.post('/signup', bodys, require('./signup'));

    // 登录
    app.post('/signin', bodys, require('./signin'));

    // 注销
    app.get('/signout', require('./signout'));
}

