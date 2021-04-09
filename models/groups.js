module.exports = (sequelize, DataTypes) => {
  const Groups = sequelize.define('Groups', {
    type: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    type: DataTypes.STRING,
    companiesId: DataTypes.INTEGER,
    isActive: DataTypes.BOOLEAN
  }, {});
  Groups.associate = function(models) {
  };
  return Groups;
};