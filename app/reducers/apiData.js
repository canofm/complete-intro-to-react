import { ADD_API_DATA } from '../actions';

const apiData = (state = {}, action) => {
  if (action.type === ADD_API_DATA) {
    return Object.assign({}, state, { [action.payload.imdbID]: action.payload });
  }
  return state;
};

export default apiData;
