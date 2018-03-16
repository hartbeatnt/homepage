import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from 'store/config.js';
import App from 'view';

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.querySelector("#app")
);