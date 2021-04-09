'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CompetencyAreas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      competenciesId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Competencies',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      departmentsId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Departments',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      jobTitlesId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'JobTitles',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      levelsId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Levels',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('CompetencyAreas');
  }
};