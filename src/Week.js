import React, {useState} from 'react';
import './css/Week.css';
import ReactAnimatedWeather from 'react-animated-weather';
import Graph from './Graph'

function Week(props) {
  const [selected, setSelected] = useState(0)
  let daily
  let key = 0
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  let day = new Date().getDay()

  const dayList = days.slice(day).slice(0, 7)
  dayList[0] = "Today"

  const choice = (index) => {
    setSelected(index)
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
    let ind = 0
    daily = props.daily.data.slice(0,7).map((x, y) => {
    return (
    <div key={key++} className={y === selected ? "selected" : "boxy-week"} onClick={() => choice(y)} onMouseEnter={() => {choice(y)}}>
      <h5>{dayList[ind++]}</h5>
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
  if (props.daily) {
    return (
      <div className="Section">
        <div className="Section-div">
          <div className="graph-week">
            <Graph data={props.daily.data.slice(0,7).map(x => x.precipProbability * 100)} selected={selected} label='Precipitation' type='bar' x={dayList}/>
          </div>
          <div className='content'>
            <div className='items'>
              {daily}
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
