// 引入mongoose模块
const mongoose = require('mongoose');
// 引入joi模块
const Joi = require('joi');
// 创建用户集合规则
const userSchema = new mongoose.Schema({
	username:{
		type:String,
		required:true,
		minlength:2,
		maxlength:20
	},
	email:{
		type:String,
		required:true,
		// 保证邮箱地址的唯一性
		unique:true
	},
	password:{
		type:String,
		required:true
	},
	role:{
		type:String,
		required:true
	},
	state:{
		type:Number,
		// 1:禁用；0:启用
		dafault:0
	}
});
// 创建用户集合
const User = mongoose.model('User',userSchema);
// 下面代码用于创建初始化用户(email:'itheima@itcast.cn',password:'123456')
 /* User.create({
	username:'itheima',
	email:'itheima@itcast.cn',
	password:'123456',
	role:'admin',
	state:0
}).then(result => console.log('用户创建成功'))
.catch(err => console.log(err,'用户创建失败')); */
// 验证用户信息
const validateUser = user =>{
	// 定义验证规则
	const schema = {
		username:Joi.string().min(2).max(12).error(new Error('用户名不符合规则')),
		email:Joi.string().email().error(new Error('邮箱格式错误')),
		password:Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).error(new Error('密码错误')),
		role:Joi.string().valid('normal','admin').required().error(new Error('角色不符合规则')),
		state:Joi.number().valid(0,1).required().error(new Error('状态错误'))
	};
	// 实施验证
	return Joi.validate(user,schema);
}
// 模块导出
module.exports = { User,validateUser };