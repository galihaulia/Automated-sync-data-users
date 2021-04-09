'use strict';
module.exports = (sequelize, DataTypes) => {
  const CourseByEmployees = sequelize.define('CourseByEmployees', {
    coursesId: DataTypes.INTEGER,
    departmentsId: DataTypes.INTEGER,
    jobTitlesId: DataTypes.INTEGER,
    levelsId: DataTypes.INTEGER,
    usersId: DataTypes.INTEGER,
  },
  {
    timestamps: false
  });
  CourseByEmployees.associate = function(models) {
    CourseByEmployees.belongsTo(models.Departments, { foreignKey: 'departmentsId', as: 'department' })
    CourseByEmployees.belongsTo(models.JobTitles, { foreignKey: 'jobTitlesId', as: 'job' })
    CourseByEmployees.belongsTo(models.Levels, { foreignKey: 'levelsId', as: 'level' })
    CourseByEmployees.belongsTo(models.Users, { foreignKey: 'usersId', as: 'user' })
  };
  CourseByEmployees.removeAttribute("id")
  return CourseByEmployees;
};