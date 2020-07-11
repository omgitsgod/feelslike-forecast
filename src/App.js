import React, { useState, useEffect } from 'react';
import './css/App.css';
import { Route  } from 'react-router-dom';
import { getPosition } from './Utils';
import Home from './Home';
import Sidebar from './Sidebar';
import Current from './Current';
import Week from './Week';
import Hourly from './Hourly';
import Map from './Map';


function App() {

  const [results, setResults] = useState({});

  const handleGeolocation = async () => {

    const position = await getPosition();
    const { latitude, longitude } = position.coords;
    const json = await fetch(`https://feelslike-backend.herokuapp.com/get/${latitude}/${longitude}`).then(r => r.json());
    
    setResults(json);
  }

  useEffect(() => {
  
    handleGeolocation();
  }, []);

  return (
    <div className='Section-div'>
      <Sidebar />
      <Route exact path='/' render={(props)=><Home {...props} daily={results.daily} />} />
      <Route exact path='/current' render={(props)=><Current {...props} currently={results.currently} />} />
      <Route exact path='/hourly' render={(props)=><Hourly {...props} hourly={results.hourly} />} />
      <Route exact path='/week' render={(props)=><Week {...props} daily={results.daily} />} />
      <Route exact path ='/map' component={Map} />
    </div>
  );
}

export default App;
