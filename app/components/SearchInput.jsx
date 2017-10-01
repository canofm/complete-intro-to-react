// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchTerm } from '../actions';

const mapStateToProps = state => ({ searchTerm: state.searchTerm });
const mapDispatchToProps = (dispatch: Function) => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  }
});

@connect(mapStateToProps,mapDispatchToProps)
class SearchInput extends Component {
  props: {
    searchTerm: string,
    handleSearchTermChange: Function
  };

  render() {
    return (
      <input
        onChange={this.props.handleSearchTermChange}
        value={this.props.searchTerm}
        type="text"
        placeholder="Search"
      />
    );
  }
}

export default SearchInput;
