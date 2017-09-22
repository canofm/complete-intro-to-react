// @flow

import React, { Component } from 'react';
import Search from '../components/Search';
import preload from '../../data.json';

class SearchContainer extends Component {
  state = {
    searchTerm: ''
  };

  handleSearchTermChange = (event: SyntheticKeyboardEvent & { target: HTMLInputElement }) => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <Search
        searchTerm={this.state.searchTerm}
        handleSearchTermChange={this.handleSearchTermChange}
        shows={preload.shows}
      />
    );
  }
}

export default SearchContainer;
