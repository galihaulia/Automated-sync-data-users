'use strict';
module.exports = (sequelize, DataTypes) => {
  const CourseLevels = sequelize.define('CourseLevels', {
    name: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {});
  CourseLevels.associate = function(models) {
    CourseLevels.hasMany(models.GradeScales, { foreignKey: 'courseLevelsId', as: 'grades' })
  };
  return CourseLevels;
};