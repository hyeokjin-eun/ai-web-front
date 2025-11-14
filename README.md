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

## Docker

### Docker로 빌드 및 실행

#### Docker Compose 사용 (권장)

```bash
# 빌드 및 실행
docker-compose up --build

# 백그라운드 실행
docker-compose up -d

# 중지
docker-compose down
```

애플리케이션은 `http://localhost:8080`에서 실행됩니다.

#### Docker 직접 사용

```bash
# 이미지 빌드
docker build -t ai-web-front .

# 컨테이너 실행
docker run -d -p 8080:80 --name ai-web-front ai-web-front

# 로그 확인
docker logs ai-web-front

# 컨테이너 중지
docker stop ai-web-front

# 컨테이너 삭제
docker rm ai-web-front
```

### Docker Hub에서 이미지 가져오기

```bash
# 이미지 Pull
docker pull gurwls2399/github-action-test:latest

# 실행
docker run -d -p 8080:80 gurwls2399/github-action-test:latest
```

### GitHub Actions를 통한 자동 배포

이 프로젝트는 GitHub Actions를 사용하여 Docker Hub의 `gurwls2399/github-action-test` 저장소에 자동으로 이미지를 푸시합니다.

#### 사전 준비

GitHub Repository의 Settings > Secrets and variables > Actions에서 다음 시크릿을 추가하세요:

- `DOCKER_USERNAME`: Docker Hub 사용자명 (gurwls2399)
- `DOCKER_PASSWORD`: Docker Hub 액세스 토큰 또는 비밀번호

#### 트리거 조건

- `main` 또는 `develop` 브랜치에 push할 때
- `v*` 태그를 push할 때
- Pull Request가 생성되거나 업데이트될 때 (빌드만 수행, 푸시 안함)
- 수동 실행 (workflow_dispatch)

#### 이미지 태그

- `latest`: main 브랜치의 최신 커밋
- `main`: main 브랜치
- `develop`: develop 브랜치
- `v1.0.0`, `v1.0`, `v1`: 버전 태그
- `sha-abc1234`: 커밋 SHA
- `pr-123`: Pull Request 번호

## 개발 가이드

이 프로젝트는 다음 코딩 규칙을 따릅니다:

- ESLint 규칙 준수
- Prettier를 사용한 일관된 코드 포맷팅
- React Hooks 사용
- 함수형 컴포넌트 우선
