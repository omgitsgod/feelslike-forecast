import React, {useState} from 'react';
import './App.css';
import Icon from '@mdi/react'
import {mdiWeatherHurricane} from '@mdi/js'

function Week(props) {
  let daily
  if (props.daily) {
    daily = props.daily.data.map(x => {

    return (
    <div className="boxy">
    <h5>Day</h5>
    <p>High: {x.apparentTemperatureHigh}</p>
    <p>Low: {x.apparentTemperatureLow}</p>
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
