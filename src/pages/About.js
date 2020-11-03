import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';

import KeyHandler from '../components/KeyHandler'

const About = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleKeyPressed = () => {
    setSubmitted(true)
  }
  useEffect(()=> {
    typeWriter();
  },[])

  let i = 0;
  const txt = 'After walking several paths and living different experiences, our Hero was ready for the definitive adventure.';
  const speed = 100;

  const typeWriter = () => {
    if (i < txt.length) {
      document.getElementById("text").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  return (
    <main>
      {
        submitted ?
          <Redirect to="/projects" />
          :
          <>
            <h1>Jorge's Adventure</h1>
            <img src="https://res.cloudinary.com/diggrhtle/image/upload/v1604332718/persona%20page/Jorge_Moreno_2_z9iur1.jpg"></img>
            <p id="text"></p>
            <Link to='/projects' style={{ textDecoration: 'none' }}>
              <p className="options" >Press Enter to Continue</p>
              <KeyHandler handleKeyPressed={handleKeyPressed} />
            </Link>
          </>}
    </ main>
  )
}

export default About;