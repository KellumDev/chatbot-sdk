/* eslint-disable @typescript-eslint/no-empty-function */
// MyContext.js
import React from 'react';
import { CurrentWeatherStateType, ForecastWeatherStateType } from 'src/interfaces/interfaces';

const currentWeatherState: CurrentWeatherStateType = {
    weatherQuery: null
}; 

const forecastWeatherState: ForecastWeatherStateType = {
    city: "",
    list: []
}; 

const defaultValue = { 
    currentWeatherState: currentWeatherState,
    updateCurrentWeatherState: (args: any)=>{}, 
    forecastWeatherState: forecastWeatherState, 
    updateForecastWeatherState: (args: any)=>{}
}

const WeatherContext = React.createContext(defaultValue);

export default WeatherContext;
