import React, {useState} from 'react';
import './App.css';
import { Route  } from 'react-router-dom'
import Home from './Home'
import Sidebar from './Sidebar'
import Currently from './Currently'
import FiveDay from './FiveDay'
import Hourly from './Hourly'
import Map from './Map'

function App() {


  return (
    <div>
    <Sidebar />
    <Route exact path="/" component={Home} />
    <Route exact path="/currently" component={Currently} />
    <Route exact path="/fiveday" component={FiveDay} />
    <Route exact path="/hourly" component={Hourly} />
    <Route exact path ="/map" component={Map} />
    </div>
  )
}


export default App;
