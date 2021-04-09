'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProgressChapters = sequelize.define(
    'ProgressChapters',
    {
      enrollsId: DataTypes.INTEGER,
      chaptersId: DataTypes.INTEGER,
      isComplete: DataTypes.BOOLEAN
    },
    {}
  );
  ProgressChapters.associate = function (models) {
    ProgressChapters.belongsTo(models.Chapters, { foreignKey: 'chaptersId', as: 'chapter' })
    ProgressChapters.hasMany(models.ProgressMaterials, { foreignKey: 'progressChaptersId', as: 'materials' });
  };
  // ProgressChapters.removeAttribute("id")
  return ProgressChapters;
};
