import React from 'react';
import { shallow } from 'enzyme';
import ShowCard from '../components/ShowCard';

describe('ShowCard component', () => {
  it('should renders correctly', () => {
    const show = {
      title: 'A title',
      description: 'A description',
      poster: 'A poster',
      year: 'A year'
    };

    const component = shallow(<ShowCard {...show} />);
    expect(component).toMatchSnapshot();
  });
});
