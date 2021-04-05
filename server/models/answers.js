'use strict';
module.exports = (sequelize, DataTypes) => {
  const Answers = sequelize.define(
    'Answers',
    {
      questionsId: DataTypes.INTEGER,
      answer: DataTypes.TEXT,
      description: DataTypes.TEXT,
      isCorrect: DataTypes.BOOLEAN,
      file: DataTypes.STRING,
      deletedAt: DataTypes.DATE,
    },
    {}
  );
  Answers.associate = function (models) {
    Answers.belongsTo(models.Questions, {
      foreignKey: 'questionsId',
    });
  };
  return Answers;
};
