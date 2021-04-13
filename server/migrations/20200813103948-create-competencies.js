'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Competencies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      cover: {
        type: Sequelize.STRING
      },
      statusesId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Statuses',
          key: 'id'
        },
        onUpdate: 'cascade'
      },
      stdCompetenciesId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'StdCompetencies',
          key: 'id'
        },
        onUpdate: 'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Competencies');
  }
};