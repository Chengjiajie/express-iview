var model = require('../models/model.js');
var Common = require('./Common.js');
var md5 = require('js-md5');
var auth_key = 'Juju2017';
class Auth extends Common{
	login(){
		var name = this.req.body.userName;
		var password = this.req.body.pwd;
		var user_info;
		model.User.findOne({
			where:{
				username:name,
				user_type:11,
				is_verify:1
			},
			attributes:['id','username','password','mobilephone','email','head_ico'],
		}).then(result => {
			if(!result){
				return this.res.json(this.err('账户信息未找到！'));
			}
			if(result.dataValues.password != md5(password + auth_key)){
				return this.res.json(this.err('密码错误，请重新登录！'));
			}
			user_info = result.dataValues;
			console.log(user_info);
			model.UserInfo.findOne({
				where:{
					user_id:result.dataValues.id
				},
				attributes:['nick_name','sex','company_id']
			}).then(rel =>{
				user_info.nick_name = rel.dataValues.nick_name;
				user_info.company_id = rel.dataValues.company_id;
				user_info.sex = rel.dataValues.sex;
				this.req.session.user_info = user_info;
				return this.res.json(this.suc({head_ico:this.showImg(user_info.head_ico)},'登录成功！'));
			})
		})
	}
	loginOut(){
		if(this.req.session.user_info){
			delete this.req.session.user_info;
			return this.res.json(this.suc([],'登出成功！'));
		}else{
			return this.res.json(this.suc([],'已经登出！'));
		}
	}
}

module.exports = Auth;