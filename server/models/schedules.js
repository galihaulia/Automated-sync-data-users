'use strict';
module.exports = (sequelize, DataTypes) => {
    const Schedules = sequelize.define(
        'Schedules', {
            name: DataTypes.STRING,
            description: DataTypes.TEXT,
            type: DataTypes.STRING,
            createdBy: DataTypes.INTEGER,
            categoriesId: DataTypes.INTEGER,
            startDate: DataTypes.DATE,
            endDate: DataTypes.DATE,
            startTime: DataTypes.TIME,
            endTime: DataTypes.TIME,
            isAllDay: DataTypes.BOOLEAN,
            link: DataTypes.TEXT,
            organizer: DataTypes.STRING,
            color: DataTypes.STRING,
            deletedAt: DataTypes.DATE,
            trainingType: DataTypes.STRING,
            companyId: DataTypes.INTEGER
        }, 
        {}
    );
    Schedules.associate = function (models) {
        Schedules.belongsTo(models.Categories, { foreignKey: "categoriesId", as: 'category' });
        Schedules.belongsTo(models.Users, { foreignKey: "createdBy", as: 'author' });
        Schedules.hasMany(models.Schedulees, { foreignKey: 'schedulesId', as: 'areas' });
        Schedules.hasMany(models.ScheduleWebinars, { foreignKey: 'schedulesId', as: 'webinars' });
    };
    return Schedules;
};
