import { connect } from 'react-redux';
import Link from 'redux-first-router-link'
import style from './style.css';

const getPosition = (i, w, h) => {
  return w > h
    ? `${i * 3} 0 -10`
    : `0 ${i * 3} -10`
}

const stateToProps = state => state.location;

const dispatchToProps = dispatch => ({

})

const component = props => {
  const [ w,h ] = [window.innerWidth, window.innerHeight];
  return (
    <div className={style.container}>
      <a-scene vr-mode-ui="enabled: false">
        <a-camera no-click-look="max-tilt: 30"/>
        <a-sky src="https://roadtovrlive-5ea0.kxcdn.com/wp-content/uploads/2014/09/Venice.Still001.jpeg"/>
      </a-scene>
      <div className={style.links}>
        <Link to="/code"><div className={style.link}/></Link>
        <div className={style.welcome}>welcome</div>
        <Link to="/art"><div className={style.link}/></Link>
      </div>
    </div>
  )
}

export default connect(stateToProps, dispatchToProps)(component);