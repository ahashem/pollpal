import React, { Component } from 'react';
import AppLayout from './Layout/AppLayout';
import AppRouter from '../AppRouter';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppLayout>
          <AppRouter />
        </AppLayout>
      </div>
    );
  }
}

export default App;
