import { useState } from 'react';
import styles from './Chat.module.css';

function Sidebar({ isHidden, onClose }) {
  const [activeChat, setActiveChat] = useState(0);

  const chats = [
    "Today's Chat",
    "Docker 설정 문의",
    "API 연동 이슈",
    "Database 최적화",
    "CI/CD 파이프라인"
  ];

  const handleChatClick = (index) => {
    setActiveChat(index);
    // Mobile: close sidebar when chat is selected
    if (window.innerWidth <= 768) {
      onClose();
    }
  };

  return (
    <div className={`${styles.sidebar} ${isHidden ? styles.hidden : ''}`}>
      <div className={styles.sidebarHeader}>
        <div className={styles.sidebarTitle}>CONVERSATIONS</div>
        <button className={styles.newChatBtn}>+ New Chat</button>
      </div>
      <div className={styles.chatList}>
        {chats.map((chat, index) => (
          <div
            key={index}
            className={`${styles.chatItem} ${activeChat === index ? styles.active : ''}`}
            onClick={() => handleChatClick(index)}
          >
            {chat}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
