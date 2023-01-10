const { Model, DataTypes } = require("sequelize");

class Products extends Model {
    static init(sequelize) {
      super.init({
        item_name: DataTypes.STRING,
        description: DataTypes.STRING,
        amount: DataTypes.INTEGER,
        product_status: DataTypes.BOOLEAN,
        buyer_product: DataTypes.STRING,
      }, {
        sequelize
      })
    }
  }
  
  
  module.exports = Products