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

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.toggleRandomLetter = this.toggleRandomLetter.bind(this);
    this.state = {
      systems: ['s','y','s','t','e','m','s'],
      spaces: ['s','p','a','c','e','s'],
      sounds: ['s','o','u','n','d','s'],
      stories: ['s','t','o','r','i','e','s'],
    };
    this.timers = [
      setInterval(this.toggleRandomLetter, 400),
      setInterval(this.toggleRandomLetter, 340),
      setInterval(this.toggleRandomLetter, 270),
      setInterval(this.toggleRandomLetter, 230),
      setInterval(this.toggleRandomLetter, 200),
      setInterval(this.toggleRandomLetter, 170),
      setInterval(this.toggleRandomLetter, 135),
      setInterval(this.toggleRandomLetter, 115),
    ];
  }

  componentWillUnmount(){
    this.timers.forEach(timer => clearInterval(timer));
  }

  toggleRandomLetter(){
    let keys = Object.keys(this.state);
    let key = keys[Math.floor(Math.random() * keys.length)];
    let val = this.state[key];
    let change = Math.floor(Math.random() * (val.length));
    this.setState(prevstate =>({[key]: val.map((char, i) => {
      return i !== change
        ? char
        : char === " "
        ? key[i]
        : Math.random() < 0.4
        ? char
        : " "
    })}));
  }

  render(){
    return (
      <div className={style.container}>
        <a-scene 
          vr-mode-ui="enabled: false" 
          keyboard-shortcuts="enterVR: false">
          <a-camera 
            no-click-look={`max-tilt: 1.5; min-tilt:-1`}
            wasd-controls="enabled:false"/>
          <a-sky 
            src="http://res.cloudinary.com/glimpse/image/upload/v1484287066/photospheres/qsietawpbebbkjj1epxn.png"/>
        </a-scene>
        <div className={style.links}>
          <Link to="/code"><div className={style.link}/></Link>
          <div className={style.info}>
            <div className={style.name}>Nathaniel T. Hart</div>
            <div className={style.tags}>
              <div className={style.tag}>
                {this.state.systems.map((char,i)=><div key={i}>{char}</div>)}
              </div>
              <div className={style.tag}>
                {this.state.spaces.map((char,i)=><div key={i}>{char}</div>)}
              </div>
              <div className={style.tag}>
                {this.state.sounds.map((char,i)=><div key={i}>{char}</div>)}
              </div>
              <div className={style.tag}>
                {this.state.stories.map((char,i)=><div key={i}>{char}</div>)}
              </div>
            </div>
            <div className={style.title}>Creative Technologist</div>
          </div>
          <Link to="/art"><div className={style.link}/></Link>
        </div>
      </div>
    )
  }
}

export default connect(stateToProps, dispatchToProps)(Splash);