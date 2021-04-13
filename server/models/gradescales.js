'use strict';
module.exports = (sequelize, DataTypes) => {
  const GradeScales = sequelize.define(
    'GradeScales',
    {
      name: DataTypes.STRING,
      min: DataTypes.DECIMAL,
      max: DataTypes.DECIMAL,
      companiesId: DataTypes.INTEGER,
      courseLevelsId: DataTypes.INTEGER,
      deletedAt: DataTypes.DATE
    },
    {}
  );
  GradeScales.associate = function (models) {
    GradeScales.belongsTo(models.Companies, { foreignKey: 'companiesId', as: 'company' })
    GradeScales.belongsTo(models.CourseLevels, { foreignKey: 'courseLevelsId', as: 'level'})
  };
  return GradeScales;
};
