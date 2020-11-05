import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import About from './About';
import Projects from './Projects';
import KeyHandler from '../components/KeyHandler';
import '../styles/Home.css';

const Home = () => {
  const [submitted, setSubmitted] = useState(false);
  const [sound, setSound] = useState(true);

  const handleKeyPressed = () => {
    setSubmitted(true)
  }
  const handleSound = () => {
    setSound(!sound);
  }
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path='/about' render={() =>
            <About handleSound={handleSound} sound={sound}/>
          }>
          </Route>
          <Route path='/projects' render={() =>
            <Projects handleSound={handleSound} sound={sound}/>
          }>
          </Route>
          <Route path='/' render={() =>
            submitted ?
              <Redirect to="/about" />
              :
              <>
                {sound ?
                  <section className="section__sound">
                    <img onClick={handleSound} className="sound" src="https://res.cloudinary.com/diggrhtle/image/upload/v1604580007/persona%20page/volume_1_u4ri1u.png" alt="soundOn"/>
                    <iframe title="homeAudio" src="https://res.cloudinary.com/diggrhtle/video/upload/v1604576120/persona%20page/title_ig0xau.mp3" type="audio/mp3" allow="autoplay" className="audioFrame" />
                    <audio autoPlay>
                      <source src="https://res.cloudinary.com/diggrhtle/video/upload/v1604576120/persona%20page/title_ig0xau.mp3" type="audio/mpeg" />
                    Your browser does not support the audio tag.
                </audio>
                  </ section>
                  :
                  <section className="section__sound">
                  <img onClick={handleSound} className="sound" src="https://res.cloudinary.com/diggrhtle/image/upload/v1604584806/persona%20page/mute-button_vtvguw.png" alt="soundOff" />
                  </section >
                }
                <main>
                <h1 id="homeTitle">Jorge's Adventure</h1>
{                <Link className="enter" to='/about' style={{ textDecoration: 'none' }}>
                  <p className="options">Press Enter to Start</p>
                  <KeyHandler handleKeyPressed={handleKeyPressed} />
                </Link>}
              </ main>
              </>
          }
          >
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default Home;