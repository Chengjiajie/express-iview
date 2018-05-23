/**
 * [用户信息模型]
 * @author [Chengjie]
 * @param  {[type]} sequelize [description]
 * @param  {[type]} DataTypes [description]
 * @return {[type]}           [description]
 */
module.exports = (sequelize,DataTypes) =>{
	return sequelize.define('UserInfo',{
		
	},{
		tableName:'erp_user_info',
		createdAt:false,
		updatedAt:false,
		deletedAt:false,
	});
}