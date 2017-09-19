import React from 'react';
import { string, func, arrayOf, shape } from 'prop-types';
import ShowCard from './ShowCard';

const Search = props => (
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

Search.propTypes = {
  handleSearchTermChange: func.isRequired,
  searchTerm: string.isRequired,
  shows: arrayOf(shape).isRequired
};

export default Search;
