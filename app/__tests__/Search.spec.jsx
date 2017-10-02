import React from 'react';
import { shallow } from 'enzyme';
import { UnwrappedSearch as Search } from '../components/Search';
import ShowCard from '../components/ShowCard';
import preload from '../../data.json';

describe('Search component', () => {
  const componentWithSearchTerm = (searchTerm = '') =>
    shallow(
      <Search shows={preload.shows} searchTerm={searchTerm} handleSearchTermChange={f => f} />
    );

  const componentWithoutSearchTerm = componentWithSearchTerm();

  it('should renders correctly', () => {
    expect(componentWithoutSearchTerm).toMatchSnapshot();
  });

  it('should render correct amount of shows', () => {
    expect(componentWithoutSearchTerm.find(ShowCard).length).toEqual(preload.shows.length);
  });

  it('should render correct amount of shows based on searchTerm', () => {
    expect(componentWithSearchTerm('black').find(ShowCard).length).toEqual(2);
  });
});
