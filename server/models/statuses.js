'use strict';
module.exports = (sequelize, DataTypes) => {
  const Statuses = sequelize.define(
    'Statuses', {
      statusCode: DataTypes.STRING,
      description: DataTypes.STRING
    }, {}
  );
  Statuses.associate = function (models) {
  };
  return Statuses;
};