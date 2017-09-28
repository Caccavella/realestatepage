import React, { Component } from 'react';
import Header from './Header/Header';
import './Aboutpage.css';
import Footer from './Footer/Footer';
import {Link} from 'react-router-dom';

export default class Aboutpage extends Component {
    

    render() {
        return (
            <div className="aboutwrapper">
                <div className="headersquare">
                <Header />
                </div>
                <div className="aboutinfo">
                    <h1>About Me:</h1>
                    <p>- I have Seller Representation Specialist Designation</p>
                    <p>- I help buyers and sellers throughout Salt Lake, Utah, and Tooele counties</p>
                    <p>- In depth Short Sale Specialty - I have had over 300 approved!</p>
                    <p>- I am dedicated to helping each client meet their needs and goals</p>
                    <div className="headshotcontainer">
                        {/* <img src='https://image.ibb.co/j2Kar5/headshot.jpg' alt="headshot" /> */}
                    </div>
                    <div className="details">
                    <p className="bulkinfo"> I have been working in Real Estate since 2007.  My goal is to have both sides of the transaction leave the closing table happy and looking forward to their future.  I work hard on my client's behalf and am prepared to help them through the hurdles and challenges of the real estate process.  I love a challenge and enjoy that moment when my client finds their perfect home!  I love working with both buyers and sellers and grow to care about each as friends.</p>
                    <p className="bulkinfo"> I believe in continuing education so I can provide the highest qualify service to my customers and clients.  Knowledge is power on my clients behalf.  I believe in going the extra mile to make sure my service is the best.</p>
                    <p className="bulkinfo"> I don't believe in high pressure - you should have the time that you need to find the perfect home.</p>
                        <Link to="/contact">Contact me</Link> today and let's GET STARTED!
                    </div>
                </div>
                <div><Footer /></div>
            </div>
        )
    }
}