// @flow

import React, { Component } from 'react';
import axios from 'axios';
import Details from '../components/Details';
import Spinner from '../components/Spinner';

class DetailsContainer extends Component {
  state = {
    apiData: { rating: '' }
  };
  componentDidMount() {
    axios
      .get(`http://localhost:3000/${this.props.show.imdbID}`)
      .then((response: { data: { rating: string } }) => {
        this.setState({ apiData: response.data });
      });
  }
  props: {
    show: Show
  };
  render() {
    const Rating = <h3>{this.state.apiData.rating}</h3>;
    const ratingComponent = this.state.apiData.rating ? Rating : <Spinner />;

    return <Details ratingComponent={ratingComponent} {...this.props} />;
  }
}

export default DetailsContainer;
