// @flow

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import type { Match } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import Landing from './Landing';
import Search from './Search';
import FourOhFour from './FourOhFour';
import DetailsContainer from '../containers/DetailsContainer';
import preload from '../../data.json';

const App = () => (
  <Provider store={store}>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/search" component={() => <Search shows={preload.shows} />} />
        <Route
          path="/details/:id"
          component={(props: { match: Match }) => (
            <DetailsContainer
              show={preload.shows.find(show => props.match.params.id === show.imdbID)}
              {...props}
            />
          )}
        />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </Provider>
);

export default App;
