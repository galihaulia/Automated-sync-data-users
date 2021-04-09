'use strict';
module.exports = (sequelize, DataTypes) => {
  const EnrollActivities = sequelize.define(
    'EnrollActivities',
    {
      enrollsId: DataTypes.INTEGER,
      statusesId: DataTypes.INTEGER
    },
    {}
  );
  EnrollActivities.associate = function (models) {
    EnrollActivities.belongsTo(models.Statuses, { foreignKey: 'statusesId', as: 'status' })
  };
  EnrollActivities.removeAttribute("id")
  return EnrollActivities;
};
