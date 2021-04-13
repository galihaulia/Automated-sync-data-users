'use strict';
module.exports = (sequelize, DataTypes) => {
  const Materials = sequelize.define(
    'Materials',
    {
      name: DataTypes.STRING,
      type: DataTypes.INTEGER,
      chaptersId: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      file: DataTypes.STRING,
      isEmbed: DataTypes.BOOLEAN,
      url: DataTypes.STRING,
      trainingId: DataTypes.INTEGER,
      startDate: DataTypes.DATE,
      endDate: DataTypes.DATE,
      isVerified: DataTypes.BOOLEAN,
      deletedAt: DataTypes.DATE,
      location: DataTypes.STRING,
      conferenceUrl: DataTypes.STRING
    },
    {}
  );
  Materials.associate = function (models) {
    Materials.hasOne(models.Quizes, { foreignKey: 'materialsId', as: 'quiz' });
    Materials.hasMany(models.MaterialFiles, { foreignKey: 'materialsId', as: 'files' });
    Materials.belongsTo(models.Chapters, { foreignKey: 'chaptersId', as: 'chapters'})
    Materials.hasMany(models.MaterialSpeakers, { foreignKey: 'materialsId', as: 'materialspeakers'})
    // Materials.hasMany(models.SubmissionFiles, { foreignKey: 'materialsId', as: 'sFiles'})
  };
  return Materials;
};
