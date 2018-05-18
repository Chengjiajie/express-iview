/**
 * [BrandManage模型]
 * @author [Chengjie]
 * @param  {[type]} sequelize [description]
 * @return {[type]}           [description]
 */
module.exports = sequelize => {
	return sequelize.define('BrandManage',{},{
		'tablename':'erp_brand_manage',
		'createAt':'create_time',
		'updateAt':'update_time',
	});
}