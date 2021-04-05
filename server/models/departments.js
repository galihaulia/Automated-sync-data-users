'use strict';
module.exports = (sequelize, DataTypes) => {
  const Departments = sequelize.define(
    'Departments',
    {
      name: DataTypes.STRING,
      departmentCode: DataTypes.STRING,
      companiesId: DataTypes.INTEGER,
      isActive: DataTypes.BOOLEAN,
      deletedAt: DataTypes.DATE
    },
    {}
  );
  Departments.associate = function (models) {
    Departments.hasMany(models.JobLevels, { foreignKey: 'departmentsId', as: 'levels' });
    Departments.hasMany(models.JobLevelUsers, { foreignKey: 'departmentsId', as: 'joblevelusers' });
    Departments.belongsTo(models.Companies, { foreignKey: 'companiesId', as: 'company' })
    Departments.hasMany(models.StdCompMaps, { foreignKey: 'departmentsId', as: 'stdcomps' })
  };
  return Departments;
};
