'use strict';
module.exports = (sequelize, DataTypes) => {
  const Privileges = sequelize.define('Privileges', {
    name: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN,
    deletedAt: DataTypes.DATE
  }, {});
  Privileges.associate = function(models) {
    Privileges.hasMany(models.PrivilegeUsers, { foreignKey: 'privilegesId', as: 'privilegeusers' });
    Privileges.belongsToMany(models.Users, { through: 'PrivilegeUsers', foreignKey: 'privilegesId', as: 'users' });
  };
  return Privileges;
};