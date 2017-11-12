import React, { Component } from 'react';
import Header from '../Header/Header';
import './Testimonial.css';
import Footer from '../Footer/Footer';
import axios from 'axios';

export default class Testimonials extends Component {
    constructor() {
        super()
        this.state = {
            testimonials: []
        }
    }
    componentDidMount() {
        axios.get('/testimonials').then(res => {
            this.setState({
                testimonials: res.data
            })
            console.log(this.state.testimonials)
        })
    }
    
    render() {

        var newData = this.state.testimonials.map((e,i) => {
            return (
                <div className="testimonialbox" key={i}>
                    <p >{e.clientname}:</p>
                    <p className="individualtestimonial">"{e.clientmessage}"</p>
                </div>
            )
        })

        return (
            <div className="testimonialwrapper">
                <div className="headerdisplay">
                    <Header />
                </div>
                <div className="testimonialdisplay">
                    <h2>What clients are saying: </h2>
                    <div>
                    {newData}
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
                
            </div>
        )
    }
}