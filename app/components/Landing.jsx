// @flow

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchInput from './SearchInput';
import { setSearchTerm } from '../actions';

const mapStateToProps = state => ({ searchTerm: state.searchTerm });
const mapDispatchToProps = (dispatch: Function) => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value))
  }
})

@connect(mapStateToProps, mapDispatchToProps)
class Landing extends Component {
  defaultProps = {
    searchTerm: ''
  }

  props: {
    searchTerm: string,
    handleSearchTermChange: Function
  }

  render() {
    return (
      <div className="landing">
        <h1>svideo</h1>
        <SearchInput
          searchTerm={this.props.searchTerm}
          handleSearchTermChange={this.props.handleSearchTermChange}
        />
        <Link to="/search">or Browse All</Link>
      </div>
    );
  }
}

export default Landing;
