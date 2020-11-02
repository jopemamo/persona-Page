import React, { useState } from 'react';
import {  Link, Redirect } from 'react-router-dom';

import KeyHandler from '../components/KeyHandler'

const About = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleKeyPressed = () => {
    setSubmitted(true)
  }
  if (submitted === true) {
    return (
      <Redirect to="/projects" />
    )
  } else {
  return (
    <>
      <p>This is about</p>
      <Link className="enter" to='/projects' style={{ textDecoration: 'none' }}>
        <p >Press Enter to Start</p>
        <KeyHandler handleKeyPressed={handleKeyPressed} />
      </Link>
    </>
  )
  }
}

export default About;