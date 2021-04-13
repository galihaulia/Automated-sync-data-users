'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ProgressMaterials', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      progressChaptersId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'ProgressChapters',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      materialsId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Materials',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      isRead: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      score: {
        type: Sequelize.DECIMAL
      },
      completionTime: {
        type: Sequelize.TIME
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ProgressMaterials');
  }
};