import { useState } from 'react'
import ChatArea from './components/ChatArea'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <ChatArea/>
      
      <h1>Vite + React</h1>
      
     
    </>
  )
}

export default App
