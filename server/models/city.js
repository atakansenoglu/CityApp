"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    static associate(models) {}
  }
  City.init(
    {
      cityName: DataTypes.STRING,
      temperature: DataTypes.INTEGER,
      feelsLike: DataTypes.INTEGER,
      longitude: DataTypes.FLOAT,
      latitude: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "City",
    }
  );
  return City;
};
