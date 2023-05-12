/* eslint-disable no-debugger */
import React from 'react';

debugger
const MessageParser = ({ children, actions }) => {
    const parse = (message) => {
        if (message ==="hello") {
          console.log("USER MESSAGE: ",message);
          actions.handleHello();
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