import React, {useState} from 'react';
import { Link, Redirect } from 'react-router-dom';
import KeyHandler from '../components/KeyHandler';
import audio from '../audios/title.mp3';
import NavBar from '../components/NavBar';
import '../styles/Home.css';

const Home = ({ sound, handleSound }) => {

  const [submitted, setSubmitted] = useState(false);

  const audioLink = "https://res.cloudinary.com/diggrhtle/video/upload/v1604576120/persona%20page/title_ig0xau.mp3";

  const handleKeyPressed = () => {
    setSubmitted(true)
  }

  return (
    <>
      {submitted ?
        <Redirect to="/about" />
        :
        <>
          <NavBar sound={sound} audio={audio} audioLink={audioLink} handleSound={handleSound}/>
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