'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CourseTransactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      coursesId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Courses',
          key: 'id'
        },
        onUpdate: 'cascade'
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      cover: {
        type: Sequelize.STRING
      },
      tags: {
        type: Sequelize.STRING
      },
      isMandatory: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      courseLevel: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      stdCompetencyTitle: {
        type: Sequelize.STRING
      },
      stdCompetencyFile: {
        type: Sequelize.STRING
      },
      verifier: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
        onUpdate: 'cascade',
      },
      createdBy: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
        onUpdate: 'cascade',
      },
      statusesId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Statuses',
          key: 'id'
        },
        onUpdate: 'cascade',
      },
      reasonReject: {
        type: Sequelize.STRING
      },
      variants: {
        type: Sequelize.STRING
      },
      phoneNumber: {
        type: Sequelize.STRING
      },
      information: {
        type: Sequelize.STRING
      },
      startDate: {
        type: Sequelize.DATE
      },
      endDate: {
        type: Sequelize.DATE
      },
      price: {
        type: Sequelize.INTEGER
      },
      cancelReason: {
        type: Sequelize.STRING
      },
      revision: {
        type: Sequelize.STRING
      },
      deletedAt: {
        type: Sequelize.DATE
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CourseTransactions');
  }
};