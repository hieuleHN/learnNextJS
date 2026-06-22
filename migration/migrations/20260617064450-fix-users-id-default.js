'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
    `);

    await queryInterface.changeColumn('users', 'id', {
      type: Sequelize.UUID,
      allowNull: false,
      defaultValue: Sequelize.literal('uuid_generate_v4()')
    });
  },

  async down() {}
};
