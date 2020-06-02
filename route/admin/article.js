const { Article } = require('../../model/article');
// 导入mongoose-sex-page模块
const pagination = require('mongoose-sex-page');
module.exports = async (req,res) => {
	// 接收客户端传来的页码
	const page = req.query.page;
	// 标示当前访问的是文章列表页面
	req.app.locals.currentLink = 'article';
	// page:指定当前页
	// size:指定每页显示的数据条数
	// display:指定客户端要现实的页码数
	// exec():向数据库发送查询请求
	let articles = await pagination(Article).find().page(page).size(2).display(3).populate('author').exec();
	// res.send(articles);
	res.render('admin/article.art',{articles:articles});
}