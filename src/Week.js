import React, {useState} from 'react';
import './App.css';
import Icon from '@mdi/react'
import {mdiWeatherHurricane} from '@mdi/js'
import ReactAnimatedWeather from 'react-animated-weather';
import Graph from './Graph'

function Week(props) {
  let daily
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  let day = new Date().getDay()
  const setIcon = (x) => {
    switch(x) {
      case 'clear-day':
      return 'CLEAR_DAY'
      break
      case 'clear-night':
      return 'CLEAR_NIGHT'
      break
      case 'partly-cloudy-day':
      return 'PARTLY_CLOUDY_DAY'
      break
      case 'partly-cloudy-night':
      return 'PARTLY_CLOUDY_NIGHT'
      break
      case 'cloudy':
      return 'CLOUDY'
      break
      case 'rain':
      return 'RAIN'
      break
      case 'sleet':
      return 'SLEET'
      break
      case 'snow':
      return 'SNOW'
      break
      case 'wind':
      return 'WIND'
      break
      case 'fog':
      return 'FOG'
      break
      default:
      return 'CLEAR_DAY'
      break
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
    <div className="boxy">
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
            <Graph data={props.daily.data.map(x => x.apparentTemperatureHigh)} data2={props.daily.data.map(x => x.apparentTemperatureLow)} type='High/Low'/>
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
