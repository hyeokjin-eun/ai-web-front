import styles from './Chat.module.css';

function Header({ onMenuToggle }) {
  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <button className={styles.menuToggle} onClick={onMenuToggle}>
          ☰
        </button>
        <div className={styles.logo}>⚡ Comet</div>
        <div className={styles.status}>
          <div className={styles.statusDot}></div>
          <span>Connected</span>
        </div>
      </div>
      <div className={styles.headerRight}>
        <button className={styles.headerBtn}>
          <span>⚙ </span>Settings
        </button>
        <button className={styles.headerBtn}>
          <span>📋 </span>History
        </button>
      </div>
    </div>
  );
}

export default Header;
