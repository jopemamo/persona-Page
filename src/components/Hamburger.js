import React, { useState } from "react";
import { HashLink } from 'react-router-hash-link';
import { Drawer, IconButton, List, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Menu } from "@material-ui/icons";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const Hamburger = ({ navLinks }) => {
  const classes = useStyles();
  const [state, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState(open);
  };

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navLinks.map(({ title, path }, index) => (
          <HashLink key={index} to={path}>
            <h1 style={{ fontSize: "2rem", padding: "3%" }}>{title}</h1>
          </HashLink>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      <React.Fragment >
        <IconButton
          edge="start"
          aria-label="menu"
          onClick={toggleDrawer(true)}
        >
          <Menu fontSize="large" style={{ color: `gold`, backgroundColor: "#4054b5" }} />
        </IconButton>
        <Drawer open={state} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}

export default Hamburger;
