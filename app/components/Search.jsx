// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShowCard from './ShowCard';
import Header from './Header';

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
    return (
      <div className="search">
        <Header showSearch />
        <div>
          {this.props.shows
            .filter(show => show.title.toUpperCase().includes(this.props.searchTerm.toUpperCase()))
            .map(show => <ShowCard key={show.imdbID} {...show} />)}
        </div>
      </div>
    );
  }
}
export default Search;
