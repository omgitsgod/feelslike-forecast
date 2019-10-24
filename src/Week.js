import React from 'react';
import './App.css';
import ReactAnimatedWeather from 'react-animated-weather';
import Graph from './Graph'

function Week(props) {
  let daily
  let key = 0
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  let day = new Date().getDay()
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
  if (props.daily) {
    daily = props.daily.data.map(x => {

    return (
    <div key={key++}className="boxy" >
    <h5>{days[day++]}</h5>
    <ReactAnimatedWeather
      icon={setIcon(x.icon)}
      color={defaults.color}
      size={defaults.size}
      animate={defaults.animate}
    />
    <p>High: {x.apparentTemperatureHigh}° F</p>
    <p>Low: {x.apparentTemperatureLow}° F</p>
    <p>{x.summary}</p>
    </div>
  )
  })
  }
  console.log(props);
  if (props.daily) {
    return (

      <div className="Section">
        <header className="Section-header">
          <div className="boxy">
            <Graph data={props.daily.data.map(x => x.precipProbability)} type='Precipitation'/>
          </div>
          {daily}
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

export default Week;
