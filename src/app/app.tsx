import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'

import ActionProvider from '../util/ActionProvider';
import config from "../util/config";
import MessageParser from '../util/MessageParser';

import WeatherContext from '../contextApi/WeatherContext';
import { useState } from 'react';

function App() { 
  
  const [currentWeatherState, setcurrentWeatherState] = useState({});

  const updateCurrentWeatherState = (newValue) => {
    setcurrentWeatherState(newValue);
  }; 

  return (
    <div className="App">
      <header className="App-header">
        <WeatherContext.Provider value={{currentWeatherState, updateCurrentWeatherState }}>
          <Chatbot messageParser={MessageParser} actionProvider={ActionProvider} config={config} />
        </WeatherContext.Provider>
      </header>
    </div>
  );
}

export default App;
