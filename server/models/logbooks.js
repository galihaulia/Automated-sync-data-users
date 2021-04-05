'use strict';
module.exports = (sequelize, DataTypes) => {
  const LogBooks = sequelize.define(
    'LogBooks',
    {
      coursesId: DataTypes.INTEGER,
      statusesId: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      isRead: DataTypes.BOOLEAN,
      comment: DataTypes.TEXT,
      createdBy: DataTypes.INTEGER
    },
    {}
  );
  LogBooks.associate = function (models) {
    LogBooks.belongsTo(models.Statuses, { foreignKey: 'statusesId', as: 'status' })
    LogBooks.belongsTo(models.Users, { foreignKey: 'createdBy', as: 'user'})
  };
  return LogBooks;
};
