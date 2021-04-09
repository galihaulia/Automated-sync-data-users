'use strict';
module.exports = (sequelize, DataTypes) => {
  const CourseByDepartments = sequelize.define('CourseByDepartments', {
    coursesId: DataTypes.INTEGER,
    departmentsId: DataTypes.INTEGER,
    jobTitlesId: DataTypes.INTEGER,
    levelsId: DataTypes.INTEGER
  },
  {
    timestamps: false
  });
  CourseByDepartments.associate = function(models) {
    CourseByDepartments.belongsTo(models.Departments, { foreignKey: 'departmentsId', as: 'department' })
    CourseByDepartments.belongsTo(models.JobTitles, { foreignKey: 'jobTitlesId', as: 'job' })
    CourseByDepartments.belongsTo(models.Levels, { foreignKey: 'levelsId', as: 'level' })
  };
  CourseByDepartments.removeAttribute("id")
  return CourseByDepartments;
};