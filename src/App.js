import './App.css';

import { Route, Switch, useHistory } from 'react-router-dom';
import { Register } from './pages/register';
import { Home } from './pages/loged';

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path={'/'}>
          <Register useHistory={useHistory} />
        </Route>
        <Route exact path={"/home/:name"}>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
