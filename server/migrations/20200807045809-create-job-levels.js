'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('JobLevels', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      departmentsId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Departments',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      jobTitlesId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'JobTitles',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      levelsId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Levels',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('JobLevels');
  }
};