import { connect } from 'react-redux';
import { NOT_FOUND } from 'redux-first-router';
import routes from './route-map';

const stateToProps = state => ({
  route: state.location.type,
})

const Container = ({route}) => {
  const Route = routes[route] || routes[NOT_FOUND];
  return (
    <div>
      <Route />
    </div>
  )
}

export default connect(stateToProps)(Container)