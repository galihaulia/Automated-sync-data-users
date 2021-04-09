'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('QuizQuestions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quizesId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Quizes',
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
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      point: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      timer: {
        type: Sequelize.TIME
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('QuizQuestions');
  }
};