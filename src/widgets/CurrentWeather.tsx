import React, { useEffect, useContext } from 'react';

  
// Weather icon SVG components
const SunIcon = () => <svg>...</svg>;
const CloudIcon = () => <svg>...</svg>;

 

const CurrentWeatherWidget = (props) => {
    useEffect(() => {
        // This effect will run after every render
         
      });

  return (
    <div className="weather-widget text-red-600">
      <div className="weather-icon"></div>
      <div className="weather-description">
        <h3>Weather Description</h3>
        <p>Rain, Snow, Windy, Humidity, UV Index</p>
      </div>
    </div>
  );
};

export default CurrentWeatherWidget;
