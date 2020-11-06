import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import KeyHandler from '../components/KeyHandler';
import '../styles/About.css';

const About = ({ handleSound, sound }) => {
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
            {sound ?
              <section className="section__sound">
                <img onClick={handleSound} className="sound" src="https://res.cloudinary.com/diggrhtle/image/upload/v1604580007/persona%20page/volume_1_u4ri1u.png" alt="soundOn" />
                <iframe title="aboutAudio" src="https://res.cloudinary.com/diggrhtle/video/upload/v1604578021/persona%20page/overworld_rtg6c4.mp3" type="audio/mp3" allow="autoplay" className="audioFrame" />
                <audio autoPlay>
                  <source src="https://res.cloudinary.com/diggrhtle/video/upload/v1604578021/persona%20page/overworld_rtg6c4.mp3" type="audio/mpeg" />
                      Your browser does not support the audio tag.
                </audio>
              </section>
              :
              <section className="section__sound">
                <img onClick={handleSound} className="sound" src="https://res.cloudinary.com/diggrhtle/image/upload/v1604584806/persona%20page/mute-button_vtvguw.png" alt="soundOff" />
              </ section>
            }
            <main>
              <h1>Jorge's Adventure</h1>
              <img src="https://res.cloudinary.com/diggrhtle/image/upload/v1604332718/persona%20page/Jorge_Moreno_2_z9iur1.jpg" alt="The Hero" />
              <div className="text">
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
              </div>

              <Link to='/projects' style={{ textDecoration: 'none' }}>
                <p className="options" >Press Enter to Continue</p>
                <KeyHandler handleKeyPressed={handleKeyPressed} />
              </Link>
            </main>
          </>}
    </>
  )
}

export default About;