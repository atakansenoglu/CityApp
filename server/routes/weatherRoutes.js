module.exports = (app) => {
  const cities = require("../controllers/cityController");
  const weatherApi = require("../services/weatherService");
  const locationApi = require("../services/locationService");

  var router = require("express").Router();

  router.get("/cities", cities.findAllCities);
  router.delete("/deleteallcities", cities.deleteAllCities);

  router.get("/weather", weatherApi.getWeather);
  router.get("/location", locationApi.getLocation);

  router.post("/createcity", cities.createCity);

  app.use("/api", router);
};
