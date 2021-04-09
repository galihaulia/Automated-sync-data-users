'use strict';
module.exports = (sequelize, DataTypes) => {
  const Results = sequelize.define(
    'Results',
    {
      progressMaterialsId: DataTypes.INTEGER,
      questionsId: DataTypes.INTEGER,
      answersId: DataTypes.STRING,
      createdAt: DataTypes.DATE,
    },
    {
      timestamps: false
    }
  );
  Results.associate = function (models) {
    Results.belongsTo(models.Questions, { foreignKey: 'questionsId', as: 'question' })
    Results.belongsTo(models.Answers, { foreignKey: 'answersId', as: 'answer' })
  };
  Results.removeAttribute("id")
  return Results;
};
