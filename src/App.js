import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import HomePage from './components/home/index.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={HomePage}/>
      </BrowserRouter>
    );
  }
}

export default App;
