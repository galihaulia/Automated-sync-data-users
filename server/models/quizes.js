'use strict';
module.exports = (sequelize, DataTypes) => {
  const Quizes = sequelize.define(
    'Quizes',
    {
      chaptersId: DataTypes.INTEGER,
      materialsId: DataTypes.INTEGER,
      grade: DataTypes.INTEGER,
      timer: DataTypes.TIME,
      timerMode: DataTypes.STRING,
      point: DataTypes.INTEGER,
      isRandom: DataTypes.BOOLEAN,
      questionLimit: DataTypes.INTEGER,
      completionTime: DataTypes.TIME,
      deletedAt: DataTypes.DATE,
    },
    {}
  );
  Quizes.associate = function (models) {
    Quizes.hasMany(models.QuizQuestions, { foreignKey: 'quizesId', as: 'questions'});
  }
  return Quizes;
};
