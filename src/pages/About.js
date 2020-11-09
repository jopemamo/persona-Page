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
                <h1 className="title" >Jorge's Adventure</h1>
                <img onClick={handleSound} className="sound" src="https://res.cloudinary.com/diggrhtle/image/upload/v1604580007/persona%20page/volume_1_u4ri1u.png" alt="soundOn" />
                <audio autoPlay loop>
                  <source src="https://res.cloudinary.com/diggrhtle/video/upload/v1604578021/persona%20page/overworld_rtg6c4.mp3" type="audio/mpeg" />
                      Your browser does not support the audio tag.
                </audio>
              </section>
              :
              <section className="section__sound">
                <h1 className="title" >Jorge's Adventure</h1>
                <img onClick={handleSound} className="sound" src="https://res.cloudinary.com/diggrhtle/image/upload/v1604584806/persona%20page/mute-button_vtvguw.png" alt="soundOff" />
              </ section>
            }
            <main>
              <section className="aboutImages" >
                <img id="theHero" src="https://res.cloudinary.com/diggrhtle/image/upload/v1604332718/persona%20page/Jorge_Moreno_2_z9iur1.jpg" alt="The Hero" />
                <div className="technologies" >
                  <img className="www"src="https://res.cloudinary.com/diggrhtle/image/upload/v1604658257/persona%20page/world-wide-web_phcum2.png" alt="WWW" />
                  <img className="js"src="https://res.cloudinary.com/diggrhtle/image/upload/v1604658255/persona%20page/javascript_envkmn.svg" alt="JS" />
                  <img className="html"src="https://res.cloudinary.com/diggrhtle/image/upload/v1604658257/persona%20page/html-5_jr6v0h.svg" alt="HTML" />
                  <img className="css"src="https://res.cloudinary.com/diggrhtle/image/upload/v1604658257/persona%20page/css_u5ythd.svg" alt="CSS" />
                  <img className="react"src="https://res.cloudinary.com/diggrhtle/image/upload/v1604658257/persona%20page/react_gcrmku.svg" alt="React" />
                  <img className="node"src="https://res.cloudinary.com/diggrhtle/image/upload/v1604658255/persona%20page/nodejs_jj4abw.svg" alt="Node.js" />
                  <img className="git"src="https://res.cloudinary.com/diggrhtle/image/upload/v1604658255/persona%20page/github_irvkxt.svg" alt="GitHub" />
                  <img className="mongo" src="https://res.cloudinary.com/diggrhtle/image/upload/v1604663704/persona%20page/mongocropped_i0yhuc.png" alt="MongoDB" />
                  <img className="sql"src="https://res.cloudinary.com/diggrhtle/image/upload/v1604658255/persona%20page/mysql_zuhmma.svg" alt="SQL" />
                  <img className="docker"src="https://res.cloudinary.com/diggrhtle/image/upload/v1604658255/persona%20page/docker_lwexoj.svg" alt="Docker" />
                </div>
              </section>
              <div className="text">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString('After walking several paths and living different experiences, our Hero was ready for the definitive adventure.')
                      .start()
                  }}
                  options={{
                    cursor: '',
                    autoStart: true,
                    wrapperClassName: 'text',
                    delay: 50,
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