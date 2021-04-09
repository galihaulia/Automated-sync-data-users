'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('CourseTransactions',{
        fields: ['usersId'],
        type: 'FOREIGN KEY',
        references: {
            table: 'Users',
            field: 'id'
        },
        onUpdate: 'cascade'
    })
    await queryInterface.addConstraint('CourseTransactions', {
        fields: ['companiesId'],
        type: 'FOREIGN KEY',
        references: {
            table: 'Companies',
            field: 'id'
        },
        onUpdate: 'cascade'
    })
  },
};
