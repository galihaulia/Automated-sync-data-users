'use strict';
module.exports = (sequelize, DataTypes) => {
  const StdCompMaps = sequelize.define('StdCompMaps', {
    stdCompetenciesId: DataTypes.INTEGER,
    departmentsId: DataTypes.INTEGER,
    jobTitlesId: DataTypes.INTEGER
  }, {
    timestamps: false
  });

  StdCompMaps.associate = function (models) {
    StdCompMaps.belongsTo(models.StdCompetencies, { foreignKey: 'stdCompetenciesId', as: 'stdcomp' })
    StdCompMaps.belongsTo(models.Departments, { foreignKey: 'departmentsId', as: 'department' })
    StdCompMaps.belongsTo(models.JobTitles, { foreignKey: 'jobTitlesId', as: 'job' })
  };
  return StdCompMaps;
};