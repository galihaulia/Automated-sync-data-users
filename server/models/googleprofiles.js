'use strict';
module.exports = (sequelize, DataTypes) => {
  const GoogleProfiles = sequelize.define('GoogleProfiles', {
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    photo: DataTypes.STRING,
    email: DataTypes.STRING,
    verifiedEmail: DataTypes.BOOLEAN,
    location: DataTypes.STRING
  }, {});
  GoogleProfiles.associate = function(models) {
    // associations can be defined here
  };
  return GoogleProfiles;
};