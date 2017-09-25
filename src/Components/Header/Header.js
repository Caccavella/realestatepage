import React, { Component } from 'react';
import logo from '../../Equity_Real_Estate_logo.png';
import { Link } from 'react-router-dom';
import '../../App.css';
// import Aboutpage from '../Aboutpage';
// import Home from '../Home/Home';
// import Properties from '../Properties/Properties';
// import Contact from '../Contact/Contact';

export default class Header extends Component {

    render() {

        return (

            <div className="header">
                <div className="title">
                    <img src={logo} alt="logo" />
                    <h1>Lisa Caccavella</h1>
                </div>
                <div className="navigation">
                    <div className="navitems">
                        <Link to='/'  className="navlink">Home</Link>
                        <Link to='/properties' className="navlink">Properties</Link>
                        <Link to='/about'  className="navlink">About</Link>
                        <Link to='/contact'  className="navlink">Contact</Link>
                    </div>
                </div>
            </div>
        )
    }
}