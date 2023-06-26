import axios from 'axios';
import React from 'react';

const baseURL = "http://localhost:5000/api/intent/send-intent?querytext=hello";
type ActionProps = {
  createChatBotMessage: string | any,// <string>, 
  setState: any,
  children: string | JSX.Element | JSX.Element[] //| () => JSX.Element
};

const ActionProvider = ({ createChatBotMessage, setState, children }: ActionProps) => {

  const handleHello = async (input: string) => {
    const result = await axios.get(`http://localhost:3333/api/intent/send-intent?querytext=${input}`).then((response) => {
      return response.data.fulfillment;
    });

    console.log("RESULTS: ",result)

    if (result && result.text && result.weatherQuery) {
      

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