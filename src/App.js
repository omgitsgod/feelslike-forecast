import React, {useState} from 'react';

import './App.css';
import { Route  } from 'react-router-dom'
import Home from './Home'
import Today from './Today'
import FiveDay from './FiveDay'

function App() {


  return (
    <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/today" component={Today} />
    <Route exact path="/fiveday" component={FiveDay} />
    </div>
  )
}


export default App;
