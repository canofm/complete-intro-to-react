import React from 'react';
import { shallow } from 'enzyme';
import Rating, { RatingValue } from '../components/Rating';
import Spinner from '../components/Spinner';

describe('Rating component', () => {
  describe('by default', () => {
    const component = shallow(<Rating />);
    it('should renders correctly', () => {
      expect(component).toMatchSnapshot();
    });
    it('should contains Spinner component', () => {
      component.contains(<Spinner />);
    });
  });
  describe('when it gets value', () => {
    const value = '5.5';
    const component = shallow(<Rating value={value} />);
    it('should renders correctly', () => {
      expect(component).toMatchSnapshot();
    });
    it('should contains RatingValue component', () => {
      component.contains(<RatingValue value={value} />);
    });
  });
});
