import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import About from './About';
import Projects from './Projects';
import KeyHandler from '../components/KeyHandler';
import Sound from '../components/Sound';
import audio from '../audios/title.mp3'
import '../styles/Home.css';

const Home = () => {
  const [submitted, setSubmitted] = useState(false);
  const [sound, setSound] = useState(false);

  const audioLink = "https://res.cloudinary.com/diggrhtle/video/upload/v1604576120/persona%20page/title_ig0xau.mp3";

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
            <About handleSound={handleSound} sound={sound} />
          }>
          </Route>
          <Route path='/projects' render={() =>
            <Projects handleSound={handleSound} sound={sound} />
          }>
          </Route>
          <Route path='/' render={() =>
            submitted ?
              <Redirect to="/about" />
              :
              <>
                <Sound sound={sound} audio={audio} audioLink={audioLink} handleSound={handleSound} />
                  <main className="home__container">
                    <h1 id="homeTitle">Jorge's Adventure</h1>
                    {<Link className="enter" to='/about' style={{ textDecoration: 'none' }}>
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