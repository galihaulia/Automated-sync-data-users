'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('SubmissionFiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      materialSubmissionsId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'MaterialSubmissions',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      // materialsId: {
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: 'Materials',
      //     key: 'id'
      //   },
      //   onUpdate: 'cascade',
      //   onDelete: 'cascade'
      // },
      file: {
        type: Sequelize.STRING
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('SubmissionFiles');
  }
};