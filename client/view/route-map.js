import { NOT_FOUND } from 'redux-first-router';
import { Splash } from './screens';

export default {
  ROUTE_HOME: Splash,
  ROUTE_SPLASH: Splash,
  [NOT_FOUND]: props => <div>404, yo</div>
}
