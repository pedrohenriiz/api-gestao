'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('status', 'sprintStatusId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'sprintStatus',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('status', 'sprintStatusId');
  },
};
