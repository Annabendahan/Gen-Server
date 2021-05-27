'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Maillot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Maillot.init({
    col: DataTypes.INTEGER,
    main: DataTypes.INTEGER,
    leftSleeve: DataTypes.INTEGER,
    rightSleeve: DataTypes.INTEGER,
    bottom: DataTypes.INTEGER,
    details: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Maillot',
    tableName: 'Maillots'
  });
  return Maillot;
};