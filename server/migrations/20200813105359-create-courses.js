'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Courses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      cover: {
        type: Sequelize.STRING
      },
      tags: {
        type: Sequelize.STRING
      },
      isMandatory: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      courseLevelsId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'CourseLevels',
          key: 'id'
        },
        onUpdate: 'cascade',
      },
      categoriesId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Categories',
          key: 'id'
        },
        onUpdate: 'cascade',
      },
      stdCompetenciesId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'StdCompetencies',
          key: 'id'
        },
        onUpdate: 'cascade',
      },
      verifier: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
        onUpdate: 'cascade',
      },
      createdBy: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
        onUpdate: 'cascade',
      },
      statusesId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Statuses',
          key: 'id'
        },
        onUpdate: 'cascade',
      },
      deletedAt: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Courses');
  }
};