/**
 * [Product模型]
 * @param  {[type]} sequelize [description]
 * @return {[type]}           [description]
 */
module.exports = sequelize => {
	return sequelize.define('Product',{},{
		'tablename':'erp_product',
		'createAt':'create_time',
		'updateAt':'update_time',
		'deleteAt':'delete_time',
		'paranoid':true
	});
}