"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Cities", [
      {
        cityName: "istanbul",
        temperature: 10,
        feelsLike: 8,
        longitude: 30,
        latitude: 35,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Cities", null, {});
  },
};
