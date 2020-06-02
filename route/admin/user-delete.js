const { User } = require('../../model/user');
module.exports = async (req,res) =>{
	// 根据获取到的用户id删除用户
	console.log(req.query.id);
	await User.findOneAndDelete({_id:req.query.id});
	res.redirect('/admin/user');
}