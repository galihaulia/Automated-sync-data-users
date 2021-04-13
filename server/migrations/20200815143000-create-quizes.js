'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Quizes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
      materialsId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Materials',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      grade: {
        type: Sequelize.DECIMAL,
        defaultValue: 0
      },
      timer: {
        type: Sequelize.TIME
      },
      timerMode: {
        type: Sequelize.STRING
      },
      point: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      isRandom: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      questionLimit: {
        type: Sequelize.INTEGER
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
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Quizes');
  }
};