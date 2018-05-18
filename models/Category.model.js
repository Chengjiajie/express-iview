/**
 * [Category模型]
 * @author [Chengjie]
 * @param  {[type]} sequelize [description]
 * @return {[type]}           [description]
 */
module.exports = sequelize => {
	return sequelize.define('Category',{},{
		'tablename':'erp_category',
		'createAt':'create_time',
		'updateAt':'update_time',
		'deleteAt':'delete_time',
		'paranoid':true
	});
}