import axios from 'axios';
import React, { useContext } from 'react';
import WeatherContext from 'src/contextApi/WeatherContext';

const baseURL = "http://localhost:5000/api/intent/send-intent?querytext=hello";
type ActionProps = {
  createChatBotMessage: string | any,// <string>, 
  setState: any,
  children: string | JSX.Element | JSX.Element[] //| () => JSX.Element
};

const ActionProvider = ({ createChatBotMessage, setState, children }: ActionProps) => {

  const { updateCurrentWeatherState, updateForecastWeatherState } = useContext(WeatherContext);

  const handleHello = async (input: string) => {
    const result = await axios.get(`http://localhost:3333/api/intent/send-intent?querytext=${input}`).then((response) => {
      return response.data.fulfillment;
    });

    console.log("RESULTS: ", result)

    if (result && result.text && result.weatherQuery && result.intent === 'GetWeather') {

      updateCurrentWeatherState(result.weatherQuery);

      const botMessage = createChatBotMessage(
        result.text,
        {
          widget: 'currentWeatherWidget'
        }
      );

      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));

    } else if (result.weatherQuery && result.intent === 'GetWeatherForecast') {

      updateForecastWeatherState(result.weatherQuery);
      console.log("FORECAST RESULTS: ", result.weatherQuery)
      const botMessage = createChatBotMessage(
        result.text,
        {
          widget: 'currentWeatherWidget'
        }
      )

      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));

    } else {
      const botMessage = createChatBotMessage(result.text);
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    }
  };


  return (
    <div>
      {React.Children.map(children, (child: any) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;