/**
 * [Message模型]
 * @author [Chengjie]
 * @param  {[type]} sequelize [description]
 * @return {[type]}           [description]
 */
module.exports = sequelize => {
	return sequelize.define('Message',{},{
		'tablename':'erp_msg',
		'createAt':'create_time',
		'updateAt':'update_time',
	});
}