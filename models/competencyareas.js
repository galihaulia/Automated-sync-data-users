'use strict';
module.exports = (sequelize, DataTypes) => {
  const CompetencyAreas = sequelize.define('CompetencyAreas', {
    competenciesId: DataTypes.INTEGER,
    departmentsId: DataTypes.INTEGER,
    jobTitlesId: DataTypes.INTEGER,
    levelsId: DataTypes.INTEGER
  },
  {
    timestamps: false
  });

  CompetencyAreas.associate = function (models) {
    CompetencyAreas.belongsTo(models.Competencies, { foreignKey: 'competenciesId', as: 'competency' })
    CompetencyAreas.belongsTo(models.Departments, { foreignKey: 'departmentsId', as: 'department' })
    CompetencyAreas.belongsTo(models.JobTitles, { foreignKey: 'jobTitlesId', as: 'job' })
    CompetencyAreas.belongsTo(models.Levels, { foreignKey: 'levelsId', as: 'level' })
  };
  return CompetencyAreas;
};