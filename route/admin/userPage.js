// 导入用户集合构造函数
const { User } = require('../../model/user');
module.exports = async (req,res) => {
	// 标示当前访问的是文章管理页面
	req.app.locals.currentLink = 'user';
	// 接收客户端传来的页数
	let page = req.query.page || 1;
	// 每一页显示的数据条数
	let pageSize = 10;
	// 查询用户总数
	let count = await User.countDocuments({});
	// 计算总页数
	let total = Math.ceil(count / pageSize);
	// 页码对应的数据查询开始位置
	let start = (page-1)*pageSize;
	// 将用户信息从数据库中查询出来
	let users = await User.find({}).limit(pageSize).skip(start);
	// 渲染用户列表模板
	res.render('admin/user',{users:users,total:total,page:page});
};