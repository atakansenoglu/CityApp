const axios = require("axios");
const models = require("../models");
const weatherService = require("../services/weatherService");
const locationService = require("../services/locationService");

exports.getWeather = (req, res) => {
  // Validate request
  if (!req.body.cityName) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  weatherService.getWeather(req, res);
};

exports.getLocation = (req, res) => {
  // Validate request
  if (!req.body.cityName) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  locationService.getLocation(req, res);
};

exports.createCity = (req, res) => {
  const cityName = req.body.cityName;

  const weatherToken = "32629d68142dcfb05d0017352c3f4907";
  const weatherBaseURL = "http://api.weatherstack.com/current?access_key=";
  const weatherURL = weatherBaseURL + weatherToken + "&query=" + cityName;

  const locationToken =
    "pk.eyJ1IjoiYXRha2Fuc2Vub2dsdSIsImEiOiJjbDBwMjJ6aXUxcjVjM2JxdGJ1czcwN2J3In0.xqy4c8AW-uEsxNHFa8LemA";
  const locationBaseURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/";
  const locationURL =
    locationBaseURL + cityName + ".json?access_token=" + locationToken;

  const getData = async () => {
    try {
      const [weatherResponse, locationResponse] = await axios.all([
        axios.get(weatherURL),
        axios.get(locationURL),
      ]);

      const city = {
        cityName: cityName,
        temperature: weatherResponse.data.current.temperature,
        feelsLike: weatherResponse.data.current.feelslike,
        longitude: locationResponse.data.features[0].center[0],
        latitude: locationResponse.data.features[0].center[1],
      };

      models.City.create(city);
      res.json(city);
    } catch (error) {
      console.log(error);
    }
  };
  getData();
};

exports.findAllCities = (req, res) => {
  const cityName = req.query.cityName;
  var condition = cityName
    ? { cityName: { [Op.like]: `%${cityName}%` } }
    : null;
  models.City.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving cities.",
      });
    });
};

exports.deleteAllCities = (req, res) => {
  models.City.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Cities were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all cities.",
      });
    });
};
