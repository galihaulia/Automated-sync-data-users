'use strict';
module.exports = (sequelize, DataTypes) => {
  const Syllabuses = sequelize.define('Syllabuses', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    cover: DataTypes.STRING,
    companiesId: DataTypes.INTEGER,
    createdBy: DataTypes.INTEGER,
    deletedAt: DataTypes.DATE
  }, {});

  Syllabuses.associate = function (models) {
    Syllabuses.belongsTo(models.Users, { foreignKey: 'createdBy', as: 'author' })
    Syllabuses.belongsToMany(models.Courses, { through: 'SylCourses', foreignKey: 'syllabusesId', as: 'courses' });
    Syllabuses.belongsToMany(models.Competencies, { through: 'SylCompetencies', foreignKey: 'syllabusesId', as: 'competencies' });
  };
  return Syllabuses;
};