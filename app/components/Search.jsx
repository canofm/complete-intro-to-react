// @flow

import React from 'react';
import ShowCard from './ShowCard';
import Header from './Header';

const Search = (props: {
  searchTerm: string,
  handleSearchTermChange: Function,
  shows: Array<Show>
}) => (
  <div className="search">
    <Header showSearch {...props} />
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
