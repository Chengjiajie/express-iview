/**
 * [BrandManage模型]
 * @author [Chengjie]
 * @param  {[type]} sequelize [description]
 * @return {[type]}           [description]
 */
module.exports = sequelize => {
	return sequelize.define('BrandManage',{},{
		tableName:'erp_brand_manage',
		createdAt:'create_time',
		updatedAt:'update_time',
	});
}