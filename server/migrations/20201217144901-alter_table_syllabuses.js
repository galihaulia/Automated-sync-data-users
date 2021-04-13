'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'Syllabuses',
      'createdBy',
      { 
        type: Sequelize.INTEGER
      }
    );

    await queryInterface.addConstraint('Syllabuses', {
      fields: ['createdBy'],
      type: 'foreign key',
      name: 'Syllabuses_createdBy_fkey',
      references: {
          table: 'Users',
          field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
  })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Syllabuses', 'createdBy');
    await queryInterface.removeConstraint('Syllabuses', 'Syllabuses_createdBy_fkey')
  }
};
