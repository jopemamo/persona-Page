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
            <h1>Jorge's Adventure</h1>
            <img src="https://res.cloudinary.com/diggrhtle/image/upload/v1604332718/persona%20page/Jorge_Moreno_2_z9iur1.jpg"></img>
            <Link  to='/projects' style={{ textDecoration: 'none' }}>
              <p className="options" >Press Enter to Continue</p>
              <KeyHandler handleKeyPressed={handleKeyPressed} />
            </Link>
          </>}
    </>
  )
}

export default About;