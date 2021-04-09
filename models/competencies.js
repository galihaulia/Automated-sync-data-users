'use strict';
module.exports = (sequelize, DataTypes) => {
  const Competencies = sequelize.define('Competencies', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    cover: DataTypes.STRING,
    statusesId: DataTypes.INTEGER,
    stdCompetenciesId: DataTypes.INTEGER,
    createdBy: DataTypes.INTEGER,
    deletedAt: DataTypes.DATE
  }, {});

  Competencies.associate = function (models) {
    Competencies.belongsTo(models.Statuses, { foreignKey: 'statusesId', as: 'status' })
    Competencies.belongsTo(models.StdCompetencies, { foreignKey: 'stdCompetenciesId', as: 'stdcomp' })
    Competencies.belongsTo(models.Users, { foreignKey: 'createdBy', as: 'author' })
    Competencies.hasMany(models.CompetencyAreas, { foreignKey: 'competenciesId', as: 'areas' })
    Competencies.belongsToMany(models.Syllabuses, { through: 'SylCompetencies', foreignKey: 'competenciesId', as: 'syllabuses' });
  };
  return Competencies;
};