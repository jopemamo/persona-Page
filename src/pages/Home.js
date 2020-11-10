import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import KeyHandler from '../components/KeyHandler';
import Sound from '../components/Sound';
import audio from '../audios/title.mp3'
import '../styles/Home.css';

const Home = ({ submitted, sound, handleSound, handleKeyPressed }) => {

  const audioLink = "https://res.cloudinary.com/diggrhtle/video/upload/v1604576120/persona%20page/title_ig0xau.mp3";

  return (
    <>
      {submitted ?
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
    </>
  )
}

export default Home;