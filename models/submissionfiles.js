'use strict';
module.exports = (sequelize, DataTypes) => {
  const SubmissionFiles = sequelize.define(
    'SubmissionFiles',
    {
      materialSubmissionsId: DataTypes.INTEGER,
      // materialsId: DataTypes.INTEGER,
      file: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      deletedAt: DataTypes.DATE,
    },
    {}
  );
  SubmissionFiles.associate = function (models) {
    // QuestionFiles.belongsTo(models.Questions, {
    //   foreignKey: 'questionId',
    // });
  };
  return SubmissionFiles;
};
