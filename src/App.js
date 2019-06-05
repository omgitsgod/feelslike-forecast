import React, {useState} from 'react';

import './App.css';
import { Route  } from 'react-router-dom'
import Home from './Home'
import Today from './Today'

function App() {


  return (
    <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/today" component={Today} />
    </div>
  )
}


export default App;
