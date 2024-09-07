import React from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    temp: 24.44,
    tempMin: 25.34,
    tempMax: 31.45,
    humidity: 50,
    feelsLike: 26.48,
    weather: "haze",
  });
  let updateInfo=(result)=>{
    setWeatherInfo(result)
  }
  return (
    <div>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}

export default WeatherApp;
