// @flow

import React, { Component } from 'react';
import axios from 'axios';
import Details from '../components/Details';
import Rating from '../components/Rating';

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
    const value = this.state.apiData.rating;
    return <Details ratingComponent={<Rating value={value} />} {...this.props} />;
  }
}

export default DetailsContainer;
