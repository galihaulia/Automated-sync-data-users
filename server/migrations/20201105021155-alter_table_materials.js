'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'Materials',
      'startDate',
      { 
        type: Sequelize.DATE,
      }
    );
    await queryInterface.addColumn(
      'Materials',
      'endDate',
      { 
        type: Sequelize.DATE,
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Materials', 'startDate');
    await queryInterface.removeColumn('Materials', 'endDate');
  }
};
