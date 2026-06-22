'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('employees', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
      last_name: { type: Sequelize.STRING, allowNull: false },
      first_name: { type: Sequelize.STRING, allowNull: false },
      employee_code: { type: Sequelize.STRING, allowNull: false, unique: true },
      email: { type: Sequelize.STRING, allowNull: false, unique: true },
      phone: { type: Sequelize.STRING },
      gender: { type: Sequelize.STRING },
      date_of_birth: { type: Sequelize.DATEONLY },
      start_date: { type: Sequelize.DATEONLY },
      address: { type: Sequelize.STRING },
      document_url: { type: Sequelize.STRING, allowNull: true },
      status: { type: Sequelize.BOOLEAN, defaultValue: true },

      // LIÊN KẾT KHÓA NGOẠI (Foreign Keys)
      level_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'levels', key: 'id' },
        onUpdate: 'CASCADE', onDelete: 'RESTRICT'
      },
      role_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'roles', key: 'id' },
        onUpdate: 'CASCADE', onDelete: 'RESTRICT'
      },
      department_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'departments', key: 'id' },
        onUpdate: 'CASCADE', onDelete: 'RESTRICT'
      },

      created_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') },
      updated_at: { type: Sequelize.DATE, defaultValue: Sequelize.fn('NOW') }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('employees');
  }
};