'use strict';
module.exports = (sequelize, DataTypes) => {
  const CourseStatusLogs = sequelize.define('CourseStatusLogs', {
    coursesId: DataTypes.INTEGER,
    statusesId: DataTypes.INTEGER,
    comment: DataTypes.STRING,
    isRead: DataTypes.BOOLEAN,
    createdBy: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
  }, {});
  CourseStatusLogs.associate = function(models) {
    // associations can be defined here
    CourseStatusLogs.belongsTo(models.Statuses, { foreignKey: 'statusesId', as: 'status'} )
  };
  return CourseStatusLogs;
};