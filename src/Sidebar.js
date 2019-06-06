import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import './App.css';
import Icon from '@mdi/react'
import {mdiWeatherHurricane} from '@mdi/js'

function Map() {

  return (

    <div className="sidenav">
    <header className="Section-header">
      <Link to='/' className="navy" style={{ textDecoration: 'none', color: 'white'}}><p>Home</p></Link>
      <Link to='/current' className="navy" style={{ textDecoration: 'none', color: 'white'}}><p>Current</p></Link>
      <Link to='/hourly' className="navy" style={{ textDecoration: 'none', color: 'white'}}><p>Hourly</p></Link>
      <Link to='/week' className="navy" style={{ textDecoration: 'none', color: 'white'}}><p>Week</p></Link>
      <Link to='/map' className="navy" style={{ textDecoration: 'none', color: 'white'}}><p>Map</p></Link>
    </header>
    </div>
  )

}

export default Map;
