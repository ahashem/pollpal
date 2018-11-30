import React, { Component } from 'react';
import AppLayout from './Layout/AppLayout';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppLayout>
          <div>Hello</div>
        </AppLayout>
      </div>
    );
  }
}

export default App;
