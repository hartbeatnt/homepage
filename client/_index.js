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

const app = document.createElement('div');
app.id = "app";
document.body.appendChild(app);

ReactDOM.render(
  <Provider store={store}><App/></Provider>, document.querySelector("#app")
);