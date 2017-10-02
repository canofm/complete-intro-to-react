// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShowCard from './ShowCard';
import Header from './Header';

const UnwrappedSearch = (props: { searchTerm: string, shows: Array<Show>}) => (
  <div className="search">
    <Header showSearch />
    <div>
      {props.shows
        .filter(show => show.title.toUpperCase().includes(props.searchTerm.toUpperCase()))
        .map(show => <ShowCard key={show.imdbID} {...show} />)}
    </div>
  </div>
);

const mapStateToProps = state => ({ searchTerm: state.searchTerm });

@connect(mapStateToProps)
class Search extends Component {
  defaultProps = {
    searchTerm: ''
  };
  props: {
    searchTerm: string,
    shows: Array<Show>
  };

  render() {
    return (<UnwrappedSearch shows={this.props.shows} searchTerm={this.props.searchTerm} />);
  }
}

export default Search;
export { UnwrappedSearch };
