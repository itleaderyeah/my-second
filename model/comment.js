// 引入mongoose模块
const mongoose = require('mongoose');
// 创建评论集合规则
const commonentSchema = new mongoose.Schema({
	// 文章id
	aid:{
		type:mongoose.Schema.Types.ObjectId,
		ref:'Article'
	},
	// 评论人的id
	uid:{
		type:mongoose.Schema.Types.ObjectId,
		ref:'User'
	},
	// 评论发表时间
	time:{
		type:Date
	},
	// 评论内容
	content:{
		type:String
	}
});
// 创建评论集合
const Comment = mongoose.model('Comment',commonentSchema);
// 模块导出
module.exports = { Comment };