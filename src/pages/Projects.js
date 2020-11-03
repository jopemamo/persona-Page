import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import BidraSammen from '../components/BidraSammen';
import WMW from '../components/WMW';

const Projects = () => {
  const [projects, setProjects] = useState({
    bidraSammen: false,
    WMW: false,
    LoanCalculator: false,
    ReactToDo: false,
    JSToDo: false,
  });

  const defaultState = {
    bidraSammen: false,
    WMW: false,
    LoanCalculator: false,
    ReactToDo: false,
    JSToDo: false,
  };

  const handleClick = (e) => {
    console.log(e.target.id);
    setProjects({...defaultState, [e.target.id]: true })
  };

  return (
    <>
      <h1>Quests Completed</h1>
      <p id= "bidraSammen"  onClick={handleClick}>Bidra Sammen</p>
      {projects.bidraSammen ? <BidraSammen /> : null}
      <p id= "WMW"  onClick={handleClick}>Which Movie is Worse?</p>
      {projects.WMW ? <WMW /> : null}
      <p>Loan Calculator</p>
      <p>React ToDo App</p>
      <p>Vanilla JavaScript ToDo App</p>
      <Link to='/about' style={{ textDecoration: 'none' }}>
        <p className="options">Back to About</p>
      </Link>
    </>
  )
}

export default Projects;