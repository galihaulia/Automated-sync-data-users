'use strict';
module.exports = (sequelize, DataTypes) => {
  const Profiles = sequelize.define('Profiles', {
    usersId: DataTypes.INTEGER,
    fullName: DataTypes.STRING,
    born: DataTypes.DATE,
    phoneNumber: DataTypes.STRING,
    gender: DataTypes.STRING,
    email: DataTypes.STRING,
    photo: DataTypes.STRING,
    cover: DataTypes.STRING
  }, {});
  Profiles.associate = function(models) {
    // associations can be defined here
  };
  return Profiles;
};