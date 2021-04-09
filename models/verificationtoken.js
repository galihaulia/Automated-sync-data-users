'use strict';
module.exports = (sequelize, DataTypes) => {
  const VerificationToken = sequelize.define('VerificationToken', {
    userId: DataTypes.INTEGER,
    token: DataTypes.STRING,
    type: DataTypes.INTEGER
  }, {});
  VerificationToken.associate = function(models) {
    // associations can be defined here
  };
  return VerificationToken;
};