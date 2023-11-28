import React from "react";
import "./App.css";
import SelectLocation from "./SelectLocation";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="locationInfoBlock">
          <SelectLocation />
        </div>
      </div>
    </div>
  );
}

export default App;
