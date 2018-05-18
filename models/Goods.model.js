/**
 * [Goods模型]
 * @author [Chengjie]
 * @param  {[type]} sequelize [description]
 * @return {[type]}           [description]
 */
module.exports = sequelize => {
	return sequelize.define('Goods',{},{
		'tablename':'erp_goods',
		'createAt':'create_time',
		'updateAt':'update_time',
		'deleteAt':'delete_time',
		'paranoid':true
	});
}