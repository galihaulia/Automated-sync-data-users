'use strict';
module.exports = (sequelize, DataTypes) => {
  const Enrolls = sequelize.define(
    'Enrolls',
    {
      usersId: DataTypes.INTEGER,
      coursesId: DataTypes.INTEGER,
      rate: DataTypes.DECIMAL,
      isRead: DataTypes.BOOLEAN,
      statusesId: DataTypes.INTEGER
    },
    {}
  );
  Enrolls.associate = function (models) {
    Enrolls.hasMany(models.EnrollActivities, { foreignKey: 'enrollsId', as: 'activities' });
    Enrolls.hasMany(models.ProgressChapters, { foreignKey: 'enrollsId', as: 'chapters' });
    // Enrolls.hasMany(models.ProgressMaterials, { foreignKey: 'enrollsId' });
    Enrolls.belongsTo(models.Users, { foreignKey: 'usersId', as: 'user' })
    Enrolls.belongsTo(models.Courses, { foreignKey: 'coursesId', as: 'course' })
    Enrolls.belongsTo(models.Statuses, { foreignKey: 'statusesId', as: 'status' })
  };
  return Enrolls;
};
