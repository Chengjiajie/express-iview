/**
 * [ProductAgent模型]
 * @author [Chengjie]
 * @param  {[type]} sequelize [description]
 * @return {[type]}           [description]
 */
module.exports = sequelize => {
	return sequelize.define('ProductAgent',{},{
		'tablename':'erp_product_agent',
		'createAt':'create_time',
		'updateAt':'update_time',
		'deleteAt':'delete_time',
		'paranoid':true
	});
}