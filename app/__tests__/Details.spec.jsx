import React from 'react';
import { shallow } from 'enzyme';
import Details from '../components/Details';
import Rating from '../components/Rating';
import preload from '../../data.json';

describe('Details component', () => {
  it('should render correctly', () => {
    const component = shallow(<Details ratingComponent={Rating} show={preload.shows[0]} />);
    expect(component).toMatchSnapshot();
  });
});
