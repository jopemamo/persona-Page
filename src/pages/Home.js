import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import About from './About';
import Projects from './Projects';

const Home = () => {
  return (
    <>
    <BrowserRouter>
    <Switch>
      <Route path='/about' render={() => (
        <About />
      )}>
      </Route>
      <Route path='/projects' render={() => (
        <Projects />
      )}>
      </Route>
      <Route path='/' render={() => (
        <Link to='/about' style={{ textDecoration: 'none' }}>
          <div>
        <p>Press Enter to Start</p>
        </div>
        </Link>
      )}>
      </Route>
    </Switch>
    </BrowserRouter>
    </>
  )
}

export default Home;