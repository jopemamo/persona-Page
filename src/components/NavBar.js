import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';
import Hamburger from './Hamburger';
import Sound from './Sound';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const navLinks = [
  { title: `Jorge's Adventure`, path: `/` },
  { title: `About`, path: `/about` },
  { title: `Projects`, path: `/projects#stagesTitle` },
  { title: `Contact`, path: `/projects#contact` }
];

export default function ButtonAppBar({ handleSound, sound, audioLink, audio }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar control="true" >
          <Hidden smDown >
          {navLinks.map(({title, path}, index) => (
            <HashLink key={index} to={path}>
              <h1>{title}</h1>
            </HashLink>
          ))}
          </Hidden>
          <Hidden mdUp>
            <Hamburger navLinks={navLinks} />
          </Hidden>
          <Sound sound={sound} audio={audio} audioLink={audioLink} handleSound={handleSound} />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}
