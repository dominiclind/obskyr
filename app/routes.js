import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './pages/App';
import HomePage from './pages/HomePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    { /*}<Route path="/counter" component={CounterPage} /> {*/}
  </Route>
);
