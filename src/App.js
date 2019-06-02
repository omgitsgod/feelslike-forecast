import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import DarkSkyApi from 'dark-sky-api';
//DarkSkyApi.apiKey = process.env.REACT_APP_WEATHER_API_KEY

function App() {
  const [temp, setTemp] = useState(0)
  const [sum, setSum] = useState('')
  const [cloud, setCloud] = useState(0)
  const [humidity, setHumidity] = useState(0)
  const [stormDistance, setStormDistance] = useState(0)
  const [results, setResults] = useState({})
  let lat, long


  const handleCoords = (coords) => {
    console.log(coords.coords.latitude,coords.coords.longitude);
    lat = coords.coords.latitude
    long = coords.coords.longitude
  }
  navigator.geolocation.getCurrentPosition(handleCoords)

  fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${process.env.REACT_APP_WEATHER_API_KEY}/${lat || 42.3601},${long || -71.0589}`)
  .then(r => r.json()).then(result => {
    setResults(result)
  //  setTemp(result.temperature)
  //  setSum(result.summary)
  //  setCloud(result.cloudCover)
  //  setHumidity(result.humidity)
  //  setStormDistance(result.nearestStormDistance)
  }
  )
  console.log(results);
  if (results.currently) {
  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

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

export default App;
