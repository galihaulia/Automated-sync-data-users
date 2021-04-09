'use strict';
module.exports = (sequelize, DataTypes) => {
  const BannerCompanies = sequelize.define(
    'BannerCompanies',
    {
      bannersId: DataTypes.INTEGER,
      companiesId: DataTypes.INTEGER
    },
    {
      timestamps: false
    }
  );
  BannerCompanies.associate = function (models) {
  };
  // BannerCompanies.removeAttribute("id")
  return BannerCompanies;
};
