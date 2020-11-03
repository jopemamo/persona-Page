import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import BidraSammen from '../components/BidraSammen';

const Projects = () => {
  const [projects, setProjects] = useState({
    bidraSammen: false,
    WMW: false,
    LoanCalculator: false,
    ReactToDo: false,
    JSToDo: false,
  })

  const handleClick = () => {
    setProjects({ ...projects, bidraSammen: true})
  }

  return (
    <>
      <h1>Quests Completed</h1>
      <p onClick={handleClick}>Bidra Sammen</p>
      {projects.bidraSammen ? <BidraSammen /> : null}
      <p>Which Movie is Worse?</p>
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