import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'

import MessageParser from '../util/Messageparser';
import ActionProvider from '../util/ActionProvider';
import config from "src/util/config";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Chatbot messageParser={MessageParser} actionProvider={ActionProvider} config={config} />
      </header>
    </div>
  );
}
 
export default App;
