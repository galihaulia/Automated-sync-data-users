'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('StdCompMaps', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      stdCompetenciesId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'StdCompetencies',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
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
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('StdCompMaps');
  }
};