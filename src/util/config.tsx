
import { createChatBotMessage } from 'react-chatbot-kit';

//import  CustomWidget  from '../widgets/CustomWidget';  
import CurrentWeatherWidget from 'src/widgets/CurrentWeather';
import DogPicture from '../widgets/DogPicture';

 
import IWidget from 'react-chatbot-kit/build/src/interfaces/IWidget';
const options = {
  /* loading: false,
  message: "this is my first" */
}

const config = {
  botName: "Weather Bot",
  initialMessages: [createChatBotMessage(`Welcome to our Shopping Chatbot Assistant! \n\n

  
  Feel free to ask me about product recommendations, pricing details, current deals, or anything else related to your shopping needs. \n\n
  I'll do my best to provide you with quick and accurate information. \n\n
 `, options)],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  }, 
  state: {
    gist: '',
    infoBox: '',
  },
   
  widgets: [
    {
      widgetName: 'dogPicture',
      widgetFunc: (props: IWidget) => <div><DogPicture {...props} /></div>,
      props: {},
      mapStateToProps: ['gist'],
    }, 
    {
      widgetName: 'currentWeatherWidget',
      widgetFunc: (props: IWidget) => <div><CurrentWeatherWidget {...props} /></div>,
      props: {},
      mapStateToProps: ['gist'],
    },
  ],
};

export default config;