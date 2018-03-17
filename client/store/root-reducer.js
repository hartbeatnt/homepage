import { combineReducers } from 'redux';
import { reducer as location } from './route/routes.js';
import screen from './screen/reducer.js';

export default combineReducers({
  location,
  screen
});