import React, { Component } from 'react';
import AppLayout from './Layout/AppLayout';

import QuestionsList from '../views/QuestionsList/QuestionsList';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppLayout>
          <QuestionsList />
        </AppLayout>
      </div>
    );
  }
}

export default App;
