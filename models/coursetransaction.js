'use strict';
module.exports = (sequelize, DataTypes) => {
  const CourseTransactions = sequelize.define(
    'CourseTransactions', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    coursesId: DataTypes.INTEGER,
    cover: DataTypes.STRING,
    tags: DataTypes.STRING,
    isMandatory: DataTypes.BOOLEAN,
    courseLevel: DataTypes.STRING,
    category: DataTypes.STRING,
    stdCompetencyTitle: DataTypes.STRING,
    stdCompetencyFile: DataTypes.STRING,
    verifier: DataTypes.INTEGER,
    createdBy: DataTypes.INTEGER,
    statusesId: DataTypes.INTEGER,
    reasonReject: DataTypes.STRING,
    variants: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    information: DataTypes.STRING,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    price: DataTypes.INTEGER,
    cancelReason: DataTypes.STRING,
    revision: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    deletedAt: DataTypes.DATE,
    usersId: DataTypes.INTEGER,
    companiesId: DataTypes.INTEGER,
    email: DataTypes.STRING,
    coursePurchasedId: DataTypes.INTEGER,
    participant: DataTypes.INTEGER
  }, {}
  );
  CourseTransactions.associate = function (models) {
    CourseTransactions.belongsTo(models.Courses, { foreignKey: 'coursesId' });
    CourseTransactions.belongsTo(models.Courses, { foreignKey: 'coursePurchasedId', as: 'coursePurchased' });
    CourseTransactions.belongsTo(models.Statuses, { foreignKey : 'statusesId', as: 'status'} )
    CourseTransactions.belongsTo(models.Users, { foreignKey : 'verifier', as: 'verificationTransaction' } )
    CourseTransactions.belongsTo(models.Users, { foreignKey : 'createdBy', as: 'authorTransaction'} )
    CourseTransactions.belongsTo(models.Users, { foreignKey: 'usersId', as: 'user' })
    CourseTransactions.belongsTo(models.Companies, { foreignKey: 'companiesId', as: 'company' })
    CourseTransactions.hasMany(models.RevisionAttachments, { foreignKey: 'courseTransactionsId', as: 'files' });
    CourseTransactions.hasMany(models.CourseTransactionsVariants, { foreignKey: 'courseTransactionsId', as: 'tVariants' });
  };
  return CourseTransactions;
};