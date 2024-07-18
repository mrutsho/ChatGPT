import { useState } from 'react';
import Chat from '../components/Chat';

function ChatRoom() {
  const [messages, setMessages] = useState([]);

  const sendMessage = (message) => {
    setMessages([...messages, message]);
  };

  return (
    <div>
      <Chat messages={messages} sendMessage={sendMessage} />
    </div>
  );
}

export default ChatRoom;
