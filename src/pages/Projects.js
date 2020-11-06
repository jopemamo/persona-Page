import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import BidraSammen from '../components/BidraSammen';
import WMW from '../components/WMW';
import JSToDo from '../components/JSToDo';
import LoanCalculator from '../components/LoanCalculator';
import ReactToDo from '../components/ReactToDo';
import '../styles/Projects.css'
/* import Tabulation from '../components/Tabulation'; */

const Projects = ({ handleSound, sound }) => {
  const defaultState = {
    bidraSammen: false,
    WMW: false,
    loanCalculator: false,
    reactToDo: false,
    jSToDo: false,
  };

  const [projects, setProjects] = useState(defaultState);


  const handleClick = (e) => {
    setProjects({ ...defaultState, [e.target.id]: true })
  };

  return (
    <>
      {sound ?
        <>
          <img onClick={handleSound} className="sound" src="https://res.cloudinary.com/diggrhtle/image/upload/v1604580007/persona%20page/volume_1_u4ri1u.png" alt="soundOn" />
          <audio autoPlay>
            <source src="https://res.cloudinary.com/diggrhtle/video/upload/v1604578026/persona%20page/select_screen_z8yyms.mp3" type="audio/mpeg" />
          Your browser does not support the audio tag.
          </audio>
        </>
        :
        <img onClick={handleSound} className="sound" src="https://res.cloudinary.com/diggrhtle/image/upload/v1604584806/persona%20page/mute-button_vtvguw.png" alt="soundOff" />
      }
      <h1>Quests Completed</h1>

      <p id="bidraSammen" onClick={handleClick}>Bidra Sammen</p>
      {projects.bidraSammen ? <BidraSammen /> : null}
      <p id="WMW" onClick={handleClick}>Which Movie is Worse?</p>
      {projects.WMW ? <WMW /> : null}
      <p id="loanCalculator" onClick={handleClick}>Loan Calculator</p>
      {projects.loanCalculator ? <LoanCalculator /> : null}
      <p id="reactToDo" onClick={handleClick}>React ToDo App</p>
      {projects.reactToDo ? <ReactToDo /> : null}
      <p id="jSToDo" onClick={handleClick}>Vanilla JavaScript ToDo App</p>
      {projects.jSToDo ? <JSToDo /> : null}
      <Link to='/about' style={{ textDecoration: 'none' }}>
        <p className="options">Back to About</p>
      </Link>
    </>
    /*     <Tabulation /> */
  )
}

export default Projects;