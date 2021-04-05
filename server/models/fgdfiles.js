'use strict';
module.exports = (sequelize, DataTypes) => {
  const FGDFiles = sequelize.define('FGDFiles', {
    FGDsId: DataTypes.INTEGER,
    file: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {});
  FGDFiles.associate = function(models) {
    // associations can be defined here
  };
  return FGDFiles;
};