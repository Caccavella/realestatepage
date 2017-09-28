import React, { Component } from 'react';
import Header from '../Header/Header';
import './Contact.css';
import Footer from '../Footer/Footer';
import axios from 'axios';

export default class Contact extends Component {
    constructor() {
        super();
        this.state = {
            contactName: '',
            contactEmail: '',
            contactPhone: '',
            contactReason: 'Buying',
            contactMessage: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(property, val) {
        this.setState({
            [property]: val
        })
    }
    handleSubmit() {
    
        if (this.state.contactEmail !== "" && this.state.contactName !== "" && this.state.contactPhone !== "" && this.state.contactMessage !== "" && this.state.contactMessage.length < 450) {
            axios.post('/email', this.state).then((res) => {
                console.log(res)
            })
            this.setState({
                contactName: '',
                contactEmail: '',
                contactPhone: '',
                contactReason: 'Buying',
                contactMessage: ''
            })
            alert('Message Submitted! I will get back to you as soon as I am able!')
        } else {
            alert('Please fill in all required fields!')
        }        
    }
    
    render() {
        return (
            <div className="contactwrapper">
                <Header />
                <div className="contactinfo">
                    Name
                    <input value={this.state.contactName} onChange={(e) => this.handleChange('contactName', e.target.value)} placeholder="(Required)"></input>
                    Email Address
                    <input value={this.state.contactEmail} onChange={(e) => this.handleChange('contactEmail', e.target.value)} placeholder="(Required)" ></input>
                    Phone Number
                    <input value={this.state.contactPhone} onChange={(e) => this.handleChange('contactPhone', e.target.value)} placeholder="(Required)"></input>
                    Contact Reason
                    {/* Needs to have the reason work */}
                    <select value={this.state.contactReason} onChange={(e) => this.handleChange('contactReason', e.target.value)}>
                        <option value='Buying'>Buying</option>
                        <option value='Selling'>Selling</option>
                        <option value='Short Sale'>Short Sale</option>
                        <option value='Testimonial'>Testimonial</option>
                    </select>
                    <br />
                    Message
                    <div className="message">
                    <textarea placeholder="(Required)" type="text" value={this.state.contactMessage} onChange={ ( e ) => this.handleChange('contactMessage',e.target.value) } />
                    </div>
                    <button className="submitbutton" onClick={() => this.handleSubmit()}>Submit</button>
                </div>
                <div><Footer /></div>
            </div>
        )
    }
}