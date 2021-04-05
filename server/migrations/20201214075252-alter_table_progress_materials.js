'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'ProgressMaterials',
      'comment',
      { 
        type: Sequelize.TEXT
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('ProgressMaterials', 'comment');
  }
};
