import React, {useState} from 'react';
import './css/Week.css';
import ReactAnimatedWeather from 'react-animated-weather';
import Icon from '@mdi/react'
import {mdiArrowRightCircle,mdiArrowLeftCircle} from '@mdi/js'
import Graph from './Graph'

function Week(props) {
  const [index, setIndex] = useState(0)
  let daily
  let key = 0
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  let day = new Date().getDay()

  const dayList = days.slice(day).slice(0, 7)

  const turnRight = () => {
    if (index === dayList.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }

  const turnLeft = () => {
    if (index === 0) {
      setIndex(dayList.length - 1)
    } else {
      setIndex(index -1)
    }
  }

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
    animate: true
  };

  if (props.daily) {
    daily = props.daily.data.map(x => {
    return (
    <div key={key++} className="boxy-week">
      <h5>{days[day++]}</h5>
      <div className='icon'>
        <ReactAnimatedWeather
          icon={setIcon(x.icon)}
          color={defaults.color}
          animate={defaults.animate}
          className='icony'
        />
      </div>
      <div className='week-text'>
        <p>High: {x.apparentTemperatureHigh}° F</p>
        <p>Low: {x.apparentTemperatureLow}° F</p>
      </div>
      <br />
      <div className='summary'>
        <p>{x.summary}</p>
      </div>
    </div>
  )
  })
  }
  console.log(props);
  if (props.daily) {
    return (
      <div className="Section">
        <div className="Section-div">
          <div className="graph-week">
            <Graph data={props.daily.data.map(x => x.precipProbability * 100)} label='Precipitation' type='bar' x={dayList}/>
          </div>
          <div className='content'>
            <div className='arrow left'>
            <Icon path={mdiArrowLeftCircle}
              color="#61dafb"
              onClick={turnLeft}
            />
            </div>
            <div className='items'>
              {daily[index]}
            </div>
            <div className='arrow right'>
              <Icon path={mdiArrowRightCircle}
                color="#61dafb"
                onClick={turnRight}
              />
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

export default Week;
