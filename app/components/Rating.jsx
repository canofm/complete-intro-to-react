// @flow

import React from 'react';
import Spinner from './Spinner';

const RatingValue = (props: { value: string }) => <h3>{props.value}</h3>;

const Rating = (props: { value?: string }) =>
  props.value ? <RatingValue {...props} /> : <Spinner />;

Rating.defaultProps = {
  value: ''
};

export default Rating;
