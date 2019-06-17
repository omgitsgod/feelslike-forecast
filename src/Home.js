import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import './App.css';
import Icon from '@mdi/react'
import {mdiWeatherHurricane} from '@mdi/js'


function Home(props) {
  console.log(props);
  return (

    <div className="Section">
      <header className="Section-header">

        <Icon path={mdiWeatherHurricane}
          size={4}
          color="#61dafb"
          spin
        />
        <h1> Welcome to Feelslike Forecast!</h1>
        {props.daily ? <p>{props.daily.summary}</p> : <p className="loading">getting your weather</p>}

      </header>
    </div>

  )

}

export default Home;
