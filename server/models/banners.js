'use strict';
module.exports = (sequelize, DataTypes) => {
  const Banners = sequelize.define(
    'Banners',
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      cover: DataTypes.STRING,
      file: DataTypes.STRING,
      isEmbed: DataTypes.BOOLEAN,
      url: DataTypes.STRING,
      isActive: DataTypes.BOOLEAN,
      deletedAt: DataTypes.DATE
    },
    {}
  );
  Banners.associate = function (models) {
    Banners.belongsToMany(models.Companies, { through: 'BannerCompanies', foreignKey: 'bannersId', as: 'companies' })
  };
  return Banners;
};
