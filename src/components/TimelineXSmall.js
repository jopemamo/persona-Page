import React from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import cv from '../files/CV_Jorge_Moreno.pdf';

const useStyles = makeStyles((theme) => ({

  paper: {
    padding: '26px 16px',
    minWidth: "400px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center"
  },
}));

const TimelineXSmall = () => {

  const classes = useStyles();

  const projects = [
    {
      name: "Persona",
      description: "The page where you are at right now! Done with React.",
      gitHub: "https://github.com/jopemoma/persona-Page",
      modal: false,
    },
    {
      name: "LoanCalculator",
      description: "A Loan Calculator done with React.",
      gitHub: "https://github.com/jopemoma/loan-calculator",
      modal: true,
      link: "https://agitated-shaw-abd9ca.netlify.app/",
    },
    {
      name: "BidraSammen",
      description: "Our Graduation Project at Salt. An App done with React Native.",
      gitHub: "https://github.com/jopemoma/Graduation-Project",
      modal: true,
      link: "https://res.cloudinary.com/diggrhtle/video/upload/v1604416370/persona%20page/Cloud0x9_Product_Demo_rjclga.mp4",
    },
    {
      name: "Which Movie is Worse?",
      description: "A game where you need to guess which movie has the worse rating! Done with React",
      gitHub: "https://github.com/jopemoma/Which-movie-is-worse-Game",
      modal: true,
      link: "https://which-movie-is-worse.herokuapp.com/",
    },
    {
      name: "React ToDo App",
      description: "A ToDo App done with React",
      gitHub: "https://github.com/jopemoma/React-ToDo-app",
      modal: true,
      link: "https://ecstatic-shirley-082a22.netlify.app",
    },
    {
      name: "JavaScript ToDo App",
      description: "A ToDo App done with Vanilla JavaScript",
      gitHub: "https://github.com/jopemoma/Vanilla-JavaScript-ToDo-App",
      modal: true,
      link: "https://determined-varahamihira-fd0862.netlify.app/",
    },
  ]

  return (
    <div className="timeline" >
      {projects.map((project, index) => (
        <div key={index}>
          <p className="smallStage" >STAGE {6 - index}</p>
          <Paper elevation={3} className={classes.paper}>
            <p className="project__title">{project.name} </p>
            <p className="project">{project.description}</p>
            <p className="project">You can check the repository on GitHub here: <a href={project.gitHub} className="nes-btn is-small is-primary" target="_blank" rel="noreferrer" >{project.name} </a> </p>
            {project.modal &&
              <a href={project.link} className="nes-btn is-success" target="_blank" rel="noreferrer" >Click here to see the Demo! </a>
            }
          </Paper>
        </div>
      ))}
      <div id="contact">
        <p className="smallStage" >STAGE 0</p>
        <Paper elevation={3} className={classes.paper}>
          <p className="project__title">Contact Information </p>
          <img className="theHero" src="https://res.cloudinary.com/diggrhtle/image/upload/v1604332718/persona%20page/Jorge_Moreno_2_z9iur1.jpg" alt="The Hero" />
          <section className="section__contact" >
            <a href="https://github.com/jopemoma" target="_blank" rel="noreferrer" >
              <i className="nes-icon github is-large"></i>
            </a>
            <a href="mailto:jorge.moreno@appliedtechnology.se" target="_blank" rel="noreferrer" >
              <i className="nes-icon gmail is-large"></i>
            </a>
            <a href="https://www.linkedin.com/in/jorge-moreno-mateo/" target="_blank" rel="noreferrer" >
              <i className="nes-icon linkedin is-large"></i>
            </a>
            <a className="anchor__CV" href={cv} target="_blank" rel="noreferrer" >
              {/*               <!-- Copyright Nintendo --> */}
              <img className="nes-avatar link" src="https://res.cloudinary.com/diggrhtle/image/upload/v1605175715/persona%20page/link_cv6kti.gif" alt="CV" />
            </a>
          </section>
        </Paper>
      </div>
    </div>
  );
}

export default TimelineXSmall;