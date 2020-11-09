import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import BidraSammen from '../components/BidraSammen';
import WMW from '../components/WMW';
import JSToDo from '../components/JSToDo';
import LoanCalculator from '../components/LoanCalculator';
import ReactToDo from '../components/ReactToDo';
import Persona from '../components/Persona';
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
      <h1>Stages Completed</h1>

      <p id="persona" onClick={handleClick}>Stage 7: Persona Page</p>
      {projects.bidraSammen ? <Persona /> : null}
      <p id="loanCalculator" onClick={handleClick}>Stage 6: Loan Calculator</p>
      {projects.loanCalculator ? <LoanCalculator /> : null}
      <p id="bidraSammen" onClick={handleClick}>Stage 5: Bidra Sammen</p>
      {projects.bidraSammen ? <BidraSammen /> : null}
      <p id="WMW" onClick={handleClick}>Stage 4: Which Movie is Worse?</p>
      {projects.WMW ? <WMW /> : null}
      <p id="reactToDo" onClick={handleClick}>Stage 2: React ToDo App</p>
      {projects.reactToDo ? <ReactToDo /> : null}
      <p id="jSToDo" onClick={handleClick}>Stage 1: Vanilla JavaScript ToDo App</p>
      {projects.jSToDo ? <JSToDo /> : null}
      <Link to='/about' style={{ textDecoration: 'none' }}>
        <p className="options">Back to About</p>
      </Link>
    </>
    /*     <Tabulation /> */
  )
}

export default Projects;