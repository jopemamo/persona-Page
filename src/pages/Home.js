import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <BrowserRouter>
    <Switch>
      <Route path='/' render={() => (
        <p>Press Enter to Start</p>
      )}>
      </Route>
    </Switch>
    </BrowserRouter>
    </>
  )
}

export default Home;