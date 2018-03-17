import { connect } from 'react-redux';
import Link from 'redux-first-router-link'
import style from './style.css';

const getPosition = (i, w, h) => {
  return w > h
    ? `${i * 3} 0 -10`
    : `0 ${i * 3} -10`
}

const stateToProps = state => ({
  screen: state.screen
});

const dispatchToProps = dispatch => ({

})

const component = props => {
  return (
    <div className={style.container}>
      <a-scene 
        vr-mode-ui="enabled: false" 
        keyboard-shortcuts="enterVR: false">
        <a-camera 
          no-click-look={`max-tilt: 0.89; min-tilt:-0.2`}
          wasd-controls="enabled:false"/>
        <a-sky 
          src="http://res.cloudinary.com/glimpse/image/upload/v1484287066/photospheres/kcjscouufhafxavyyanf.png"/>
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