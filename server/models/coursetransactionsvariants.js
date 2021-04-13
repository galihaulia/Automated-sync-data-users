'use strict';
module.exports = (sequelize, DataTypes) => {
  const CourseTransactionsVariants = sequelize.define(
    'CourseTransactionsVariants', {
    courseTransactionsId: DataTypes.INTEGER,
    type: DataTypes.STRING,
    price: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    deletedAt: DataTypes.DATE
  }, {}
  );
  CourseTransactionsVariants.associate = function (models) {
  };
  return CourseTransactionsVariants;
};