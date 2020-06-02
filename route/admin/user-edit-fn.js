// 引入用户集合的构造函数
const { User,validateUser } = require('../../model/user');
module.exports = async (req,res,next) => {
	
	try {
		// 验证通过
		await validateUser(req.body);
	}
	catch(e){
		// 验证未通过，重定向回user-edit页面
		return res.redirect(`/admin/user-edit/?message=${e.message}`);
		// return next(JSON.stringify({path:'/admin/user-edit',message:e.message}));
	}

	// 根据邮箱地址判断用户是否存在
	let user = await User.findOne({email:req.body.email});
	// 如果用户已存在
	if(user){
		// 重定向回user-edit页面
		return res.redirect(`/admin/user-edit/?message=邮箱已经被注册`);
		// return next(JSON.stringify({path:'/admin/user-edit',message:'邮箱已经被注册'}));
	}
	await User.create(req.body);
	// 重定向回user页面
	res.redirect('/admin/user');
};

