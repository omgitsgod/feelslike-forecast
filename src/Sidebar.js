import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import './App.css';
import Icon from '@mdi/react'
import {mdiWeatherHurricane} from '@mdi/js'

function Map() {

  return (

    <div class="sidenav">
      <Link to='/' style={{ textDecoration: 'none', color: 'white'}}><p>Home</p></Link>
      <Link to='/currently' style={{ textDecoration: 'none', color: 'white'}}><p>Currently</p></Link>
      <Link to='/hourly' style={{ textDecoration: 'none', color: 'white'}}><p>Hourly</p></Link>
      <Link to='/fiveday' style={{ textDecoration: 'none', color: 'white'}}><p>Five Day</p></Link>
      <Link to='/map' style={{ textDecoration: 'none', color: 'white'}}><p>Map</p></Link>

    </div>
  )

}

export default Map;
