import axios from 'axios';
import React from 'react';

const baseURL = " http://localhost:3333/api/intent/send-intent?querytext=hello";
type ActionProps = {
  createChatBotMessage: string | any ,// <string>, 
  setState: any, 
  children: string | JSX.Element | JSX.Element[] //| () => JSX.Element
}; 

const ActionProvider = ({ createChatBotMessage, setState, children }: ActionProps) => {
  
    const handleHello = async (input: string) => {
      const result = await axios.get(baseURL).then((response) => {
       return response.data.fulfillment; 
      });
      
      const botMessage = createChatBotMessage(result);
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
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