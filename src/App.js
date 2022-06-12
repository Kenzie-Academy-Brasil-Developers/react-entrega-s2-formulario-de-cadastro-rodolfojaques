import './App.css';

import { useState } from 'react';

import { Route, Switch } from 'react-router-dom';
import { Register } from './pages/register';


function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path={'/'}>
          <Register/>
        </Route>
        <Route exact path={"/home"}>
          bbb
        </Route>
      </Switch>
    </div>
  );
}

export default App;
