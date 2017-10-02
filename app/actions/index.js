import axios from 'axios';

const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
const ADD_API_DATA = 'ADD_API_DATA';

const setSearchTerm = searchTerm => ({ type: SET_SEARCH_TERM, payload: searchTerm });
const addAPIData = apiData => ({ type: ADD_API_DATA, payload: apiData });
const getAPIDetails = imdbID => dispatch =>
  axios
    .get(`http://localhost:3000/${imdbID}`)
    .then(response => dispatch(addAPIData(response.data)))
    .catch(error => console.log('axios error: ', error)); // eslint-disable-line no-console

export { SET_SEARCH_TERM, ADD_API_DATA };
export { setSearchTerm, addAPIData, getAPIDetails };
