import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Search from './components/Search';

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Route exact path="/" component={Landing} />
      <Route path="/search" component={Search} />
    </div>
  </BrowserRouter>
);

render(<App />, document.getElementById('app'));
