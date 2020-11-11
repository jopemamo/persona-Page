import React from 'react'
import { Link } from 'react-router-dom';
import audio from '../audios/select_screen.mp3';
import Timeline from '../components/Timeline';
import NavBar from '../components/NavBar';
import '../styles/Projects.css'



const Projects = ({ handleSound, sound }) => {

  const audioLink = "https://res.cloudinary.com/diggrhtle/video/upload/v1604578026/persona%20page/select_screen_z8yyms.mp3"

  return (
    < div className="projectsPage">
      <NavBar sound={sound} audio={audio} audioLink={audioLink} handleSound={handleSound}/>
      <div className="projects__container ">
        <header>
        <h1 className="title" id="stagesTitle" >Completed Stages</h1>
        </header>
        <Timeline />
        <a href="#stagesTitle" style={{ textDecoration: 'none' }}>
          <p id="projects__back"className="options">Back to Top</p>
        </a>
      </div>
    </div>
  )
}

export default Projects;