'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'Categories',
      'groupsId',
      { 
        type: Sequelize.INTEGER 
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Categories', 'groupsId');
  }
};
