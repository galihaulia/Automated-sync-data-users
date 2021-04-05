'use strict';
module.exports = (sequelize, DataTypes) => {
  const Chapters = sequelize.define(
    'Chapters',
    {
      title: DataTypes.STRING,
      coursesId: DataTypes.INTEGER,
      deletedAt: DataTypes.DATE,
    },
    {}
  );
  Chapters.associate = function (models) {
    Chapters.belongsTo(models.Courses, { foreignKey: 'coursesId' });
    Chapters.hasMany(models.Materials, { foreignKey: 'chaptersId', as: 'materials' })
  };
  return Chapters;
};
