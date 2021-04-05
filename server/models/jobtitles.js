'use strict';
module.exports = (sequelize, DataTypes) => {
  const JobTitles = sequelize.define(
    'JobTitles',
    {
      name: DataTypes.STRING,
      isActive: DataTypes.BOOLEAN,
      deletedAt: DataTypes.DATE
    },
    {}
  );
  JobTitles.associate = function (models) {
    JobTitles.hasMany(models.JobLevels, { foreignKey: 'jobTitlesId', as: 'joblevels' });
    JobTitles.hasMany(models.JobLevelUsers, { foreignKey: 'jobTitlesId', as: 'joblevelusers' });
  };
  return JobTitles;
};
