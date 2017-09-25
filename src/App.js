import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Aboutpage from './Components/Aboutpage';
import Home from './Components/Home';
import Properties from './Components/Properties/Properties';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Home} />
        <Route path='/about' component={Aboutpage} />
        <Route path='/properties' component={Properties} />
      </div>
    );
  }
}

export default App;
