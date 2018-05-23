/**
 * [ProductAgent模型]
 * @author [Chengjie]
 * @param  {[type]} sequelize [description]
 * @return {[type]}           [description]
 */
module.exports = sequelize => {
	return sequelize.define('ProductAgent',{},{
		tableName:'erp_product_agent',
		createdAt:'create_time',
		updatedAt:'update_time',
		deletedAt:'delete_time',
		paranoid:true
	});
}