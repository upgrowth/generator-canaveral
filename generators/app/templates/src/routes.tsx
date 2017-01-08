import * as React from 'react';
import {Router, Route, Redirect, browserHistory, IndexRoute} from 'react-router';
import App from './App';
import HomePage from './HomePage';

const Routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={HomePage}/>
    </Route>
  </Router>
);

export default Routes;