import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from 'store/store.config.js';

const App = () => {
  return (
    <div>
      <p>Hello Worrrld</p>
      
    </div>
  );
};

ReactDOM.render(
  <Provider store={store}><App/></Provider>, document.querySelector("#app")
);