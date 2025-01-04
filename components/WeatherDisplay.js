import React from "react";

const WeatherDisplay = ({ weather }) => {
  const { temperature, conditions } = weather;

  const tempStyle = {
    color: temperature > 20 ? "red" : "blue",
    fontWeight: "bold",
  };

  return (
    <div>
      <p style={tempStyle}>Temperature: {temperature}</p>
      <p>Conditions: {conditions}</p>
    </div>
  );
};

export default WeatherDisplay;
