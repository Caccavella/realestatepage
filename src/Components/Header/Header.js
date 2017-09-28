import React, { Component } from 'react';
import logo from '../../Equity_Real_Estate_logo.png';
import { Link } from 'react-router-dom';
import './Header.css';


export default class Header extends Component {

    render() {


        return (

            <div className="header">
                <img src={logo} alt="logo" />

               
                    <div className="hamburger">Menu</div>
                
                <div className="navigation">
                    <div className="navitems">
                        <Link to='/' className="navlink">Home</Link>
                        <Link to='/properties' className="navlink">Properties</Link>
                        <Link to='/about' className="navlink">About</Link>
                        <Link to='/testimonials' className="navlink">Testimonials</Link>
                        <Link to='/contact' className="navlink">Contact</Link>
                    </div>
                </div>
            </div>
        )
    }
}