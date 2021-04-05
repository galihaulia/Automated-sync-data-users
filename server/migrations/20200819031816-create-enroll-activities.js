'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('EnrollActivities', {
      enrollsId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Enrolls',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      statusesId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Statuses',
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
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('EnrollActivities');
  }
};