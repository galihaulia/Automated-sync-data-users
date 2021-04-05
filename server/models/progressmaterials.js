'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProgressMaterials = sequelize.define(
    'ProgressMaterials',
    {
      progressChaptersId: DataTypes.INTEGER,
      materialsId: DataTypes.INTEGER,
      isRead: DataTypes.BOOLEAN,
      score: DataTypes.DECIMAL,
      comment: DataTypes.STRING,
      completionTime: DataTypes.TIME
    },
    {}
  );
  ProgressMaterials.associate = function (models) {
    ProgressMaterials.belongsTo(models.Materials, { foreignKey: 'materialsId', as: 'material' });
    ProgressMaterials.hasMany(models.Results, { foreignKey: 'progressMaterialsId', as: 'results' });
    ProgressMaterials.hasOne(models.MaterialSubmissions, { foreignKey: 'progressMaterialsId', as: 'materialSubmissions'});
  };
  // ProgressMaterials.removeAttribute("id")
  return ProgressMaterials;
};
