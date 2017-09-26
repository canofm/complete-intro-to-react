// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import SearchInput from './SearchInput';

const Landing = (props: { searchTerm?: string, handleSearchTermChange: Function }) => (
  <div className="landing">
    <h1>svideo</h1>
    <SearchInput
      searchTerm={props.searchTerm}
      handleSearchTermChange={props.handleSearchTermChange}
    />
    <Link to="/search">or Browse All</Link>
  </div>
);

Landing.defaultProps = {
  searchTerm: ''
};

export default Landing;
