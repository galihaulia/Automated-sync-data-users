'use strict';
module.exports = (sequelize, DataTypes) => {
  const Questions = sequelize.define(
    'Questions', {
      question: DataTypes.TEXT,
      description: DataTypes.TEXT,
      type: DataTypes.STRING,
      isBank: DataTypes.BOOLEAN,
      author: DataTypes.INTEGER,
      companiesId: DataTypes.INTEGER,
      deletedAt: DataTypes.DATE,
    }, {}
  );
  Questions.associate = function (models) {
    Questions.belongsTo(models.Users, { foreignKey: 'author', as: 'user' });
    Questions.hasMany(models.Answers, { foreignKey: 'questionsId', as: 'answers' });
    Questions.hasMany(models.QuestionFiles, { foreignKey: 'questionsId', as: 'files' });
  };
  return Questions;
};