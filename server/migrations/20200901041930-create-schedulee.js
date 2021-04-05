'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Schedulees', {
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
      departmentsId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Departments',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      jobTitlesId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'JobTitles',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      levelsId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Levels',
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
    await queryInterface.dropTable('Schedulees');
  }
};