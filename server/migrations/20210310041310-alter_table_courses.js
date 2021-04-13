'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'Courses',
      'minParticipants',
      { 
        type: Sequelize.STRING
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Courses', 'minParticipants');
  }
};
