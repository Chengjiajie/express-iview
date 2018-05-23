/**
 * [Message模型]
 * @author [Chengjie]
 * @param  {[type]} sequelize [description]
 * @return {[type]}           [description]
 */
module.exports = sequelize => {
	return sequelize.define('Message',{},{
		tableName:'erp_msg',
		createdAt:'create_time',
		updatedAt:'update_time',
	});
}