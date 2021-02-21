import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

// Local imports
import Main from './pages/Main/Main';
import Banks from './pages/Banks/Banks';
import MortgageCalculator from './pages/MortgageCalculator/MortgageCalculator';

const App = () => {
  return (
      <Switch>
        <Route path="/" component={Main} >
          <Route exact path="main" component={Main} />
          <Route exact path="banks" component={Banks} />
          <Route exact path="morgageCalculator" component={MortgageCalculator} />
          <Route>
            <Redirect to="/main" />
          </Route>
        </Route>
      </Switch>
  );
}

export default App;
