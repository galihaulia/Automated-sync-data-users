'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'Schedules',
      'organizer',
      { 
        type: Sequelize.TEXT
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Schedules', 'organizer');
  }
};
