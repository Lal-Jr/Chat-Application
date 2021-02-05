import { ChatEngine } from 'react-chat-engine';

import ChatFeed from "./components/ChatFeed.component.jsx";

import './App.css';

const App = () => {
    return(
        <ChatEngine
            height="100vh"
            projectID="574f77cf-2e18-40e6-824c-b2fba73d9a45"
            userName="lal-jr"
            userSecret="123123"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}></ChatFeed>}
        />
    );
}

export default App;