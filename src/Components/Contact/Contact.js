import React, { Component } from 'react';
import Header from '../Header/Header';
import './Contact.css';
import Footer from '../Footer/Footer';

export default class Contact extends Component {
    constructor() {
        super();
        this.state = {
            contactName: '',
            contactEmail: '',
            contactPhone: '',
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
            console.log(this.state);
        }
        alert('Message Submitted! I will get back to you as soon as I am able!')
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
                    Message
                    <input id="message" value={this.state.contactMessage} onChange={(e) => this.handleChange('contactMessage',e.target.value)} placeholder="(Required)"></input>
                    <button className="submitbutton" onClick={() => console.log(this.state)}>Submit</button>
                </div>
                <div><Footer /></div>
            </div>
        )
    }
}