const session = require('express-session');
var callBack = require('./callBack.js');
class Basic{
	constructor(req,res,next){
		this.userInfo = req.session.userInfo;
		if(!this.userInfo){
			var data = callBack(-1001,'您还没有登录，请先登录！');
			res.json(data);
		}else{
			next();
		}
	}
}

module.exports = Basic;