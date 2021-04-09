'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('SylCourses', {
      syllabusesId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Syllabuses',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      coursesId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Courses',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('SylCourses');
  }
};