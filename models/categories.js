'use strict';
module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define('Categories', {
    companiesId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    color: DataTypes.STRING,
    type: DataTypes.STRING,
    groupsId: DataTypes.INTEGER,
    deletedAt: DataTypes.DATE
  }, {});
  Categories.associate = function(models) {
    Categories.hasMany(models.Courses, { foreignKey: 'categoriesId', as: 'courses'})
    Categories.belongsTo(models.Groups, { foreignKey: 'groupsId', as: 'group'})
  };
  return Categories;
};