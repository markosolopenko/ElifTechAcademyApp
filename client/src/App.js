import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

// Local imports
import Main from './pages/Main/Main';
import Banks from './pages/Banks/Banks';
import MortgageCalculator from './pages/MortgageCalculator/MortgageCalculator';

const App = () => {
  return (
      <Switch>
        <Route exact path="https://elif-tech-academy-project.herokuapp.com/main" component={Main} />
        <Route exact path="https://elif-tech-academy-project.herokuapp.com/banks" component={Banks} />
        <Route exact path="https://elif-tech-academy-project.herokuapp.com/morgageCalculator" component={MortgageCalculator} />
        <Route>
          <Redirect to="/main" />
        </Route>
      </Switch>
  );
}

export default App;
