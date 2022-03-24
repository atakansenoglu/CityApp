module.exports = app => {
    const cities = require("../controllers/cityController")
    const weatherApi = require("../services/weatherService")
    const locationApi = require("../services/locationService")

    var router = require("express").Router();

    router.get("/cities", cities.findAllCities)
    router.get("/cities/:id", cities.findOne)
    router.delete("/cities", cities.deleteAllCities)

    router.get("/weather/:cityName", weatherApi.getWeather)
    router.get("/location/:cityName", locationApi.getLocation)

    router.post("/city/:cityName", cities.createCity)

    app.use("/api", router)
}

