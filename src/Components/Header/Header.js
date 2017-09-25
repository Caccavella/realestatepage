import React, { Component } from 'react';
import logo from '../../Equity_Real_Estate_logo.png';
import { Link} from 'react-router-dom';
import '../../App.css';
import Aboutpage from '../Aboutpage';
import Home from '../Home';
import Properties from '../Properties/Properties';

export default class Header extends Component {

    render() {

        return (

            <div className="header">
                <div className="title">
                    <img src={logo} alt="logo" />
                    <h1>Lisa Caccavella</h1>
                </div>
                <div className="navigation">
                    <ul>
                        <li><Link to='/'component={Home}>Home</Link></li>
                        <li><Link to='/properties' component={Properties}>Properties</Link></li>
                        <li><Link to='/about' component={Aboutpage}>About</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}