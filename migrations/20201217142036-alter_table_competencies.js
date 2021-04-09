'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'Competencies',
      'createdBy',
      { 
        type: Sequelize.INTEGER
      }
    );

    await queryInterface.addConstraint('Competencies', {
      fields: ['createdBy'],
      type: 'foreign key',
      name: 'Competencies_createdBy_fkey',
      references: {
          table: 'Users',
          field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
  })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Competencies', 'createdBy');
    await queryInterface.removeConstraint('Competencies', 'Competencies_createdBy_fkey')
  }
};
