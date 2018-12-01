import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NotFound from './components/NotFound/NotFound';
import QuestionsList from './views/QuestionsList/QuestionsList';


// Public paths
const pathRoot = '/';

/**
 * Application Main Router Component
 */
const AppRouter = () => (
  <Switch>
    <Route exact path={pathRoot} component={QuestionsList}/>

    <Route component={NotFound}/>
  </Switch>
);


export {AppRouter as default, pathRoot};
