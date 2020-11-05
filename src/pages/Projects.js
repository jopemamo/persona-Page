import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import BidraSammen from '../components/BidraSammen';
import WMW from '../components/WMW';
import JSToDo from '../components/JSToDo';
import LoanCalculator from '../components/LoanCalculator';
import ReactToDo from '../components/ReactToDo';
/* import Tabulation from '../components/Tabulation'; */

const Projects = () => {
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
      <h1>Quests Completed</h1>
      <iframe title="projectsAudio" src="https://res.cloudinary.com/diggrhtle/video/upload/v1604578026/persona%20page/select_screen_z8yyms.mp3" type="audio/mp3" allow="autoplay" className="audioFrame"></iframe>
      <audio autoPlay>
        <source src="https://res.cloudinary.com/diggrhtle/video/upload/v1604578026/persona%20page/select_screen_z8yyms.mp3" type="audio/mpeg" />
          Your browser does not support the audio tag.
      </audio>
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