// @flow

import React, { Component } from 'react';

const SearchContainer = (SearchComponent: Component) =>
  class extends Component {
    state = {
      searchTerm: ''
    };

    handleSearchTermChange = (event: SyntheticKeyboardEvent & { target: HTMLInputElement }) => {
      this.setState({ searchTerm: event.target.value });
    };

    render() {
      return (
        <SearchComponent
          searchTerm={this.state.searchTerm}
          handleSearchTermChange={this.handleSearchTermChange}
          {...this.props}
        />
      );
    }
  };

export default SearchContainer;
