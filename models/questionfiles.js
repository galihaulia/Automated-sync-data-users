'use strict';
module.exports = (sequelize, DataTypes) => {
  const QuestionFiles = sequelize.define(
    'QuestionFiles',
    {
      questionsId: DataTypes.INTEGER,
      file: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      deletedAt: DataTypes.DATE,
    },
    {}
  );
  QuestionFiles.associate = function (models) {
    // QuestionFiles.belongsTo(models.Questions, {
    //   foreignKey: 'questionId',
    // });
  };
  return QuestionFiles;
};
