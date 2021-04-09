'use strict';
module.exports = (sequelize, DataTypes) => {
  const Notes = sequelize.define('Notes', {
    coursesId: DataTypes.INTEGER,
    usersId: DataTypes.INTEGER,
    chaptersId: DataTypes.INTEGER,
    materialsId: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    deletedAt: DataTypes.DATE,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {timestamps: true});
  Notes.associate = function (models) {
    Notes.belongsTo(models.Courses, { foreignKey: 'coursesId', as: 'course' })
    Notes.belongsTo(models.Chapters, { foreignKey: 'chaptersId', as: 'chapter' })
    Notes.belongsTo(models.Materials, { foreignKey: 'materialsId', as: 'material' })
    Notes.belongsTo(models.Users, { foreignKey: 'usersId', as: 'author' })
  };
  return Notes;
};