import {connectRoutes} from 'redux-first-router'
import createHistory from 'history/createBrowserHistory'

const routes = {
  "ROUTE_HOME": {
    path: '/',
    thunk: async dispatch => {
      const response = await fetch('/test');
      const data = await response.json();
      console.log(data);
      dispatch({type:"sure", payload:response});
    }
  },
};

const history = createHistory();

export const {
  reducer,
  middleware,
  enhancer
} = connectRoutes(history, routes);