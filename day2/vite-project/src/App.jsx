import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'
import Hooks from './Hooks/Hooks'
import State from './Hooks/state'
import Effect from './Hooks/Effect'
import Login from './components/Login'
import Child from './components/Child'
// <-- Add this import

import { Routes, Route } from 'react-router-dom' // <-- Removed Link

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact name="RRR" phone="98" />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Hooks" element={<Hooks />} />
        <Route path="/State" element={<State />} />
        <Route path="/Effect" element={<Effect />} />
        <Route path="/Ref" element={<Child />} />
      </Routes>
    </>
  )
}

export default App