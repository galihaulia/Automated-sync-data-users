'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'CourseTransactions',
      'coursePurchasedId',
      { 
        type: Sequelize.INTEGER
      }
    );
    await queryInterface.addColumn(
      'CourseTransactions',
      'participant',
      { 
        type: Sequelize.INTEGER
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('CourseTransactions', 'coursePurchasedId');
    await queryInterface.removeColumn('CourseTransactions', 'participant');
  }
};
