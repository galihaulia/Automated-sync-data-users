'use strict';
module.exports = (sequelize, DataTypes) => {
  const MaterialSubmissions = sequelize.define(
    'MaterialSubmissions',
    {
      progressMaterialsId: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      deletedAt: DataTypes.DATE,
    },
    {
      timestamps: false
    }
  );
  MaterialSubmissions.associate = function (models) {
    MaterialSubmissions.hasMany(models.SubmissionFiles, { foreignKey: 'materialSubmissionsId', as: 'sFiles' });
  };
  // MaterialSubmissions.removeAttribute("id")
  return MaterialSubmissions;
};
