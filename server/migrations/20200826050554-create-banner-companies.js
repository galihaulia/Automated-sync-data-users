'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BannerCompanies', {
      bannersId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Banners',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      companiesId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Companies',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('BannerCompanies');
  }
};