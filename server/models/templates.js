'use strict';
module.exports = (sequelize, DataTypes) => {
  const Templates = sequelize.define('Templates', {
    name: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {});

  Templates.associate = function (models) {
  };
  return Templates;
};