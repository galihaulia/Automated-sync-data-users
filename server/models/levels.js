'use strict';
module.exports = (sequelize, DataTypes) => {
  const Levels = sequelize.define(
    'Levels',
    {
      name: DataTypes.STRING,
      isActive: DataTypes.BOOLEAN,
      deletedAt: DataTypes.DATE,
    },
    {}
  );
  Levels.associate = function (models) {
    Levels.hasMany(models.JobLevels, { foreignKey: 'levelsId', as: 'joblevels' });
    Levels.hasMany(models.JobLevelUsers, { foreignKey: 'levelsId', as: 'joblevelusers' });
  };
  return Levels;
};
