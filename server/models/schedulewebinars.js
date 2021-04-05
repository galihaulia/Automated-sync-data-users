'use strict';
module.exports = (sequelize, DataTypes) => {
    const ScheduleWebinars = sequelize.define(
        'ScheduleWebinars', {
            schedulesId: DataTypes.INTEGER,
            coursesId: DataTypes.INTEGER,
            usersId: DataTypes.INTEGER
        }, 
        {
            timestamps: false
        }
    );
    ScheduleWebinars.associate = function (models) {
        ScheduleWebinars.belongsTo(models.Courses, {foreignKey: 'coursesId', as: 'course'})
        ScheduleWebinars.belongsTo(models.Users, {foreignKey: 'usersId', as: 'user'})
    };
    return ScheduleWebinars;
};
