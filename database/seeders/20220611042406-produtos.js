'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('produtos', [
      {
        nome: 'Martelo',
        quantidade: 20
      },
      {
        nome: 'Escudo',
        quantidade: 10
      },
      {
        nome: 'Traje',
        quantidade: 5
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('produtos', null, {});
  }
};
