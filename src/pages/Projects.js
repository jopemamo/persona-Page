import React from 'react'
import audio from '../audios/select_screen.mp3';
import Timeline from '../components/Timeline';
import TimelineSmall from '../components/TimelineSmall';
import TimelineXSmall from '../components/TimelineXSmall';
import NavBar from '../components/NavBar';
import Hidden from '@material-ui/core/Hidden';
import '../styles/Projects.css'



const Projects = ({ handleSound, sound }) => {

  const audioLink = "https://res.cloudinary.com/diggrhtle/video/upload/v1604578026/persona%20page/select_screen_z8yyms.mp3"

  return (
    < div className="projectsPage">
      <NavBar sound={sound} audio={audio} audioLink={audioLink} handleSound={handleSound}/>
      <div className="projects__container ">
        <header className="projects__header">
        <h1 className="title" id="stagesTitle" >Completed Stages</h1>
        </header>
        <Hidden smDown>
        <Timeline />
        </Hidden>
        <Hidden mdUp xsDown>
        <TimelineSmall />
        </Hidden>
        <Hidden smUp>
        <TimelineXSmall />
        </Hidden>
        <a href="#stagesTitle" style={{ textDecoration: 'none' }}>
          <p id="projects__back" className="options">Back to Top</p>
        </a>
      </div>
    </div>
  )
}

export default Projects;