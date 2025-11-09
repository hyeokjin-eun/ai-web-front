# AI Web Front

React + Vite 기반의 프론트엔드 프로젝트

## 기술 스택

- **React 18.3** - UI 라이브러리
- **Vite 6.0** - 빌드 도구 및 개발 서버
- **React Router 6.28** - 라우팅
- **ESLint** - 코드 품질 관리
- **Prettier** - 코드 포맷팅

## 시작하기

### 의존성 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

개발 서버는 `http://localhost:3000`에서 실행됩니다.

### 빌드

```bash
npm run build
```

### 프로덕션 미리보기

```bash
npm run preview
```

### 코드 품질

#### Linting

```bash
npm run lint
```

#### 포맷팅

```bash
npm run format
```

## 프로젝트 구조

```
ai-web-front/
├── public/          # 정적 파일
├── src/
│   ├── assets/      # 이미지, 폰트 등
│   ├── components/  # 재사용 가능한 컴포넌트
│   ├── hooks/       # 커스텀 React 훅
│   ├── pages/       # 페이지 컴포넌트
│   ├── styles/      # CSS 파일
│   ├── utils/       # 유틸리티 함수
│   ├── App.jsx      # 메인 App 컴포넌트
│   └── main.jsx     # 앱 진입점
├── index.html
├── package.json
└── vite.config.js
```

## 개발 가이드

이 프로젝트는 다음 코딩 규칙을 따릅니다:

- ESLint 규칙 준수
- Prettier를 사용한 일관된 코드 포맷팅
- React Hooks 사용
- 함수형 컴포넌트 우선
