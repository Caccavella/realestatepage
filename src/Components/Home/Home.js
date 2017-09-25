import React, { Component } from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default class Home extends Component {    
        render() {
            return (
                <div className="home">
                    <div>
                    <Header />
                    </div>
                    <footer className="footer"><Footer /></footer>
                </div>
            )
        }
    }