'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('SylCompetencies', {
      competenciesId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Competencies',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      syllabusesId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Syllabuses',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('SylCompetencies');
  }
};