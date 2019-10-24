import React from 'react';
import './App.css';
import ReactAnimatedWeather from 'react-animated-weather';
import Graph from './Graph'

function Hourly(props) {
  let hours
  let hour = 0
  let key = 0
  const setIcon = (x) => {
    switch(x) {
      case 'clear-day':
      return 'CLEAR_DAY'
      case 'clear-night':
      return 'CLEAR_NIGHT'
      case 'partly-cloudy-day':
      return 'PARTLY_CLOUDY_DAY'
      case 'partly-cloudy-night':
      return 'PARTLY_CLOUDY_NIGHT'
      case 'cloudy':
      return 'CLOUDY'
      case 'rain':
      return 'RAIN'
      case 'sleet':
      return 'SLEET'
      case 'snow':
      return 'SNOW'
      case 'wind':
      return 'WIND'
      case 'fog':
      return 'FOG'
      default:
      return 'CLEAR_DAY'
    }
  }
  const defaults = {
    color: '#61dafb',
    size: 50,
    animate: true
  };
  if (props.hourly) {
    hours = props.hourly.data.slice(0,25).map(x => {

    return (
    <div key={key++} className="boxy">
    <h5>{hour++} hour(s) from now</h5>
    <ReactAnimatedWeather
      icon={setIcon(x.icon)}
      color={defaults.color}
      size={defaults.size}
      animate={defaults.animate}
    />
    <p>{x.apparentTemperature}° F</p>
    <p>{x.summary}</p>
    </div>
  )
  })
 }

  if (props.hourly) {
    return (

      <div className="Section">
        <header className="Section-header">
          <div className="boxy">
            <Graph data={props.hourly.data.slice(0,25).map(x => x.apparentTemperature)} label='Temperature' type='line'/>
          </div>
          {hours}
        </header>
      </div>
    )
  } else {
    return (
      <div className="App">
        <header className="App-header">
      <p>loading...</p>
      </header>
      </div>
    )
  }

}

export default Hourly;
