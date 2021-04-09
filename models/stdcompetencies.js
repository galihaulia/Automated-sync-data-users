'use strict';
module.exports = (sequelize, DataTypes) => {
  const StdCompetencies = sequelize.define('StdCompetencies', {
    title: DataTypes.STRING,
    file: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {});

  StdCompetencies.associate = function (models) {
    StdCompetencies.hasMany(models.StdCompMaps, { foreignKey: 'stdCompetenciesId', as: 'areas' })
  };
  return StdCompetencies;
};