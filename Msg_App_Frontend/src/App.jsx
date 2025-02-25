import { useState } from 'react'
import './App.css'
import MessageArea from './components/ChatArea'
import ChatArea from './components/ChatArea'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <text>helo</text>
        <MessageArea/>
        {/* <ChatArea/> */}
      </div>
        
    </>
  )
}

export default App
