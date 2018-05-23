const sequelize = require('./db').sequelize();
const User = sequelize.import('./User.model.js');
const UserInfo = sequelize.import('./UserInfo.model.js');
const Category = sequelize.import('./Category.model.js');
const Brand = sequelize.import('./Brand.model.js');
const BrandManage = sequelize.import('./BrandManage.model.js');
const Message = sequelize.import('./Message.model.js');
const Goods = sequelize.import('./Goods.model.js');
const Product = sequelize.import('./Product.model.js');
const ProductAgent = sequelize.import('./ProductAgent.model.js');

//模型关联
module.exports = {
	'User' : User,
	'UserInfo' : UserInfo
}