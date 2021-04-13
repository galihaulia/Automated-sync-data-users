'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ScheduleWebinars', {
      id : {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      schedulesId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Schedules',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      coursesId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Courses',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      usersId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ScheduleWebinars');
  }
};
