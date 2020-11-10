import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import BidraSammen from '../components/BidraSammen';
import WMW from '../components/WMW';
import JSToDo from '../components/JSToDo';
import LoanCalculator from '../components/LoanCalculator';
import ReactToDo from '../components/ReactToDo';
import Persona from '../components/Persona';
import Sound from '../components/Sound';
import audio from '../audios/select_screen.mp3';
import Timeline from '../components/Timeline';
import '../styles/Projects.css'
/* import Tabulation from '../components/Tabulation'; */



const Projects = ({ handleSound, sound }) => {
  const defaultState = {
    persona: false,
    bidraSammen: false,
    WMW: false,
    loanCalculator: false,
    reactToDo: false,
    jSToDo: false,
  };

  const audioLink = "https://res.cloudinary.com/diggrhtle/video/upload/v1604578026/persona%20page/select_screen_z8yyms.mp3"

  const [projects, setProjects] = useState(defaultState);


  const handleClick = (e) => {
    setProjects({ ...defaultState, [e.target.id]: !projects[e.target.id] })
  };



  return (
    < >
      <Sound sound={sound} audio={audio} audioLink={audioLink} handleSound={handleSound} />
      <div className="projects__container ">
        <header>
        <h1 className="title" >Completed Stages</h1>
        </header>
        <Timeline />
        <main className="projects__main">
          <p id="persona" onClick={handleClick}>Stage 7: Persona Page</p>
          {projects.persona ? <Persona /> : null}
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
        </main >
        <Link to='/about' style={{ textDecoration: 'none' }}>
          <p className="options">Back to About</p>
        </Link>
      </div>
    </>
    /*     <Tabulation /> */
  )
}

export default Projects;