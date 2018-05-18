/**
 * [用户信息模型]
 * @author [Chengjie]
 * @param  {[type]} sequelize [description]
 * @param  {[type]} DataTypes [description]
 * @return {[type]}           [description]
 */
module.exports = (sequelize,DataTypes) =>{
	return sequelize.define('UserInfo',{
		userId:{
			type:DataTypes.BIGINT(11),
			field:'user_id',
			references:{
				model:'User',
				key:'id'
			}
		}
	},{
		'tablename':'erp_user_info',
		'createAt':false,
		'updateAt':false,
		'deleteAt':false
	});
}