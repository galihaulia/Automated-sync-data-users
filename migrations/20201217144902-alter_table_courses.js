'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'Courses',
      'groupsId',
      { 
        type: Sequelize.INTEGER
      }
    );
    await queryInterface.addColumn(
      'Courses',
      'createdByCompanyId',
      { 
        type: Sequelize.INTEGER
      }
    );
    await queryInterface.addColumn(
      'Courses',
      'ownedBy',
      { 
        type: Sequelize.INTEGER
      }
    );
    await queryInterface.addColumn(
      'Courses',
      'isForSale',
      { 
        type: Sequelize.BOOLEAN,
        defaultValue: false 
      }
    );
    await queryInterface.addColumn(
      'Courses',
      'maxParticipants',
      { 
        type: Sequelize.INTEGER
      }
    );
    await queryInterface.addColumn(
      'Courses',
      'availableTime',
      { 
        type: Sequelize.STRING
      }
    );
    await queryInterface.addColumn(
      'Courses',
      'commissioning',
      { 
        type: Sequelize.INTEGER
      }
    );
    await queryInterface.addColumn(
      'Courses',
      'commissioningUnit',
      { 
        type: Sequelize.STRING
      }
    );
    await queryInterface.addColumn(
      'Courses',
      'commissioningDesc',
      { 
        type: Sequelize.STRING
      }
    );
    await queryInterface.addColumn(
      'Courses',
      'commissioningStart',
      { 
        type: Sequelize.DATE
      }
    );
    await queryInterface.addColumn(
      'Courses',
      'commissioningEnd',
      { 
        type: Sequelize.DATE
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Courses', 'groupsId');
    await queryInterface.removeColumn('Courses', 'createdByCompanyId');
    await queryInterface.removeColumn('Courses', 'ownedBy');
    await queryInterface.removeColumn('Courses', 'isForSale');
    await queryInterface.removeColumn('Courses', 'maxParticipants');
    await queryInterface.removeColumn('Courses', 'availableTime');
    await queryInterface.removeColumn('Courses', 'commissioning');
    await queryInterface.removeColumn('Courses', 'commissioningUnit');
    await queryInterface.removeColumn('Courses', 'commissioningDesc');
    await queryInterface.removeColumn('Courses', 'commissioningStart');
    await queryInterface.removeColumn('Courses', 'commissioningEnd');
  }
};
