// 引入集合构造函数User
const { User } = require('../../model/user');

module.exports = async (req,res) => {
	// 接收post请求参数，这里要进行二次验证
	const { email,password } = req.body;
	if(email.trim().length == 0 || password.trim().length == 0){
		// 客户端错误4000
		return res.status(400).render('admin/error',{msg:'邮箱地址或密码错误'});
	}
	let user = await User.findOne({email});
	// console.log(user);
	// 如果查询到了
	if (user) {
		// 将客户端传递过来的密码和用户信息中的密码进行比对
		// 如果密码比对成功
		if ( password == user.password ) {
			// 登录成功
			// 将用户名存储在请求对象中
			req.session.username = user.username;
			// 将用户角色存储在session中
			req.session.role = user.role;
			// res.send('登录成功');
			req.app.locals.userInfo = user;
			// 判断用户角色
			if(user.role == 'admin'){
				// 重定向到用户列表页面
				res.redirect('/admin/user');
			}else{
				// 重定向到博客首页
				res.redirect('/home/');
			}
			
		} else {
			// 没有查询到用户
			res.status(400).render('admin/error', {msg: '邮箱地址或者密码错误'})
		}
	} else {
		// 没有查询到用户
		res.status(400).render('admin/error', {msg: '邮箱地址或者密码错误'})
	}
}
