import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'

import ActionProvider from '../util/ActionProvider';
import config from "../util/config";
import MessageParser from '../util/MessageParser';
import '../style/tailwind.css';

import WeatherContext from '../contextApi/WeatherContext';
import { useState } from 'react';
import { CurrentWeatherStateType, ForecastWeatherStateType } from 'src/interfaces/interfaces';


function App() {

  const [currentWeatherState, setcurrentWeatherState] = useState<CurrentWeatherStateType>({
    weatherQuery: null
  });

  const [forecastWeatherState, setforecastWeatherState] = useState<ForecastWeatherStateType>({
   city: '', 
   list: []
  });

  const updateCurrentWeatherState = (newValue) => {
    setcurrentWeatherState(newValue);
  };

  const updateForecastWeatherState = (newValue) => {
    setforecastWeatherState(newValue);
  };

  const value = {
    currentWeatherState, updateCurrentWeatherState, forecastWeatherState, updateForecastWeatherState
  };

  return (
    <div className="App">
      <header className="App-header">
        <WeatherContext.Provider value={value}>
          <Chatbot messageParser={MessageParser} actionProvider={ActionProvider} config={config} />
        </WeatherContext.Provider>
      </header>


    </div>
  );
}

export default App;
