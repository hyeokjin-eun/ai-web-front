import { useState, useRef, useEffect } from 'react';
import styles from './Chat.module.css';

function InputArea({ onSendMessage }) {
  const [message, setMessage] = useState('');
  const textareaRef = useRef(null);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      const newHeight = Math.min(textareaRef.current.scrollHeight, 200);
      textareaRef.current.style.height = newHeight + 'px';
    }
  }, [message]);

  const handleSubmit = () => {
    const trimmedMessage = message.trim();
    if (!trimmedMessage) return;

    onSendMessage(trimmedMessage);
    setMessage('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className={styles.inputArea}>
      <div className={styles.inputWrapper}>
        <textarea
          ref={textareaRef}
          className={styles.inputField}
          placeholder="메시지를 입력하세요... (Shift + Enter로 줄바꿈)"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          rows={1}
        />
        <button
          className={styles.sendBtn}
          onClick={handleSubmit}
          disabled={!message.trim()}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default InputArea;
