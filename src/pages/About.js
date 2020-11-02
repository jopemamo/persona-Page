import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import KeyHandler from '../components/KeyHandler'

const About = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleKeyPressed = () => {
    setSubmitted(true)
  }
  return (
    <>
      {
        submitted ?
          <Redirect to="/projects" />
          :
          <>
            <p>This is about</p>
            <Link  to='/projects' style={{ textDecoration: 'none' }}>
              <p className="options" >Press Enter to Continue</p>
              <KeyHandler handleKeyPressed={handleKeyPressed} />
            </Link>
          </>}
    </>
  )
}

export default About;