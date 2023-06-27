// interfaces.ts
interface CurrentWeatherObject {
  weather?: { any };
  main?: { any };
  visibility?: { any };
  wind?: { any };
  clouds?: { any };
  timezone?: number;
  name?: string;
}

interface ForecastListObject {
  dt?: number;
  main?: { any };
  weather?: [];
  clouds?: { any };
  wind?: { any },
  visibility?: number,
  pop?: number,
  rain?: { any },
  sys?: {any},
  dt_txt?: string
}

interface ForecastWeatherStateType {
  city: string; 
  list: ForecastListObject[];
}

interface CurrentWeatherStateType {
  weatherQuery: CurrentWeatherObject;
}


// Export the interfaces
export { CurrentWeatherStateType, ForecastWeatherStateType };
