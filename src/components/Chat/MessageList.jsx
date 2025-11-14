import { useEffect, useRef } from 'react';
import styles from './Chat.module.css';

function MessageList({ messages }) {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  if (messages.length === 0) {
    return (
      <div className={styles.messages}>
        <div className={styles.welcome}>
          <div className={styles.welcomeIcon}>⚡</div>
          <div className={styles.welcomeTitle}>Claude Code Chat</div>
          <div className={styles.welcomeSubtitle}>
            터미널 스타일의 AI 어시스턴트입니다.<br />
            코드 작성, 디버깅, 기술 상담까지 모든 것을 도와드립니다.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.messages}>
      {messages.map((message, index) => (
        <div key={index} className={`${styles.message} ${message.type}`}>
          <div className={styles.messageAvatar}>
            {message.type === 'user' ? 'U' : 'C'}
          </div>
          <div className={styles.messageContent}>
            {message.text}
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default MessageList;
