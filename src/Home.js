import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import './App.css';
import Icon from '@mdi/react'
import {mdiWeatherHurricane} from '@mdi/js'


function Home() {

  return (

    <div className="App">
      <header className="App-header">

        <Icon path={mdiWeatherHurricane}
          size={4}
          color="white"
          spin
        />
        <h1> Welcome! </h1>
        <Link to='/today' style={{ textDecoration: 'none', color: 'white'}}><p>Today</p></Link>
        <Link to='/hourly' style={{ textDecoration: 'none', color: 'white'}}><p>Hourly</p></Link>
        <Link to='/fiveday' style={{ textDecoration: 'none', color: 'white'}}><p>Five Day</p></Link>
        <Link to='/map' style={{ textDecoration: 'none', color: 'white'}}><p>Map</p></Link>
      </header>
    </div>

  )

}

export default Home;
