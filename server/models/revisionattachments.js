'use strict';
module.exports = (sequelize, DataTypes) => {
  const RevisionAttachments = sequelize.define(
    'RevisionAttachments',
    {
      courseTransactionsId: DataTypes.INTEGER,
      file: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      deletedAt: DataTypes.DATE,
    },
    {}
  );
  RevisionAttachments.associate = function (models) {
    // QuestionFiles.belongsTo(models.Questions, {
    //   foreignKey: 'questionId',
    // });
  };
  return RevisionAttachments;
};
