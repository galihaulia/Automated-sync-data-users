'use strict';
module.exports = (sequelize, DataTypes) => {
  const FGDs = sequelize.define('FGDs', {
    coursesId: DataTypes.INTEGER,
    usersId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    statusesId: DataTypes.INTEGER,
    isGeneral: DataTypes.BOOLEAN,
    keywords: DataTypes.TEXT,
    deletedAt: DataTypes.DATE
  }, {});
  FGDs.associate = function(models) {
    // FGDs.hasMany(models.Keywords, {foreignKey: 'FGDId', as: 'keywords'})
    // FGDs.belongsTo(models.Users, {foreignKey: 'userId', as: 'user'})
    // FGDs.hasMany(models.Comments, {foreignKey: 'FGDId', as: 'comments'})
    FGDs.hasMany(models.FGDFiles, { foreignKey: 'FGDsId', as: 'files' })
    FGDs.hasMany(models.Comments, { foreignKey: 'FGDsId', as: 'comments' })
    FGDs.belongsTo(models.Users, { foreignKey : 'usersId', as: 'author' })
    FGDs.belongsTo(models.Statuses, { foreignKey : 'statusesId', as: 'status' })
    FGDs.belongsTo(models.Courses, { foreignKey : 'coursesId', as: 'course' })
  };
  return FGDs;
};