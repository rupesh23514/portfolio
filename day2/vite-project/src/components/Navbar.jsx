import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css' // Assuming you have a CSS file for styling

 function Navbar() {
  return (
    <navbar>
      <Link to="/home" className="Link">Home</Link>
      <Link to="/about" className="Link">About</Link>
      <Link to="/contact" className="Link">Contact</Link>
        <Link to="/hooks" className="Link">Hooks</Link>
        <Link to="/state" className="Link">State</Link>
        <Link to="/effect" className="Link">Effect</Link> 
        <Link to="/login" className="Link">Login</Link>   
    </navbar>
  );

}

export default Navbar