const https = require("https");

exports.getLocation = (req, res) => {
  const cityName = req.body.cityName;
  const locationToken =
    "pk.eyJ1IjoiYXRha2Fuc2Vub2dsdSIsImEiOiJjbDBwMjJ6aXUxcjVjM2JxdGJ1czcwN2J3In0.xqy4c8AW-uEsxNHFa8LemA";
  const locationBaseURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/";
  const locationURL =
    locationBaseURL + cityName + ".json?access_token=" + locationToken;
  console.log(locationURL);

  https.get(locationURL, (response) => {
    response.on("data", (data) => {
      const mapboxData = JSON.parse(data);

      const longitude = mapboxData.features[0].center[0];
      const latitude = mapboxData.features[0].center[1];

      var locationInfo = {
        cityName: cityName,
        longitude: longitude,
        latitude: latitude,
      };

      res.send(locationInfo);
    });
  });
};
