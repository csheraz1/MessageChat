import { useState } from 'react'
import ChatArea from './components/ChatArea'
import './App.css'
import './login.css'
import Login from './components/login'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/main' element={<ChatArea/>}/>
    </Routes>
      
      
    </>
  )
}

export default App
