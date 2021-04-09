'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    'Users',
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      idNumber: DataTypes.STRING,
      idToken: DataTypes.STRING,
      startDate: DataTypes.DATE,
      endDate: DataTypes.DATE,
      typesId: DataTypes.INTEGER,
      statusesId: DataTypes.INTEGER,
      companiesId: DataTypes.INTEGER,
      isActive: DataTypes.INTEGER,
      playerId: DataTypes.STRING,
      deletedAt: DataTypes.DATE
    },
    {}
  );
  Users.associate = function (models) {
    // Users.hasMany(models.Courses, { foreignKey: 'userId', as: 'courses' });
    // Users.hasMany(models.Certificates, {
    //   foreignKey: 'userId',
    //   as: 'certificates',
    // });
    // Users.hasMany(models.FGDs, {
    //   foreignKey: 'userId',
    //   as: 'fgds',
    // });
    // Users.hasMany(models.Comments, {
    //   foreignKey: 'userId',
    //   as: 'comments',
    // });
    // Users.hasMany(models.Reports, {
    //   foreignKey: 'userId',
    //   as: 'reports',
    // });

    //V1
    Users.hasOne(models.Profiles, { foreignKey: 'usersId', as: 'profile' });
    Users.hasOne(models.JobLevelUsers, { foreignKey: 'usersId', as: 'joblevelusers' });
    Users.hasMany(models.PrivilegeUsers, { foreignKey: 'usersId', as: 'privilegeusers' });
    Users.belongsTo(models.Companies, { foreignKey: 'companiesId', as: 'company' });
    Users.hasMany(models.Courses, { foreignKey: 'verifier', as: 'verifications' });
    Users.hasMany(models.Courses, { foreignKey: 'createdBy', as: 'authors' });
    Users.hasMany(models.Courses, { foreignKey: 'ownedBy', as: 'buyers' });
    Users.hasMany(models.CourseTransactions, { foreignKey: 'verifier', as: 'verificationTransactions' });
    Users.hasMany(models.CourseTransactions, { foreignKey: 'createdBy', as: 'authorTransactions' });
    Users.hasMany(models.Enrolls, { foreignKey: 'usersId', as: 'enrolls' });
    Users.hasMany(models.FGDs, { foreignKey: 'usersId', as: 'fgds' });
    Users.belongsToMany(models.Privileges, { through: 'PrivilegeUsers', foreignKey: 'usersId', as: 'roles' });
  };
  return Users;
};
