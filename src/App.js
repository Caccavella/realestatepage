import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Aboutpage from './Components/Aboutpage';
import Home from './Components/Home/Home';
import Properties from './Components/Properties/Properties';
import Contact from './Components/Contact/Contact';
import Admin from './Components/Admin/Admin';
import Testimonials from './Components/Testimonial/Testimonial';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={Aboutpage} />
          <Route path='/testimonials' component={Testimonials} />
          <Route path='/properties' component={Properties} />
          <Route path='/contact' component={Contact} />
          <Route exact path={process.env.REACT_APP_SECRET_PATH} component={Admin} />
        </Switch>
      </div>
    );
  }
}

export default App;
