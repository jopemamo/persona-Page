import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import './styles/App.css';

const App = () => {

  const [submitted, setSubmitted] = useState(false);

  const [sound, setSound] = useState(false);

  const handleKeyPressed = () => {
    setSubmitted(true)
  }

  const handleSound = () => {
    setSound(!sound);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/about' render={() =>
            <About handleSound={handleSound} sound={sound} />
          }>
          </Route>
          <Route path='/projects' render={() =>
            <Projects handleSound={handleSound} sound={sound} />
          }>
          </Route>
          <Route path='/' render={() =>
            <Home submitted={submitted} handleKeyPressed={handleKeyPressed} handleSound={handleSound} sound={sound} />
          }
          >
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
