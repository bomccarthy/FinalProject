import React, { Component } from 'react';
import '../main.css';

export default class Home extends Component {
    constructor(){
        super();
        this.state = {
            cigars: []
        }
    }

    componentDidMount() {
    }

    render() {
        return (
        <div>
            Home
        </div>
        )
    }
}
