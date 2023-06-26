/* eslint-disable no-debugger */
import React from 'react';

type ParserProps = {
  actions: any,
  children: string | JSX.Element | JSX.Element[]
};

const MessageParser = ({ children, actions }: ParserProps) => {
  const parse = (message: string) => {
    console.log("USER MESSAGE: ", message);
    if (message) {
      actions.handleHello(message);
    }


    console.log("USER MESSAGE: ", message);
    if (message.includes("forecast")) {
      actions.weatherForecast()
    }

    if (message.includes('dog')) {
      actions.handleDog();
    }

  };


  return (
    <div className='section-response'>
      {React.Children.map(children, (child: any) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })} 
    </div>
  );
};

export default MessageParser;