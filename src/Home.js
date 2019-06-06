import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import './App.css';
import Icon from '@mdi/react'
import {mdiWeatherHurricane} from '@mdi/js'


function Home() {

  return (

    <div className="Section">
      <header className="Section-header">

        <Icon path={mdiWeatherHurricane}
          size={4}
          color="white"
          spin
        />
        <h1> Welcome! </h1>
        
      </header>
    </div>

  )

}

export default Home;
