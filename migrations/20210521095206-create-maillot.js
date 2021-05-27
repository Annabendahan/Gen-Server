'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Maillots', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      author: {
        type: Sequelize.STRING
      },
      style: {
        type: Sequelize.STRING
      },
      col: {
        type: Sequelize.INTEGER
      },
      bottom: {
        type: Sequelize.INTEGER
      },
      main: {
        type: Sequelize.INTEGER
      },
      leftSleeve: {
        type: Sequelize.INTEGER
      },
      rightSleeve: {
        type: Sequelize.INTEGER
      },
      details: {
        type: Sequelize.INTEGER
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Maillots');
  }
};