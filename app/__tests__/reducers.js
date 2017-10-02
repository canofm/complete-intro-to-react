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
