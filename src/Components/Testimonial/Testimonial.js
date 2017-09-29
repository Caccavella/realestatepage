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
                <div className="testimonialbox">
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
                    {/* <p >"Lisa helped us so much with selling our home! We were able to get it
                        under contract within 12 hours from listing, for more than the list price!"
                    </p>
                    <p className="individualtestimonial">-Anthony and Chelsea</p> */}
                    <div>
                    {newData}
                    </div>
                    {/* <p>"Hector isaac mouse yak nelson apple mickey elephant ice savior
                    Hector isaac mouse yak nelson apple mickey elephant ice savior
                    Hector isaac mouse yak nelson apple mickey elephant ice savior" */}
                    {/* </p> */}
                    {/* <p className='individualtestimonial'>-Shika Shika Slim Shady</p> */}
                </div>
                <div>
                    <Footer />
                </div>
                
            </div>
        )
    }
}