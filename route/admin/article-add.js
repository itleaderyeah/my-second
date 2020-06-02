// 引入formidable模块
const formidable = require('formidable');
const path = require('path');
const { Article } = require('../../model/article');
module.exports = (req,res) =>{
	// 1.创建表单解析对象
	const form = new formidable.IncomingForm();
	// 2.配置要上传文件的存放路径
	form.uploadDir = path.join(__dirname,'../','../','public','uploads');
	// 3.保留上传文件的后缀名
	form.keepExtensions = true;
	// 4.解析表单
	form.parse(req,async (err,fields,files) =>{
		// res.send(files.cover.path.split('public')[1]);
		await Article.create({
			title:fields.title,
			author:fields.author,
			publishDate:fields.publishDate,
			cover:files.cover.path.split('public')[1],
			content:fields.content
		});
		res.redirect('/admin/article');
	});
}