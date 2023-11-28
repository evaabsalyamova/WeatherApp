import React from "react";
import "./App.css";
import SelectLocation from "./SelectLocation";
import LocalTime from "./LocalTime";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="locationInfoBlock">
          <SelectLocation />
          <LocalTime />
        </div>
      </div>
    </div>
  );
}

export default App;
