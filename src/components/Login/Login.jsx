import { useState } from 'react';
import styles from './Login.module.css';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 화면만 구현, 실제 로그인 로직 없음
    if (email && password) {
      onLogin();
    }
  };

  const handleSocialLogin = (provider) => {
    // 소셜 로그인 화면만 구현
    console.log(`${provider} login clicked`);
    onLogin();
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <div className={styles.logoSection}>
          <div className={styles.logo}>⚡</div>
          <div className={styles.logoText}>Comet</div>
          <div className={styles.subtitle}>
            터미널 스타일의 AI 어시스턴트
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="email">
              이메일
            </label>
            <input
              type="email"
              id="email"
              className={styles.input}
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="password">
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              className={styles.input}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className={styles.forgotPassword}>
            <a href="#" className={styles.forgotLink}>
              비밀번호를 잊으셨나요?
            </a>
          </div>

          <button type="submit" className={styles.loginBtn}>
            로그인
          </button>
        </form>

        <div className={styles.divider}>또는</div>

        <div className={styles.socialLogin}>
          <button
            type="button"
            className={styles.socialBtn}
            onClick={() => handleSocialLogin('Google')}
          >
            <span>G</span>
            <span>Google</span>
          </button>
          <button
            type="button"
            className={styles.socialBtn}
            onClick={() => handleSocialLogin('GitHub')}
          >
            <span>⚡</span>
            <span>GitHub</span>
          </button>
        </div>

        <div className={styles.signup}>
          계정이 없으신가요?{' '}
          <a href="#" className={styles.signupLink}>
            회원가입
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
