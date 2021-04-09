'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ProgressChapters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      enrollsId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Enrolls',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      chaptersId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Chapters',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      isComplete: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
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
    await queryInterface.dropTable('ProgressChapters');
  }
};