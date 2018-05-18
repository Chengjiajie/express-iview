/**
 * [Brand模型]
 * @author [Chengjie]
 * @param  {[type]} sequelize [description]
 * @return {[type]}           [description]
 */
module.exports = sequelize => {
	return sequelize.define('Brand',{},{
		'tablename':'erp_brand',
		'createAt':'create_time',
		'updateAt':'update_time',
		'deleteAt':'delete_time',
		'paranoid':true
	});
}