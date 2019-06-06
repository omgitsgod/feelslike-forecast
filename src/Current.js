import React, {useState} from 'react';
import './App.css';
import Icon from '@mdi/react'
import {mdiWeatherHurricane} from '@mdi/js'

function Currently(props) {
  const [temp, setTemp] = useState(0)
  const [sum, setSum] = useState('')
  const [cloud, setCloud] = useState(0)
  const [humidity, setHumidity] = useState(0)
  const [stormDistance, setStormDistance] = useState(0)
  const [results, setResults] = useState({})
  let lat, long




  if (results.currently) {
  return (

    <div className="Section">
      <header className="Section-header">

        <Icon path={mdiWeatherHurricane}
          size={4}
          color="#61dafb"
          spin
        />
        <h1>Right now:</h1>
        <br />
        <h2>Temp: {results.currently.temperature}</h2>
        <h3>Summary: {results.currently.summary}</h3>
        <h3>Cloud Cover: {Math.floor(results.currently.cloudCover * 100)}%</h3>
        <h3>humidity: {Math.floor(results.currently.humidity * 100)}%</h3>
        <h3>Storm Distance: {results.currently.nearestStormDistance} miles away</h3>

      </header>
    </div>
  );
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

export default Currently;
