'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define('Comments', {
    FGDsId: DataTypes.INTEGER,
    usersId: DataTypes.INTEGER,
    comment: DataTypes.TEXT,
    statusesId: DataTypes.INTEGER,
    file: DataTypes.STRING
  }, {});
  Comments.associate = function(models) {
    Comments.hasMany(models.Feedbacks, { foreignKey: 'commentsId', as: 'feedbacks' })
    Comments.belongsTo(models.Users, { foreignKey: 'usersId', as: 'creator' })
  };
  return Comments;
};