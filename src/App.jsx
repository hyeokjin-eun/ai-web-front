import { useState } from 'react'
import './styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <header className="app-header">
        <h1>AI Web Front</h1>
        <p>React + Vite 프로젝트가 성공적으로 설정되었습니다!</p>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </header>
    </div>
  )
}

export default App
