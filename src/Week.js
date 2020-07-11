import React, { useState } from 'react';
import './css/Week.css';
import ReactAnimatedWeather from 'react-animated-weather';
import Graph from './Graph';


function Week(props) {

  const [selected, setSelected] = useState(0);
  const { daily } = props;
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const day = new Date().getDay();
  const dayList = days.slice(day).slice(0, 7);
  const defaults = {
    color: '#61dafb',
    animate: true
  };
  let ind = 0;
  let key = 0;
  const dayCards = daily ? daily.data.slice(0,7).map((x, y) => (
    <div key={key++} className={y === selected ? 'selected-week' : 'boxy-week'} onClick={() => choice(y)} onMouseEnter={() => {choice(y)}}>
      <h5>{dayList[ind++]}</h5>
      <div className='icon'>
        <ReactAnimatedWeather
          icon={x.icon.replace(/-/g, '_').toUpperCase()}
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
  )) : null;

  dayList[0] = 'Today';

  const choice = (index) => {

    setSelected(index);
  }

  if (daily) {
    return (
      <div className='Section'>
        <div className='Section-div'>
          <div className='graph-week'>
            <Graph data={daily.data.slice(0,7).map(x => x.precipProbability * 100)} selected={selected} label='Precipitation' type='bar' x={dayList}/>
          </div>
          <div className='content'>
            <div className='items'>
              {dayCards}
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

export default Week;
