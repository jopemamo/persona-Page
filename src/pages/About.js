import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import KeyHandler from '../components/KeyHandler'

const About = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleKeyPressed = () => {
    setSubmitted(true)
  }

  return (
    <main>
      {
        submitted ?
          <Redirect to="/projects" />
          :
          <>
            <h1>Jorge's Adventure</h1>
            <img src="https://res.cloudinary.com/diggrhtle/image/upload/v1604332718/persona%20page/Jorge_Moreno_2_z9iur1.jpg" alt="The Hero"></img>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString('After walking several paths and living different experiences, our Hero was ready for the definitive adventure.')
                  .start();
              }}
              options={{
                cursor: '',
                autoStart: true,
                wrapperClassName: 'text',
              }}
            />
            <Link to='/projects' style={{ textDecoration: 'none' }}>
              <p className="options" >Press Enter to Continue</p>
              <KeyHandler handleKeyPressed={handleKeyPressed} />
            </Link>
          </>}
    </ main>
  )
}

export default About;