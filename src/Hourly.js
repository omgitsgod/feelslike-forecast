import React, {useState} from 'react';
import './css/Hourly.css';
import ReactAnimatedWeather from 'react-animated-weather';
import Icon from '@mdi/react'
import {mdiArrowRightCircle,mdiArrowLeftCircle} from '@mdi/js'
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
    <div key={key++} className="boxy-hourly">
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
        <div className="Section-div">
          <div className="graph-hourly">
            <Graph data={props.hourly.data.slice(0,25).map(x => x.apparentTemperature)} label='Temperature' type='line' x={Array.from({length: 25}, (x,i) => i)}/>
          </div>
          <div className='content'>
            <div className='items'>
              {hours}
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <p>loading...</p>
    )
  }

}

export default Hourly;
