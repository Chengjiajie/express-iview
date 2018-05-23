/**
 * [Goods模型]
 * @author [Chengjie]
 * @param  {[type]} sequelize [description]
 * @return {[type]}           [description]
 */
module.exports = sequelize => {
	return sequelize.define('Goods',{},{
		tableName:'erp_goods',
		createdAt:'create_time',
		updatedAt:'update_time',
		deletedAt:'delete_time',
		paranoid:true
	});
}