import { hot } from 'react-hot-loader';
import React from 'react';
import './App.css';

import Deck from './Deck';

const App = () => (
  <div className="App">
    <Deck />
  </div>
);

export default hot(module)(App);
