import React, {useState} from 'react';
import './App.css';
import { Route  } from 'react-router-dom'
import Home from './Home'
import Sidebar from './Sidebar'
import Current from './Current'
import FiveDay from './FiveDay'
import Hourly from './Hourly'
import Map from './Map'

function App() {


  return (
    <header className="Section-header">
    <Sidebar />
    <Route exact path="/" component={Home} />
    <Route exact path="/current" component={Current} />
    <Route exact path="/fiveday" component={FiveDay} />
    <Route exact path="/hourly" component={Hourly} />
    <Route exact path ="/map" component={Map} />
    </header>
  )
}


export default App;
