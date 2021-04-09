'use strict';
module.exports = (sequelize, DataTypes) => {
  const Courses = sequelize.define(
    'Courses', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    cover: DataTypes.STRING,
    tags: DataTypes.STRING,
    isMandatory: DataTypes.BOOLEAN,
    courseLevelsId: DataTypes.INTEGER,
    categoriesId: DataTypes.INTEGER,
    stdCompetenciesId: DataTypes.INTEGER,
    verifier: DataTypes.INTEGER,
    statusesId: DataTypes.INTEGER,
    createdBy: DataTypes.INTEGER,
    groupsId: DataTypes.INTEGER,
    createdByCompanyId: DataTypes.INTEGER,
    ownedBy: DataTypes.INTEGER,
    isForSale: DataTypes.BOOLEAN,
    minParticipants: DataTypes.INTEGER,
    maxParticipants: DataTypes.INTEGER,
    availableTime: DataTypes.STRING,
    commissioning: DataTypes.INTEGER,
    commissioningUnit: DataTypes.STRING,
    commissioningDesc: DataTypes.STRING,
    commissioningStart: DataTypes.DATE,
    commissioningEnd: DataTypes.DATE,
    deletedAt: DataTypes.DATE
  }, {}
  );
  Courses.associate = function (models) {
    Courses.belongsTo(models.CourseLevels, { foreignKey : 'courseLevelsId', as: 'level'} )
    Courses.belongsTo(models.Categories, { foreignKey : 'categoriesId', as: 'category'} )
    Courses.belongsTo(models.Statuses, { foreignKey : 'statusesId', as: 'status'} )
    Courses.belongsTo(models.Statuses, { foreignKey : 'commissioning', as: 'statuscommission'} )
    Courses.belongsTo(models.StdCompetencies, { foreignKey : 'stdCompetenciesId', as: 'stdcomp'} )
    Courses.belongsTo(models.Users, { foreignKey : 'verifier', as: 'verification'} )
    Courses.belongsTo(models.Users, { foreignKey : 'createdBy', as: 'author'} )
    Courses.belongsTo(models.Companies, { foreignKey : 'ownedBy', as: 'buyerByCompany'} )
    Courses.belongsTo(models.Companies, { foreignKey : 'createdByCompanyId', as: 'authorByCompany'} )
    Courses.belongsTo(models.Companies, { foreignKey : 'ownedBy', as: 'externalCompany'})
    Courses.belongsTo(models.Groups, { foreignKey : 'groupsId', as: 'groups'} )
    Courses.hasMany(models.CourseStatusLogs, { foreignKey : 'coursesId', as: 'statuslogs'} )
    Courses.hasMany(models.CourseVariants, { foreignKey : 'coursesId', as: 'variants'} )
    Courses.hasMany(models.Chapters, { foreignKey : 'coursesId'})
    Courses.hasMany(models.CourseTransactions, { foreignKey : 'coursesId'})
    Courses.hasOne(models.CourseTransactions, { foreignKey : 'coursePurchasedId', as: 'coursePurchased'})
    Courses.hasMany(models.Enrolls, { foreignKey: 'coursesId', as: 'enrolls' })
    Courses.belongsToMany(models.Syllabuses, { through: 'SylCourses', foreignKey: 'coursesId', as: 'syllabuses' });
    Courses.hasMany(models.FGDs, { foreignKey: 'coursesId', as: 'fgds' })
    Courses.hasMany(models.Chapters, { foreignKey: 'coursesId', as : 'chapters'})
  };
  return Courses;
};