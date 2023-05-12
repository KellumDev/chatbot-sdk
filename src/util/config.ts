import { createChatBotMessage } from 'react-chatbot-kit';

const options: unknown = { 
    /* loading: false,
    message: "this is my first" */
}
const config = {
  botName: "LearningBot",
  initialMessages: [createChatBotMessage("Hi, I'm here to help. What do you want to learn?", options)],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
};

export default config;