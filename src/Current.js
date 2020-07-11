import React from 'react';
import './css/Current.css';
import ReactAnimatedWeather from 'react-animated-weather';


function Currently(props) {

  const { currently } = props;
  const icon = currently ? currently.icon.replace(/-/g, '_').toUpperCase() : null;
  const defaults = {
  icon: icon,
  color: '#61dafb',
  size: 100,
  animate: true
  };

  if (currently) {
    return (
      <div className='Section'>
        <div className='Section-div'>
          <div className='boxy-current'>
            <div className='inner'>
              <ReactAnimatedWeather
                icon={defaults.icon}
                color={defaults.color}
                size={defaults.size}
                animate={defaults.animate}
              />
              <br />
              <h2>{currently.temperature}° F</h2>
              <h3>{currently.summary}</h3>
              <h3>Cloud Cover: {Math.floor(currently.cloudCover * 100)}%</h3>
              <h3>humidity: {Math.floor(currently.humidity * 100)}%</h3>
              <h3>Storm Distance: {currently.nearestStormDistance} miles away</h3>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <p>loading...</p>
    );
  }
}

export default Currently;
