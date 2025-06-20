import React from 'react'
import Child from './components/child'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'
import Hooks from './Hooks/Hooks'
import State from './Hooks/state'
import Effect from './Hooks/Effect'
import Login from './components/login'
import { Routes, Route,Link } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Hooks" element={<Hooks />} />
        <Route path="/State" element={<State />} />
        <Route path="/Effect" element={<Effect />} />
      </Routes>
    </>
  )
}

export default App
