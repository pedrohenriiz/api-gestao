'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('usersTeams', 'PRIMARY');

    await queryInterface.addColumn('usersTeams', 'id', {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('usersTeams', 'id');

    await queryInterface.addConstraint('usersTeams', {
      fields: ['userId', 'teamId'],
      type: 'primary key',
      name: 'PRIMARY',
    });
  },
};
