'use strict';
module.exports = (sequelize, DataTypes) => {
  const Feedbacks = sequelize.define('Feedbacks', {
    commentsId: DataTypes.INTEGER,
    usersId: DataTypes.INTEGER,
    isLike: DataTypes.BOOLEAN
  }, {});
  Feedbacks.associate = function(models) {
    // Comments.belongsTo(models.FGDs, {foreignKey: 'FGDId', as: 'fgd'})
    // Comments.belongsTo(models.Users, {foreignKey: 'userId', as: 'user'})
  };
  return Feedbacks;
};