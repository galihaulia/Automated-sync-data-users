'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'Banners',
      'file',
      { 
        type: Sequelize.STRING
      }
    );
    await queryInterface.addColumn(
      'Banners',
      'isEmbed',
      { 
        type: Sequelize.BOOLEAN,
        defaultValue: false 
      }
    );
    await queryInterface.addColumn(
      'Banners',
      'url',
      { 
        type: Sequelize.STRING
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Banners', 'file');
    await queryInterface.removeColumn('Banners', 'isEmbed');
    await queryInterface.removeColumn('Banners', 'url');
  }
};
