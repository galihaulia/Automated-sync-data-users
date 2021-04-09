'use strict';
module.exports = (sequelize, DataTypes) => {
  const Notifications = sequelize.define('Notifications', {
    coursesId: DataTypes.INTEGER,
    usersId: DataTypes.INTEGER,
    author: DataTypes.INTEGER,
    verifier: DataTypes.INTEGER,
    competenciesId: DataTypes.INTEGER,
    FGDsId: DataTypes.INTEGER,
    commentsId: DataTypes.INTEGER,
    schedulesId: DataTypes.INTEGER,
    transactionsId: DataTypes.INTEGER,
    buyer: DataTypes.INTEGER,
    seller: DataTypes.INTEGER,
    statusesId: DataTypes.INTEGER,
    type: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    isRead: DataTypes.BOOLEAN,
    link: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {});
  Notifications.associate = function (models) {
  };
  return Notifications;
};