// interfaces.ts
interface CurrentWeather {
    id: number;
    name: string;
    email: string;
  }
  
  interface ForecastWeather {
    id: number;
    title: string;
    content: string;
    author: CurrentWeather;
  }
  
  // Export the interfaces
  export { CurrentWeather, ForecastWeather };