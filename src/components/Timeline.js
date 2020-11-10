import React from 'react'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '../components/Modal';
import LoanCalculator from './LoanCalculator';
import WMW from './WMW';
import BidraSammen from './BidraSammen';
import JSToDo from '../components/JSToDo';
import ReactToDo from '../components/ReactToDo';

const useStyles = makeStyles((theme) => ({

  paper: {
    padding: '26px 16px',
    minWidth: "60%",

  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const TimelineComponent = () => {

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
      component: LoanCalculator,
    },
    {
      name: "BidraSammen",
      description: "Our Graduation Project at Salt. An App done with React Native.",
      gitHub: "https://github.com/jopemoma/Graduation-Project",
      modal: true,
      component: BidraSammen,
    },
    {
      name: "Which Movie is Worse?",
      description: "A game where you need to guess which movie has the worse rating! Done with React",
      gitHub: "https://github.com/jopemoma/Which-movie-is-worse-Game",
      modal: true,
      component: WMW,
    },
    {
      name: "React ToDo App",
      description: "A ToDo App done with React",
      gitHub: "https://github.com/jopemoma/React-ToDo-app",
      modal: true,
      component: ReactToDo,
    },
    {
      name: "JavaScript ToDo App",
      description: "A ToDo App done with Vanilla JavaScript",
      gitHub: "https://github.com/jopemoma/Vanilla-JavaScript-ToDo-App",
      modal: true,
      component: JSToDo,
    },
  ]

  return (
    <div className="timeline" >
      <Timeline style={{marginRight:"30%"}}align="left">
        {projects.map(( project, index) => (
        <TimelineItem id={index}>
          <TimelineOppositeContent>
            STAGE {6-index}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              {project.name}
              <p className="project">{project.description}</p>
              <p className="project">You can check the repository on GitHub here: <a href={project.gitHub} target="_blank">{project.name} </a> </p>
              {project.modal && 
              <Modal project={project.component} />
              }
            </Paper>
          </TimelineContent>
        </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}

export default TimelineComponent;