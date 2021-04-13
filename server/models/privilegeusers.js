'use strict';
module.exports = (sequelize, DataTypes) => {
  const PrivilegeUsers = sequelize.define('PrivilegeUsers', {
    usersId: DataTypes.INTEGER,
    privilegesId: DataTypes.INTEGER
  },
  {
    timestamps: false
  });
  PrivilegeUsers.associate = function(models) {
    PrivilegeUsers.belongsTo(models.Users, { foreignKey: 'usersId', as: 'user' })
    PrivilegeUsers.belongsTo(models.Privileges, { foreignKey: 'privilegesId', as: 'privilege' })
  };
  PrivilegeUsers.removeAttribute('id');
  return PrivilegeUsers;
};