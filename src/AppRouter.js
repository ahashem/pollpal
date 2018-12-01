import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NotFound from './components/NotFound/NotFound';
import QuestionsList from './views/QuestionsList/QuestionsList';
import QuestionDetails from './views/QuestionDetails/QuestionDetails';


// Public paths
const pathRoot = '/';
const pathQuestionDetails = `${pathRoot}questions`;

/**
 * Application Main Router Component
 */
const AppRouter = () => (
  <Switch>
    <Route exact path={pathRoot} component={QuestionsList}/>
    <Route path={`${pathQuestionDetails}/:id`} component={QuestionDetails} />
    <Route component={NotFound}/>
  </Switch>
);


export {AppRouter as default, pathRoot};
