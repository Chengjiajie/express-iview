/**
 * [exports 数据库连接]
 * @type {[type]}
 * @author [Chengjie]
 */
const config = require('./databases.js');
const Sequelize = require('sequelize');
exports.sequelize = function(){
	var env = process.env.NODE_ENV || 'build';
	// var baseConf = config[env];
	if(env == 'build'){
		var baseConf = config.build;
	}else{
		var baseConf = config.dev;
	}
	return new Sequelize(baseConf.database,baseConf.root,baseConf.password,{
		'dialect':baseConf.dialect,
		'host':baseConf.host,
		'port':baseConf.port,
	})
}