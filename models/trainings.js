'use strict';
module.exports = (sequelize, DataTypes) => {
  const Trainings = sequelize.define(
    'Trainings',
    {
      type: DataTypes.STRING,
      usersId: DataTypes.INTEGER,
      trainingId: DataTypes.INTEGER,
      score: DataTypes.DECIMAL
    },
    {}
  );
  Trainings.associate = function (models) {
    Trainings.belongsTo(models.Users, { foreignKey: 'usersId', as: 'user' });
  };
  return Trainings;
};
