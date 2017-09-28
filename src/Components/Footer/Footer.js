import React, { Component } from 'react'
import './Footer.css';




export default class Footer extends Component {

    render() {

        return (
            <div className="footercontainer">
                Contact Lisa Caccavella<br />
                801-688-8930<br />
                equity.lisa@gmail.com
                <div className="login">
                    <a href={process.env.REACT_APP_LOGIN} className="loginlink">Admin Login</a>
                </div>
            </div>
        )
    }
}