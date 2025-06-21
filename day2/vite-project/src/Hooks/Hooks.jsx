import React from 'react'
import {Link} from 'react-router-dom'
const Hooks = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
      <Link to='/state'>usestate</Link>
      <Link to='/effect'>useeffect</Link>
      <Link to='/ref'>useref</Link>
    </div>
  )
}

export default Hooks