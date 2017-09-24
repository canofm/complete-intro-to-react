// @flow

import React from 'react';
import ShowCard from './ShowCard';

const Search = (props: {
  searchTerm: string,
  handleSearchTermChange: Function,
  shows: Array<Show>
}) => (
  <div className="search">
    <header>
      <h1>svideo</h1>
      <input
        onChange={props.handleSearchTermChange}
        value={props.searchTerm}
        type="text"
        placeholder="Search"
      />
    </header>
    <div>
      {props.shows
        .filter(show => show.title.toUpperCase().includes(props.searchTerm.toUpperCase()))
        .map(show => <ShowCard key={show.imdbID} {...show} />)}
    </div>
  </div>
);

Search.defaultProps = {
  searchTerm: ''
};

export default Search;
