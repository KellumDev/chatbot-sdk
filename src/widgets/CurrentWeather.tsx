import React from 'react';
 

// Weather icon SVG components
const SunIcon = () => <svg>...</svg>;
const CloudIcon = () => <svg>...</svg>;

const CurrentWeatherWidget = (props) => {
  
     

  return (
    <div className="weather-widget">
      <div className="weather-icon"></div>
      <div className="weather-description">
        <h3>Weather Description</h3>
        <p>Rain, Snow, Windy, Humidity, UV Index</p>
      </div>
    </div>
  );
};

export default CurrentWeatherWidget;
