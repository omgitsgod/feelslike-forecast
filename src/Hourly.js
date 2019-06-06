import React, {useState} from 'react';
import './App.css';
import Icon from '@mdi/react'
import {mdiWeatherHurricane} from '@mdi/js'

function Hourly(props) {
  let hours
  let hour = 0
  if (props.hourly) {
    hours = props.hourly.data.map(x => {

    return (
    <div>
    <h5>{hour++} hour(s) from now</h5>
    <p>Temp: {x.apparentTemperature}</p>
    <p>{x.summary}</p>
    </div>
  )
  })
 }

  if (props.hourly) {
    return (

      <div className="Section">
        <header className="Section-header">
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
