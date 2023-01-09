const { Model, DataTypes } = require("sequelize");


class Orders extends Model {
  static init(sequelize) {
    super.init({
      item_name: DataTypes.STRING,
      description: DataTypes.STRING,
      amount: DataTypes.INTEGER,
      request_owner: DataTypes.STRING,
    }, {
      sequelize
    })
  }
}


module.exports = Orders