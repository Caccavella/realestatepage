import React, { Component } from 'react';
import Header from '../Header/Header';
import './Properties.css';

export default class Properties extends Component {
    render() {
        return (
            <div className="properties">                
                <Header />
                <div className="iframe">
            <iframe src="http://www.utahrealestate.com/index/public.index" title="iframetest" width="100%" height="995" frameBorder="0"></iframe>
                </div>
            </div>
        )
    }
}