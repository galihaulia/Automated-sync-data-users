'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'CourseTransactions',
      'usersId',
      { 
        type: Sequelize.INTEGER,
        
      }
    );
    await queryInterface.addColumn(
        'CourseTransactions',
        'companiesId',
        { 
          type: Sequelize.INTEGER
        }
      );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('CourseTransactions', 'usersId');
    await queryInterface.removeColumn('CourseTransactions', 'companiesId');
  }
};
