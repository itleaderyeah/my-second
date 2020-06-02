// 引入express框架
const express = require('express');
// 引入User构造函数
const { User } = require('../model/user');
const admin = express.Router();
// 渲染登录页面
admin.get('/login',require('./admin/loginPage'));
// 实现登录功能
admin.post('/login',require('./admin/login'));
// 创建用户列表路由
admin.get('/user',require('./admin/userPage'));
// 实现用户退出功能
admin.get('/logout',require('./admin/logout'));
// 实现用户编辑页面路由
admin.get('/user-edit',require('./admin/user-edit'));
// 实现添加用户路由
admin.post('/user-edit',require('./admin/user-edit-fn'));
// 实现修改用户路由
admin.post('/user-modify',require('./admin/user-modify'));
// 实现删除用户路由
admin.get('/delete',require('./admin/user-delete'));
// 文章列表路由
admin.get('/article',require('./admin/article'));
// 文章编辑路由
admin.get('/article-edit',require('./admin/article-edit'));
// 文章添加路由
admin.post('/article-add',require('./admin/article-add'));
// 将路由对象作为模块成员导出
module.exports = admin;