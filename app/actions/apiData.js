import axios from 'axios';

export const ADD_API_DATA = 'ADD_API_DATA';

export const addAPIData = apiData => ({ type: ADD_API_DATA, payload: apiData });

export const getAPIDetails = imdbID => dispatch =>
  axios
    .get(`http://localhost:3000/${imdbID}`)
    .then(response => dispatch(addAPIData(response.data)))
    .catch(error => console.log('axios error: ', error)); // eslint-disable-line no-console
