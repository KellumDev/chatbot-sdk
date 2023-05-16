/* eslint-disable no-debugger */
import React from 'react';


const MessageParser = ({ children, actions }) => {
    const parse = (message) => {
        
        console.log("USER MESSAGE: ",message);
        if (message.includes("hello")) {
          actions.handleHello(message);
        }
      };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;