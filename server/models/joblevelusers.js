'use strict';
module.exports = (sequelize, DataTypes) => {
  const JobLevelUsers = sequelize.define(
    'JobLevelUsers',
    {
      departmentsId: DataTypes.INTEGER,
      jobTitlesId: DataTypes.INTEGER,
      levelsId: DataTypes.INTEGER,
      usersId: DataTypes.INTEGER
    },
    {
      timestamps: false
    }
  );
  JobLevelUsers.associate = function (models) {
    JobLevelUsers.belongsTo(models.Departments, { foreignKey: 'departmentsId', as: 'department' })
    JobLevelUsers.belongsTo(models.JobTitles, { foreignKey: 'jobTitlesId', as: 'job' })
    JobLevelUsers.belongsTo(models.Levels, { foreignKey: 'levelsId', as: 'level' })
    JobLevelUsers.belongsTo(models.Users, { foreignKey: 'usersId', as: 'user' })
  };
  JobLevelUsers.removeAttribute('id');
  return JobLevelUsers;
};
