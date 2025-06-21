import React from 'react'
import About from './About'

const Contact = ({name,phone}) => {
  return (
    <div>Contact {name} {phone}
    <About name={name} phone={phone} />
    </div>
  )
}

export default Contact