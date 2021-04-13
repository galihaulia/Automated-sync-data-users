'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Attendances extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Attendances.belongsTo(models.Users,{ foreignKey: 'usersId', as: 'user'})
      Attendances.belongsTo(models.Materials,{ foreignKey: 'materialsId', as: 'material'})
    }
  };
  Attendances.init({
    materialsId: DataTypes.INTEGER,
    usersId: DataTypes.INTEGER,
    checkIn: DataTypes.TIME,
    checkOut: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'Attendances',
  });
  return Attendances;
};