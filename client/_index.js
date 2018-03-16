import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from 'store/store.config.js';

const App = () => {
  return (
    <div>
      <p>Hello World</p>
      
    </div>
  );
};

ReactDOM.render(
  <Provider store={store}><App/></Provider>, document.querySelector("#app")
);