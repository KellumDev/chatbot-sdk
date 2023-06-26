import React, { useEffect, useContext } from 'react';
import WeatherContext from 'src/contextApi/WeatherContext';

const CurrentWeatherWidget = (props) => { 

    const styles = {
        color: 'blue',
        fontSize: '16px',
        backgroundColor: 'lightgray',
        padding: '10px'
      }; 

    const {currentWeatherState} = useContext(WeatherContext);
 
    useEffect(() => {
        // This effect will run after every render
        console.log("WeatherContext: ",currentWeatherState) 
        
      });


  return (
    <div className="bg-blue-500 text-white rounded-lg p-4 shadow-lg">
      <div className="weather-icon">
        {/* Replace this with your actual weather icon */}
        <img src="/path/to/weather-icon.png" alt="Weather Icon" />
      </div>
      <div className="weather-description mt-4" >
        <h3 className="text-xl font-bold">Weather Description</h3>
        <p className="mt-2">

          Rain, Snow, Windy, Humidity, UV Index
        </p>
         
      </div>
    </div>
  );
};

export default CurrentWeatherWidget; 

/* 
{
    "weather": [
        {
            "id": 701,
            "main": "Mist",
            "description": "mist",
            "icon": "50d"
        }
    ],
    "main": {
        "temp": 298,
        "feels_like": 298.66,
        "temp_min": 295.91,
        "temp_max": 300.75,
        "pressure": 1007,
        "humidity": 81
    },
    "visibility": 10000,
    "wind": {
        "speed": 5.36,
        "deg": 111,
        "gust": 7.6
    },
    "clouds": {
        "all": 0
    },
    "timezone": -14400,
    "name": "New York"
}

*/
