import React from "react";
import "./App.css";
import SelectLocation from "./SelectLocation";
import LocalTime from "./LocalTime";
import WeatherInfo from "./WeatherInfo";
import ForecastInfo from "./ForecastInfo";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="locationInfoBlock">
          <SelectLocation />
          <LocalTime />
        </div>
        <div className="weatherInfoBlock">
          <WeatherInfo />
          <ForecastInfo />
        </div>
      </div>
    </div>
  );
}

export default App;
