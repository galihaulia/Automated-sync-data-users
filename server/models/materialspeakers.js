'use strict';
module.exports = (sequelize, DataTypes) => {
  const MaterialSpeakers = sequelize.define(
    'MaterialSpeakers', {
    materialsId: DataTypes.INTEGER,
    usersId: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    deletedAt: DataTypes.DATE
  }, {}
  );
  MaterialSpeakers.associate = function (models) {
    MaterialSpeakers.belongsTo(models.Materials, { foreignKey: 'materialsId', as: 'materials' })
    MaterialSpeakers.belongsTo(models.Users, { foreignKey: 'usersId', as: 'user' })
  };
  return MaterialSpeakers;
};