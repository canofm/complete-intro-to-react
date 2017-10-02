import moxios from 'moxios';
import { setSearchTerm } from '../actions/searchTerm';
import { addAPIData, getAPIDetails } from '../actions/apiData';

const blackMirror = {
  title: 'Black Mirror',
  year: '2011–',
  description: 'A television anthology series that shows the dark side of life and technology.',
  poster: 'bm.jpg',
  imdbID: 'tt2085059',
  trailer: 'jDiYGjp5iFg',
  rating: '9.7'
};

test('setSearchTerm', () => {
  expect(setSearchTerm('Black')).toMatchSnapshot();
});

test('addAPIData', () => {
  expect(addAPIData(blackMirror)).toMatchSnapshot();
});

test('getAPIDetails', done => {
  const dispatchMock = jest.fn();
  moxios.withMock(() => {
    getAPIDetails(blackMirror.imdbID)(dispatchMock);

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request
        .respondWith({
          status: 200,
          response: blackMirror
        })
        .then(() => {
          expect(request.url).toEqual(`http://localhost:3000/${blackMirror.imdbID}`);
          expect(dispatchMock).toBeCalledWith(addAPIData(blackMirror));
          done();
        });
    });
  });
});
