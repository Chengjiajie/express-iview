var callBack = require('./callBack.js');
var model = require('../models/model.js');
var md5 = require('js-md5');
class Auth{
	login(req,res,next){
		var name = req.body.userName;
		console.log(JSON.stringify(req.body))
		console.log(name);
		var password = req.body.pwd;
		model.User.findOne({
			where:{
				username:name
			},
			attributes:[],
		})
	}
	loginOut(req,res,next){
		var data = callBack(200,'你正在登出！');
		res.json(data);
	}
}

module.exports = Auth;