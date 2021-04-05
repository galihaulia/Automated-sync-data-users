'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'Schedules',
      'trainingType',
      { 
        type: Sequelize.STRING,
        
      }
    );
    await queryInterface.addColumn(
        'Schedules',
        'companyId',
        { 
          type: Sequelize.INTEGER
        }
      );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Schedules', 'trainingType');
    await queryInterface.removeColumn('Schedules', 'companyId');
  }
};
