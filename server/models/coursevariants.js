'use strict';
module.exports = (sequelize, DataTypes) => {
  const CourseVariants = sequelize.define(
    'CourseVariants', {
    coursesId: DataTypes.INTEGER,
    type: DataTypes.STRING,
    price: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    deletedAt: DataTypes.DATE
  }, {}
  );
  CourseVariants.associate = function (models) {
    CourseVariants.belongsTo(models.Courses, { foreignKey: 'coursesId' })
  };
  return CourseVariants;
};