
import React from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";


const App = () => {

   const [weather] = useState({
    temperature: 25,
    conditions: "Sunny"
  });
  
  return (
  <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>Weather Display App</h1>
      {/* Pass weather data as props */}
      <WeatherDisplay weather={weather} />
    </div>
  )
}

export default App
