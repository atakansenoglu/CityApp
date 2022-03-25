import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  const [cityList, setCityList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/cities").then((response) => {
      setCityList(response.data);
    });
  }, []);

  return (
    <div className="App">
      {cityList.map((value, key) => {
        return (
          <div className="city">
            <div className="cityName"> {value.cityName} </div>
            <div className="body">{"Temperature: " + value.temperature}</div>
            <div className="body">{"Feels Like: " + value.feelsLike}</div>
            <div className="body">{"Longitude: " + value.longitude}</div>
            <div className="body">{"Latitude: " + value.latitude}</div>
            <div className="body">{"Created At: " + value.createdAt}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
