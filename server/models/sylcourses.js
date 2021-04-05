'use strict';
module.exports = (sequelize, DataTypes) => {
  const SylCourses = sequelize.define('SylCourses', {
    syllabusesId: DataTypes.INTEGER,
    coursesId: DataTypes.INTEGER
  }, {
    timestamps: false
  });

  SylCourses.associate = function (models) {
    
  };
  SylCourses.removeAttribute('id')
  return SylCourses;
};