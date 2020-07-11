import React from 'react';
import './css/Home.css';
import Icon from '@mdi/react';
import { mdiWeatherHurricane } from '@mdi/js';


function Home(props) {

  const { daily } = props;

  return (
    <div className='Section'>
      <div className='Section-div'>
        <Icon path={mdiWeatherHurricane}
          size={4}
          color='#61dafb'
          spin
        />
        <h1> Welcome to Feelslike Forecast!</h1>
        {daily ? <p>{daily.summary}</p> : <p className='loading'>getting your weather</p>}
      </div>
    </div>
  );
}

export default Home;
