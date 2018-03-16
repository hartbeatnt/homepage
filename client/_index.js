import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Router from './view';
import './scene';
import './index.css';

import store from 'store/config.js';
import App from 'view';

ReactDOM.render(
  <Provider store={store}>
    <Router/>
  </Provider>,
  document.querySelector("#app")
);