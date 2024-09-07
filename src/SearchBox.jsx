import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import "./SearchBox.css";
import { useState } from "react";
import Alert from '@mui/material/Alert';
function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [isValid, setIsValid] = useState(true);
  let[isError,setIsError]=useState(false)
  const API_KEY = "91b2b33e1de9b899f3a40a9bd0c9f3be";
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  let getWeatherInfo = async (city) => {
    try {
      let resp = await fetch(API_URL);
      let jsonResp = await resp.json();
  
      let result = {
        city: city,
        temp: jsonResp.main.temp,
        tempMin: jsonResp.main.temp_min,
        tempMax: jsonResp.main.temp_max,
        humidity: jsonResp.main.humidity,
        feelsLike: jsonResp.main.feels_like,
        weather: jsonResp.weather[0].description,
      };
  
      return result;
    } catch (error) {
      throw error
    }

  };
  let handleInputVal = (e) => {
    setCity(e.target.value);
  };
  let handleSubmit = async (e) => {
   try {
    e.preventDefault();
    if (city == "") {
      setIsValid(false);
    } else {
      let newInfo = await getWeatherInfo(city);
      updateInfo(newInfo);
      setCity("");
      setIsValid(true);
    }
   } catch (error) {
    setIsError(true)
   }
   
   
  };
  return (
    <div className="searchBar">
      <h1>Check the Weather in Your City</h1>
      <form action="" onSubmit={handleSubmit}>
        {!isValid && city == "" ? (
          <TextField
            error
            onChange={handleInputVal}
            value={city}
            id="city"
            label="City Name"
            helperText="Please enter a city name"
          />
        ) : (
          <TextField
            onChange={handleInputVal}
            id="city"
            label="City Name"
            variant="outlined"
            value={city}
          />
        )}

        <Button variant="contained" type="submit" className="searchBtn">
          Search
        </Button>
      </form>
      {isError &&(<center><Alert className="error" severity="error">"City not found. Enter a valid one."</Alert></center>)}
    </div>
  );
}

export default SearchBox;
