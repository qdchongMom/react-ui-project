import React from "react";
import "./DisplayWeather.css";
import Paper from "@material-ui/core/paper";
import ReactAnimatedWeather from "react-animated-weather";

const DisplayWeather = ({ data }) => {
  const { general } = data.items[0];

  const renderIcon = (forecast) => {
    switch (forecast) {
      case "Thundery Showers":
        return "RAIN";
      case "Light Rain":
        return "RAIN";
      default:
        return "CLEAR_DAY";
    }
  };
  return (
    <div className="wrapper">
      <Paper className="paper">
        <h1>Singapore</h1>
        <h3>{general.forecast}</h3>
        <ReactAnimatedWeather
          icon={renderIcon(general.forecast)}
          size={60}
          animate={true}
        />
        <h3 className="fontcss">Min Temp: {general.temperature.low}° C</h3>
        <div className="element"></div>
      </Paper>
    </div>
  );
};

export default DisplayWeather;
