const express = require('express');
// 解析body
const bodyParser = require('body-parser');
const bodys = [
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true })
];

// 解析cookie
// const cookie = require('cookie-parser')('wchat');
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

module.exports = function (app) {

    app.user = {};
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
    app.use([session, bodys]);

    // 用户
    app.use('/user', require('./user'));

    // 话题
    app.use('/topic', require('./topic'));

    // 消息管理
    app.use('/message', require('./message'));

    app.use('/ws', require('./ws'));
}

