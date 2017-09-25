import React, { Component } from 'react'
import './Footer.css';
import {Link} from 'react-router-dom';



export default class Footer extends Component {
    
        render() {
    
            return (
                <div className="footercontainer">
                    <p>Contact Lisa Caccavella</p>
                    <p>801-688-8930</p>
                    <p>equity.lisa@gmail.com</p>
                    <div className="login">
                        <Link to="/login" className="loginlink">Admin Login</Link>
                    </div>
                </div>
            )
        }
    }