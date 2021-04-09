'use strict';
module.exports = (sequelize, DataTypes) => {
  const QuizQuestions = sequelize.define(
    'QuizQuestions', {
      quizesId: DataTypes.INTEGER,
      questionsId: DataTypes.INTEGER,
      point: DataTypes.INTEGER,
      timer: DataTypes.TIME,
    },
    {
      timestamps: false
    }
  );
  QuizQuestions.associate = function (models) {
    QuizQuestions.belongsTo(models.Questions, { foreignKey: 'questionsId', as: 'question' })
  };
  return QuizQuestions;
};