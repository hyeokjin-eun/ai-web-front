import { useState } from 'react';
import MessageList from './MessageList';
import InputArea from './InputArea';
import styles from './Chat.module.css';

function ChatArea() {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (text) => {
    // Add user message
    setMessages((prev) => [...prev, { type: 'user', text }]);

    // Simulate assistant response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          type: 'assistant',
          text: '네, 도움을 드리겠습니다. 구체적으로 어떤 부분에서 도움이 필요하신가요?'
        }
      ]);
    }, 1000);
  };

  return (
    <div className={styles.chatArea}>
      <MessageList messages={messages} />
      <InputArea onSendMessage={handleSendMessage} />
    </div>
  );
}

export default ChatArea;
