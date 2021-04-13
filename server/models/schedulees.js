'use strict';
module.exports = (sequelize, DataTypes) => {
    const Schedulees = sequelize.define(
        'Schedulees', {
            schedulesId: DataTypes.INTEGER,
            departmentsId: DataTypes.INTEGER,
            jobTitlesId: DataTypes.INTEGER,
            levelsId: DataTypes.INTEGER,
            usersId: DataTypes.INTEGER
        },
        {
            timestamps: false
        }
    );
    Schedulees.associate = function (models) {
        Schedulees.belongsTo(models.Schedules, {foreignKey: 'schedulesId', as: 'schedule'})
        Schedulees.belongsTo(models.Departments, {foreignKey: 'departmentsId', as: 'department'})
        Schedulees.belongsTo(models.JobTitles, {foreignKey: 'jobTitlesId', as: 'job'})
        Schedulees.belongsTo(models.Levels, {foreignKey: 'levelsId', as: 'level'})
        Schedulees.belongsTo(models.Users, {foreignKey: 'usersId', as: 'user'})
    };
    return Schedulees;
};