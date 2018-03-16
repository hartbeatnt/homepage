import { combineReducers } from 'redux';
import { reducer as location } from './route/routes.js';

export default combineReducers({
  location,
});