'use strict';
module.exports = (sequelize, DataTypes) => {
  const MaterialFiles = sequelize.define(
    'MaterialFiles',
    {
      materialsId: DataTypes.INTEGER,
      file: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      deletedAt: DataTypes.DATE,
    },
    {}
  );
  MaterialFiles.associate = function (models) {
    // QuestionFiles.belongsTo(models.Questions, {
    //   foreignKey: 'questionId',
    // });
  };
  return MaterialFiles;
};
