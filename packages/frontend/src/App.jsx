import { hot } from 'react-hot-loader';
import React from 'react';
import './App.css';

import hello from 'core';

const App = () => (
  <div className="App">
    <h1>{hello('frontend')}</h1>
  </div>
);

export default hot(module)(App);
