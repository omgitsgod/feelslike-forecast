import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import './App.css';
import Icon from '@mdi/react'
import {mdiMenuOpen} from '@mdi/js'

function Map() {

  const [open, setOpen] = useState(true)
  if (open) {
  return (

    <div className="sidenav" >
    <header className="Section-header">
      <Link to='/' className="navy" style={{ textDecoration: 'none', color: 'white'}}><p>Home</p></Link>
      <Link to='/current' className="navy" style={{ textDecoration: 'none', color: 'white'}}><p>Current</p></Link>
      <Link to='/hourly' className="navy" style={{ textDecoration: 'none', color: 'white'}}><p>Hourly</p></Link>
      <Link to='/week' className="navy" style={{ textDecoration: 'none', color: 'white'}}><p>Week</p></Link>
      <Link to='/map' className="navy" style={{ textDecoration: 'none', color: 'white'}}><p>Map</p></Link>
      <Icon path={mdiMenuOpen}
        size={2}
        color="#61dafb"
        onClick={()=>setOpen(!open)}
      />
    </header>
    </div>
  )
} else {
  return (
    <div className="hidenav" >
      <header className="Section-header">
      <Icon path={mdiMenuOpen}
        size={2}
        color="#61dafb"
        horizontal
        onClick={()=>setOpen(!open)}
      />
      </header>
    </div>
  )
}
}

export default Map;
