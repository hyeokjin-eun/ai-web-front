import { useState, useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import ChatArea from './ChatArea';
import styles from './Chat.module.css';

function Chat() {
  const [sidebarHidden, setSidebarHidden] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  // Handle initial sidebar state based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setSidebarHidden(false);
        setShowOverlay(false);
      } else {
        setSidebarHidden(true);
        setShowOverlay(false);
      }
    };

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMenuToggle = () => {
    setSidebarHidden(!sidebarHidden);
    if (window.innerWidth <= 768) {
      setShowOverlay(!showOverlay);
    }
  };

  const handleCloseSidebar = () => {
    if (window.innerWidth <= 768) {
      setSidebarHidden(true);
      setShowOverlay(false);
    }
  };

  const handleOverlayClick = () => {
    setSidebarHidden(true);
    setShowOverlay(false);
  };

  return (
    <div className={styles.chatContainer}>
      <Header onMenuToggle={handleMenuToggle} />
      <div className={styles.container}>
        {/* Sidebar Overlay (for mobile) */}
        <div
          className={`${styles.sidebarOverlay} ${showOverlay ? styles.active : ''}`}
          onClick={handleOverlayClick}
        />

        <Sidebar isHidden={sidebarHidden} onClose={handleCloseSidebar} />
        <ChatArea />
      </div>
    </div>
  );
}

export default Chat;
