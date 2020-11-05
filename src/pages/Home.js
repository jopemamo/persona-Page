import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import About from './About';
import Projects from './Projects';
import KeyHandler from '../components/KeyHandler';

const Home = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleKeyPressed = () => {
    setSubmitted(true)
  }
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path='/about' render={() =>
            <About />
          }>
          </Route>
          <Route path='/projects' render={() =>
            <Projects />
          }>
          </Route>
          <Route path='/' render={() =>
            submitted ?
              <Redirect to="/about" />
              :
              <>
                <h1>Jorge's Adventure</h1>
                <iframe title="homeAudio" src="https://res.cloudinary.com/diggrhtle/video/upload/v1604576120/persona%20page/title_ig0xau.mp3" type="audio/mp3" allow="autoplay" className="audioFrame"></iframe>
                <audio autoPlay>
                  <source src="https://res.cloudinary.com/diggrhtle/video/upload/v1604576120/persona%20page/title_ig0xau.mp3" type="audio/mpeg" />
                    Your browser does not support the audio tag.
                </audio>
                <Link className="enter" to='/about' style={{ textDecoration: 'none' }}>
                  <p className="options">Press Enter to Start</p>
                  <KeyHandler handleKeyPressed={handleKeyPressed} />
                </Link>
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