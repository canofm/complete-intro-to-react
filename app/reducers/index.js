import { combineReducers } from 'redux';
import searchTerm from './searchTerm';
import apiData from './apiData';

const rootReducer = combineReducers({ searchTerm, apiData });

export default rootReducer;
