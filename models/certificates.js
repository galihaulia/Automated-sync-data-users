'use strict';
module.exports = (sequelize, DataTypes) => {
  const Certificates = sequelize.define(
    'Certificates',
    {
      name: DataTypes.STRING,
      file: DataTypes.STRING,
      logo: DataTypes.STRING,
      templatesId: DataTypes.INTEGER,
      deletedAt: DataTypes.DATE,
    },
    {}
  );
  Certificates.associate = function (models) {
    // Certificates.belongsTo(models.Users, {
    //   foreignKey: 'userId',
    //   as: 'mentor',
    // });
    // Certificates.belongsTo(models.Courses, {
    //   foreignKey: 'courseId',
    //   as: 'course',
    // });
  };
  return Certificates;
};
