'use strict';
module.exports = (sequelize, DataTypes) => {
  const SylCompetencies = sequelize.define('SylCompetencies', {
    competenciesId: DataTypes.INTEGER,
    syllabusesId: DataTypes.INTEGER,
  }, {
    timestamps: false
  });

  SylCompetencies.associate = function (models) {
    
  };
  // SylCompetencies.removeAttribute('id')
  return SylCompetencies;
};