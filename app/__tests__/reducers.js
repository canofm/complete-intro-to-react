import reducers from '../reducers';

describe('SET_SEARCH_TERM', () => {
  it('should apply correct reducer and change state with payload data', () => {
    const state = reducers(
      { searchTerm: '', apiData: {} },
      { type: 'SET_SEARCH_TERM', payload: 'game of thrones' }
    );
    expect(state).toEqual({ searchTerm: 'game of thrones', apiData: {} });
  });
});

describe('ADD_API_DATA', () => {
  it('should apply correct reducer and change state with payload data', () => {
    const gameOfThrones = {
      rating: '3.5',
      title: 'Game of Thrones',
      year: '2011–',
      description:
        'Nine noble families fight for control over the mythical lands of Westeros, while a forgotten race returns after being dormant for thousands of years.',
      poster: 'got.jpg',
      imdbID: 'tt0944947',
      trailer: 'giYeaKsXnsI'
    };

    const state = reducers(
      { searchTerm: '', apiData: {} },
      { type: 'ADD_API_DATA', payload: gameOfThrones }
    );

    expect(state).toEqual({
      searchTerm: '',
      apiData: { tt0944947: gameOfThrones }
    });
  });
});
