'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Results', {
      progressMaterialsId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'ProgressMaterials',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      questionsId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Questions',
          key: 'id'
        },
        onUpdate: 'cascade'
      },
      answersId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Answers',
          key: 'id'
        },
        onUpdate: 'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Results');
  }
};