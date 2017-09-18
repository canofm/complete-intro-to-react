import React from 'react';
import { render } from 'react-dom';
import Landing from './components/Landing';

const App = () => (
  <div className="app">
    <Landing />
  </div>
);

render(<App />, document.getElementById('app'));
