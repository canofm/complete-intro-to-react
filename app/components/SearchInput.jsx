// @flow

import React from 'react';

const SearchInput = (props: { searchTerm: string, handleSearchTermChange: Function }) => (
  <input
    onChange={props.handleSearchTermChange}
    value={props.searchTerm}
    type="text"
    placeholder="Search"
  />
);

export default SearchInput;
