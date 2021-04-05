'use strict';
module.exports = (sequelize, DataTypes) => {
  const JobLevels = sequelize.define(
    'JobLevels',
    {
      departmentsId: DataTypes.INTEGER,
      jobTitlesId: DataTypes.INTEGER,
      levelsId: DataTypes.INTEGER
    },
    {
      timestamps: false
    }
  );
  JobLevels.associate = function (models) {
    JobLevels.belongsTo(models.Departments, { foreignKey: 'departmentsId' })
    JobLevels.belongsTo(models.JobTitles, { foreignKey: 'jobTitlesId' })
    JobLevels.belongsTo(models.Levels, { foreignKey: 'levelsId' })
  };
  // JobLevels.removeAttribute("id")
  return JobLevels;
};
