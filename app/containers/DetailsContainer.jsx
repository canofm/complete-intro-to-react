// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAPIDetails } from '../actions/apiData';
import Details from '../components/Details';
import Rating from '../components/Rating';

const mapStateToProps = (state, ownProps) => {
  const apiData = state.apiData[ownProps.show.imdbID] || {};
  return { rating: apiData.rating };
};

const mapDispatchToProps = (dispatch: Function, ownProps) => ({
  getAPIData() {
    dispatch(getAPIDetails(ownProps.show.imdbID));
  }
});

@connect(mapStateToProps, mapDispatchToProps)
class DetailsContainer extends Component {
  componentDidMount() {
    if (!this.props.rating) {
      this.props.getAPIData();
    }
  }

  props: {
    show: Show,
    rating: string,
    getAPIData: Function
  };

  render() {
    const value = this.props.rating;
    return <Details ratingComponent={<Rating value={value} />} {...this.props} />;
  }
}

export default DetailsContainer;
