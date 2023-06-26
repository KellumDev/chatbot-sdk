import React, { useEffect, useContext } from 'react';
import WeatherContext from 'src/contextApi/WeatherContext';

const CurrentWeatherWidget = (props) => { 

 
    const {currentWeatherState} = useContext(WeatherContext);
 
    useEffect(() => {
        // This effect will run after every render
        console.log("WeatherContext: ",currentWeatherState)
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
