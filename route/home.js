// 引用expess框架
const express = require('express');
// 创建博客展示页面路由
const home = express.Router();

home.get('/', require('./home/index'));

// 博客前台文章详情展示页面
home.get('/article', require('./home/article'));
// 文章评论功能
home.post('/comment',require('./home/comment'));
// 将路由对象做为模块成员进行导出
module.exports = home;