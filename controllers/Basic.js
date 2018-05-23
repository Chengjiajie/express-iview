const session = require('express-session');
var Common = require('./Common.js');
class Basic extends Common{
	constructor(...args){
		super(...args);
		this.userInfo = this.req.session.userInfo;
		if(!this.userInfo){
			return res.json(this.errLogin());
		}else{
			next();
		}
	}
}

module.exports = Basic;