const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      type: DataType.INTEGER,
      allowNull: false,
      prinaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataType.INTEGER,
      references: {
        model: 'product',
        key: 'id'
      }
    },
    tag_id: {
      type: DataType.INTEGER,
      reference: {
        model: 'tag',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
