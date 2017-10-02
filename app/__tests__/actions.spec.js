import { setSearchTerm } from '../actions/searchTerm';
import { addAPIData } from '../actions/apiData';

test('setSearchTerm', () => {
  expect(setSearchTerm('Black')).toMatchSnapshot();
});

test('addAPIData', () => {
  const blackMirror = {
    title: 'Black Mirror',
    year: '2011–',
    description: 'A television anthology series that shows the dark side of life and technology.',
    poster: 'bm.jpg',
    imdbID: 'tt2085059',
    trailer: 'jDiYGjp5iFg',
    rating: '9.7'
  };

  expect(addAPIData(blackMirror)).toMatchSnapshot();
});
