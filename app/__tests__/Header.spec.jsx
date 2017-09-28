import React from 'react';
import { shallow } from 'enzyme';
import BackButton from '../components/BackButton';
import Header from '../components/Header';
import SearchInput from '../components/SearchInput';

describe('Header component', () => {
  describe('by default', () => {
    const component = shallow(<Header />);

    it('should render correctly', () => {
      expect(component).toMatchSnapshot();
    });
    it('should render BackButton by default', () => {
      component.contains(<BackButton />);
    });
  });
  describe('when it receive showSearch prop', () => {
    const component = shallow(<Header showSearch />);
    it('should render correctly', () => {
      expect(component).toMatchSnapshot();
    });
    it('should render SearchInput if it gets showSearch prop', () => {
      component.contains(<SearchInput />);
    });
  });
});
