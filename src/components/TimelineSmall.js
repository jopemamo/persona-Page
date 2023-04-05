import React from 'react'
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@material-ui/lab';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { projects } from '../utils/projects';
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

const TimelineSmall = () => {

  const classes = useStyles();

  return (
    <div className="timeline" >
      <Timeline align="left" style={{ maxWidth: "90%" }}>
        {projects.map((project, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent>
              <p className="smallStage" >STAGE {projects.length - index}</p>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <p className="project__title">{project.name} </p>
                <p className="project">{project.description}</p>
                <p className="project">You can check the repository on GitHub here: <a href={project.gitHub} className="nes-btn is-small is-primary" target="_blank" rel="noreferrer" >{project.name} </a> </p>
                {project.modal &&
                  <a href={project.link} className="nes-btn is-success" target="_blank" rel="noreferrer" >Click here to see the Demo! </a>
                }
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
        <TimelineItem id="contact">
          <TimelineOppositeContent>
            <p className="smallStage" >STAGE 0</p>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <p className="project__title">Contact Information </p>
              <img className="theHero" src="https://res.cloudinary.com/diggrhtle/image/upload/v1680684641/DSCF3225_mwts6n.jpg"  alt="The Hero" />
              <section className="section__contact" >
                <a href="https://github.com/jopemoma" target="_blank" rel="noreferrer" >
                  <i className="nes-icon github is-medium"></i>
                </a>
                <a href="mailto:jpmmpj@gmail.com" target="_blank" rel="noreferrer" >
                  <i className="nes-icon gmail is-medium"></i>
                </a>
                <a href="https://www.linkedin.com/in/jorge-mateo-moreno/" target="_blank" rel="noreferrer" >
                  <i className="nes-icon linkedin is-medium"></i>
                </a>
                <a className="anchor__CV" href={cv} target="_blank" rel="noreferrer" >
                  {/*               <!-- Copyright Nintendo --> */}
                  <img className="nes-avatar link" src="https://res.cloudinary.com/diggrhtle/image/upload/v1605175715/persona%20page/link_cv6kti.gif" alt="CV" />
                </a>
              </section>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}

export default TimelineSmall;