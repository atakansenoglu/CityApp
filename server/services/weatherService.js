const http = require("http");

exports.getWeather = (req, res) => {
  const cityName = req.body.cityName;
  const weatherToken = "32629d68142dcfb05d0017352c3f4907";
  const weatherBaseURL = "http://api.weatherstack.com/current?access_key=";
  const weatherURL = weatherBaseURL + weatherToken + "&query=" + cityName;
  console.log(weatherURL);

  http.get(weatherURL, (response) => {
    response.on("data", (data) => {
      const weatherData = JSON.parse(data);

      const temp = weatherData.current.temperature;
      const feelsLike = weatherData.current.feelslike;

      var weatherInfo = {
        cityName: cityName,
        temp: temp,
        feelsLike: feelsLike,
      };

      res.json(weatherInfo);
    });
  });
};