'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'Notifications',
      'transactionsId',
      { 
        type: Sequelize.INTEGER
      }
    );
    await queryInterface.addColumn(
      'Notifications',
      'seller',
      { 
        type: Sequelize.INTEGER
      }
    );
    await queryInterface.addColumn(
      'Notifications',
      'buyer',
      { 
        type: Sequelize.INTEGER
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Notifications', 'minParticipants');
    await queryInterface.removeColumn('Notifications', 'seller');
    await queryInterface.removeColumn('Notifications', 'buyer');
  }
};
