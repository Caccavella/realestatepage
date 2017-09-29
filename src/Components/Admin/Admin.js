import React, { Component } from 'react';
import Header from '../Header/Header';
import './Admin.css';
import axios from 'axios';


export default class Admin extends Component {
    constructor() {
        super()
        this.state = {
            emails: []
        }
        this.archiveEmail = this.archiveEmail.bind(this);
        this.createTestimonial = this.createTestimonial.bind(this);
        // this.archiveAndTestimonial = this.archiveAndTestimonial.bind(this);
    }
    componentDidMount() {
        axios.get('/email').then(res => {
            this.setState({
                emails: res.data
            })
            console.log(this.state.emails)
        })
        axios.get('/auth/authorized').then(user => {
            if(!user) {
                this.props.history.push('/')
            } else {
                
            }

        })
    }
    
    archiveEmail(eid) {
        axios.get('/email/archive/' + eid).then(res => {
            axios.get('/email').then((res) => {
                this.setState({
                    emails: res.data
                })
            })
        })
    }

    createTestimonial(eid) {
        console.log(eid)
        axios.get('/email/testimonial/' + eid).then(res => {
            axios.get('/email').then((res) => {
                this.setState({
                    emails: res.data
                })
            })
        })
    }
    
    
    archiveAndTestimonial(x) {
        this.archiveEmail(x)
        this.createTestimonial(x)
    }

    render() {
        var data = this.state.emails.map((e, i) => {
            return (
                <div className="commentdisplay" key={i}>
                    <div className="datacontainer">
                        <button className="archivebutton" onClick={() => this.archiveEmail(e.emailid)}>Archive</button>
                    </div>
                    <div className="datacontainer">
                        <button className="testimonialbutton"onClick={() => {this.archiveAndTestimonial(e.emailid)}}>Set As Testimonial</button>
                    </div>
                    <div className="datacontainer">
                        <span>Name: {e.clientname}</span>
                    </div>
                    <div className="datacontainer">
                        <span>Email: {e.clientemail}</span>
                    </div>
                    <div className="datacontainer">
                        <span>Phone: {e.clientphone}</span>
                    </div>
                    <div className="datacontainer">
                        <span>Reason: {e.contactreason}</span>
                    </div>
                    <div className="datacontainer">
                        <span>Message: {e.clientmessage}</span>
                    </div>
                </div>
            )
        })
        return (
            <div className="adminpage">
                <div className="headercontainer">
                    <Header />
                </div>
                <div className="logoutcontainer">
                    <a href='/auth/logout'><button className="logoutbutton">Log Out</button></a>
                </div>
                <div>
                    {data}
                </div>
            </div>
        )
    }
}