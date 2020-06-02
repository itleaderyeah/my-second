const { User } = require('../../model/user');
module.exports = async (req,res,next) =>{
	const { username,email,role,state,password } = req.body;
	const id = req.query.id;
	let user = await User.findOne({_id: id});
	const isValid = (password == user.password?true:false)
	if(isValid){
		// 密码比对成功
		await User.updateOne({_id:id},{
			username:username,
			email:email,
			role:role,
			state:state
		});
		res.redirect('/admin/user')
	}
	else{
		// 密码比对失败
		return res.redirect('/admin/user');
	}
};