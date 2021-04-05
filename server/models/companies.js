'use strict';
module.exports = (sequelize, DataTypes) => {
  const Companies = sequelize.define('Companies', {
    name: DataTypes.STRING,
    idCompany: DataTypes.STRING,
    companyCode: DataTypes.STRING,
    address: DataTypes.TEXT,
    phone: DataTypes.STRING,
    logo: DataTypes.STRING,
    logogram: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN,
    deletedAt: DataTypes.DATE
  }, {});

  Companies.associate = function (models) {
    Companies.hasMany(models.Departments, { foreignKey: 'companiesId', as: 'departments' });
    Companies.hasMany(models.Courses, { foreignKey: 'createdByCompanyId', as: 'authorByCompanies' });
    Companies.belongsToMany(models.Banners, { through: 'BannerCompanies', foreignKey: 'companiesId', as: 'banners' })
  };
  return Companies;
};