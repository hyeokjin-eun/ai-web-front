import { useState } from 'react'
import Login from './components/Login/Login'
import Chat from './components/Chat/Chat'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  return isLoggedIn ? <Chat /> : <Login onLogin={handleLogin} />
}

export default App
