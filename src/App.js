import React, {useState, useEffect} from 'react';
import './css/App.css';
import { Route  } from 'react-router-dom'
import Home from './Home'
import Sidebar from './Sidebar'
import Current from './Current'
import Week from './Week'
import Hourly from './Hourly'
import Map from './Map'

function App() {
  const [results, setResults] = useState({})

  useEffect(() => {
  new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject)
  })
  .then((position) => {
    fetch(`https://feelslike-backend.herokuapp.com/get/${position.coords.latitude}/${position.coords.longitude}`).then(r => r.json()).then(setResults)
  })
  .catch((err) => {
    console.error(err.message);
  });
  }, [])
  console.log(results);
  return (
    <div className="Section-div">
      <Sidebar />
      <Route exact path="/" render={(props)=><Home {...props} daily={results.daily}/>}/>
      <Route exact path="/current" render={(props)=><Current {...props} currently={results.currently}/>}/>
      <Route exact path="/hourly" render={(props)=><Hourly {...props} hourly={results.hourly}/>}/>
      <Route exact path="/week" render={(props)=><Week {...props} daily={results.daily}/>}/>
      <Route exact path ="/map" component={Map} />
    </div>
  )
}


export default App;
