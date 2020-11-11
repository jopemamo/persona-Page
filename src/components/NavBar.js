import React from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink  } from 'react-router-hash-link';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Sound from './Sound';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar({ handleSound, sound, audioLink, audio }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar control="true" >
          <NavLink to="/" >
            <h1>Jorge's Adventure</h1>
          </NavLink>
          <NavLink to="/about">
            <h1>About</h1>
          </NavLink>
          <HashLink to="/projects#stagesTitle">
            <h1>Projects</h1>
          </HashLink>
          <HashLink to="/projects#contact">
            <h1>Contact Information</h1>
          </HashLink>
          <Sound sound={sound} audio={audio} audioLink={audioLink} handleSound={handleSound} />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}
