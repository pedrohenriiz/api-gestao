'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('sprintStatus', 'sprintId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'sprints',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('sprintStatuses', 'sprintId');
  },
};
