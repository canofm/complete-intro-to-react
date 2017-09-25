// @flow

import React, { Component } from 'react';
import Search from '../components/Search';

class SearchContainer extends Component {
  state = {
    searchTerm: ''
  };
  props: {
    shows: Array<Show>
  };

  handleSearchTermChange = (event: SyntheticKeyboardEvent & { target: HTMLInputElement }) => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <Search
        searchTerm={this.state.searchTerm}
        handleSearchTermChange={this.handleSearchTermChange}
        shows={this.props.shows}
      />
    );
  }
}

export default SearchContainer;
