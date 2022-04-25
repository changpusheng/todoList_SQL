'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  queryInterface(`Todo`,`nickname`,{
    type:Sequelize.STRING,
    allowNull:false
  })
  },

  down: (queryInterface, Sequelize) => {
  queryInterface.removeColumn(`Todo`,`nickname`)
  }
};
