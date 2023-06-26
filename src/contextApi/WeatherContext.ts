/* eslint-disable @typescript-eslint/no-empty-function */
// MyContext.js
import React from 'react';

const defaultValue = { 
    currentWeatherState: {},
    updateCurrentWeatherState: (args: any)=>{}
}
const WeatherContext = React.createContext(defaultValue);

export default WeatherContext;
