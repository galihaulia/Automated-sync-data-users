'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // await queryInterface.addColumn(
    //   'Materials',
    //   'isVerified',
    //   { 
    //     type: Sequelize.BOOLEAN,
    //     defaultValue: false 
    //   }
    // );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Materials', 'isVerified');
  }
};
