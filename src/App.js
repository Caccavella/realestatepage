import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Aboutpage from './Components/Aboutpage';
import Home from './Components/Home/Home';
import Properties from './Components/Properties/Properties';
import Contact from './Components/Contact/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Home} />
        <Route path='/about' component={Aboutpage} />
        <Route path='/properties' component={Properties} />
        <Route path='/contact' component={Contact} />
      </div>
    );
  }
}

export default App;
