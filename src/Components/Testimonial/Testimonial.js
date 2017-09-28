import React, { Component } from 'react';
import Header from '../Header/Header';
import './Testimonial.css';
import Footer from '../Footer/Footer';

export default class Testimonials extends Component {
    render() {
        return (
            <div className="testimonialwrapper">
                <div className="headerdisplay">
                    <Header />
                </div>
                <div className="testimonialdisplay">
                    <h2>What clients are saying: </h2>
                    <p >"Lisa helped us so much with selling our home! We were able to get it
                        under contract within 12 hours from listing, for more than the list price!"
                    </p>
                    <p className="individualtestimonial">-Anthony and Chelsea</p>
                    <p>"I was a coconut once."
                    </p>
                    <p className='individualtestimonial'>-Odd Person</p>
                    <p>"Hector isaac mouse yak nelson apple mickey elephant ice savior
                    Hector isaac mouse yak nelson apple mickey elephant ice savior
                    Hector isaac mouse yak nelson apple mickey elephant ice savior"
                    </p>
                    <p className='individualtestimonial'>-Shika Shika Slim Shady</p>
                </div>
                <div>
                    <Footer />
                </div>
                
            </div>
        )
    }
}