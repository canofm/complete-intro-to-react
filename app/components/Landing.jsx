// @flow

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import type { RouterHistory } from 'react-router-dom';
import SearchInput from './SearchInput';

class Landing extends Component {
  props: {
    history: RouterHistory
  };

  goToSearch = event => {
    event.preventDefault();
    this.props.history.push('/search');
  };

  render() {
    return (
      <div className="landing">
        <h1>svideo</h1>
        <form onSubmit={this.goToSearch}>
          <SearchInput />
        </form>
        <Link to="/search">or Browse All</Link>
      </div>
    );
  }
}

export default Landing;
