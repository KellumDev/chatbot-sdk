// interfaces.ts
interface CurrentWeather {
    weather: {any};
    main: {any};
    visibility: {any}; 
    wind: {any}; 
    clouds: {any}; 
    timezone: number; 
    name: string; 
  }
  
  interface ForecastWeather {
    id: number;
    title: string;
    content: string;
    author: CurrentWeather;
  }
  
  // Export the interfaces
  export { CurrentWeather, ForecastWeather }; 
/* 
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
"name": "New York" */