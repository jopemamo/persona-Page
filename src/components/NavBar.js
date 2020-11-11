import React from 'react';
import { Link } from 'react-router-dom';
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

export default function ButtonAppBar( { handleSound, sound, audioLink, audio }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar control="true" >
          <Link to="/" style={{ textDecoration: 'none' }}>
          <h1>Jorge's Adventure</h1>
          </Link>
          <Link to="/about" style={{ textDecoration: 'none' }}>
          <h1>About</h1>
          </Link>
          <Link to="/projects" style={{ textDecoration: 'none' }}>
          <h1>Projects</h1>
          </Link>
          <Sound  sound={sound} audio={audio} audioLink={audioLink} handleSound={handleSound}/>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}
